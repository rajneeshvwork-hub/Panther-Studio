# QuietCue 1.1 — Architecture

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

For recording, html2canvas rasterizes the active PPTX slide into QuietCue's internal slide canvas. JSZip also inspects the OOXML package to locate associated notes-slide XML and extract speaker-note text where available.

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
QuietCue slide canvas
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

QuietCue uses browser storage for two different jobs.

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

If the previous session ends unexpectedly, QuietCue can detect protected chunks on the next launch and offer recovery.

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

## Floating presenter workspace

QuietCue stores camera and Private Guidance geometry as stage-relative normalized coordinates (`x`, `y`, `w`, `h`). This means the widgets keep their relative position when the stage changes size or Focus / Performance mode changes the available workspace.

The camera geometry is reused by the clean-output compositor, so dragging or resizing the camera changes both the presenter's preview and the final recorded camera placement. Private Guidance geometry is presenter-only and is never sent to the recording canvas or Audience View.


## 1.0 recording protection strategy

During an active recording, MediaRecorder emits chunks every few seconds. QuietCue attempts to persist each chunk to IndexedDB. A chunk remains in a small volatile fallback queue until the IndexedDB write succeeds. This avoids retaining a permanent second copy of the full recording in JavaScript memory.

If IndexedDB fails mid-recording, affected/new chunks remain in memory and QuietCue warns the presenter that Recording Protection has degraded; the take itself continues. Before long recordings, QuietCue uses `navigator.storage.estimate()` when available to identify obvious storage-capacity problems before countdown.

On a clean stop, protected + fallback chunks are merged in sequence, the final Blob is created, and temporary protected chunks are cleared.
