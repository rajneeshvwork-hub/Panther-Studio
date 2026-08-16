# Wakanda Studio V4 — Architecture

## Product layers

```text
IMPORT
PPTX / Google Slides / PDF / Images
          ↓
PREPARE
Private Guidance + timing + devices
          ↓
REHEARSE
Per-slide plan + audio + pacing
          ↓
PRESENT
Record OR Live Audience View
          ↓
REVIEW
Takes + timing + download
```

## Clean recording architecture

The presenter interface and recording output are intentionally separate.

```text
Presenter DOM
├── slide preview
├── Private Guidance
├── timer / pacing
├── thumbnails
├── controls
└── camera preview

                 selected output only
                         ↓
                Recording Canvas
                ├── slide
                └── camera
                         +
                    microphone
                         ↓
                   MediaRecorder
                         ↓
                     video take
```

Private Guidance is never drawn into the recording canvas.

## Live Audience View

```text
Presenter window
├── private guidance
├── timing
├── controls
└── slide preview
          │
          │ clean slide output
          ↓
Audience window
└── presentation only
```

The presenter shares/projects the Audience window rather than the presenter window.

## Source import architecture

### PDF

PDF.js renders each page into the slide canvas.

### Images

JPG / PNG files are decoded in the browser and drawn into the slide canvas.

### PowerPoint

`@aiden0z/pptx-renderer` renders `.pptx` slides into HTML/SVG DOM in the browser.

For recording, html2canvas rasterizes the active PPTX slide into Wakanda's internal slide canvas. JSZip also inspects the OOXML package to locate associated notes-slide XML and extract speaker-note text where available.

### Google Slides — OAuth

```text
Google Identity Services
        ↓ access token
Google Slides REST API
        ↓ slide structure + speaker notes
Google Drive export
        ↓ PDF
PDF.js
        ↓
Wakanda slide canvas
```

### Google Slides — shareable link

```text
Shared Slides URL
       ↓
Node /api/google-slides bridge
       ↓
Google PDF export
       ↓
PDF.js
```

This bridge is only for presentations that Google allows to be exported without interactive authentication.

## Session persistence

Wakanda uses browser storage for two different jobs.

### localStorage

Lightweight preferences and Private Guidance:

- target duration,
- WPM / text size,
- teleprompter preferences,
- camera positioning,
- recording name,
- notes.

### IndexedDB

Larger/recoverable data:

- latest presentation file(s),
- progressive recording chunks.

This allows V4 to offer session restoration and recording recovery without uploading the user's media to a server.

## Recording protection

During a recording, `MediaRecorder` emits chunks incrementally. V4 protects those chunks in IndexedDB while the session is active.

On a clean successful stop, the chunks are assembled into the take and the protection store is cleared.

If the previous session ends unexpectedly, Wakanda can detect protected chunks on the next launch and offer recovery.

This is recovery-oriented protection rather than a guarantee against every browser/OS failure.

## Security / privacy boundaries

- Media remains local unless the user explicitly uses an external import service such as Google.
- No OpenAI/API secret is embedded in the front-end.
- `config.js` is designed only for browser-safe configuration such as a Google OAuth Web Client ID.
- Google integration requests read-only scopes.
- The shared Slides Node bridge proxies only presentation PDF export; it does not store presentations.

## Deployment models

### Static GitHub Pages

Works for the core app, including local PPTX/PDF/image imports and recording.

Google OAuth can work after its authorized JavaScript origin is configured.

The `/api/google-slides` shared-link bridge is unavailable because GitHub Pages cannot execute `server.js`.

### Node deployment

Run:

```bash
npm start
```

This serves the static application and enables the shareable Google Slides export bridge.
