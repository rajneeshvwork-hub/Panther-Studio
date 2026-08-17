# Wakanda Studio V4.2

> **Present better. Not harder.**

Wakanda Studio is a presentation performance workspace that helps you **prepare, rehearse, present, record, and improve** without exposing your private guidance to the audience.

V4.2 is the final stability release for the V4 presentation-performance model. V4 moved beyond the original teleprompter-recorder concept. The product is organized around the complete presentation workflow:

**Import → Prepare → Rehearse → Present → Review**

## Why it exists

Screen recorders solve the capture problem. They do not solve the delivery problem.

Wakanda Studio is designed for the moment when you already have a deck but still need to:

- stay within a target duration,
- remember what to say,
- keep your eyes close to the camera,
- avoid poor microphone settings,
- recover from interruptions,
- present live without sharing your notes,
- compare takes before choosing the final one.

## V4.2 highlights

### Import
- **PowerPoint `.pptx`** import with browser-side slide rendering.
- Extracts PowerPoint speaker notes when available.
- **Google Slides** import through either:
  - Google OAuth for private decks, including speaker-note retrieval, or
  - a shareable/public Slides link through the included Node bridge.
- **PDF** import with automatic slide count.
- **JPG / PNG** slide import.
- Drag-and-drop import and clickable slide thumbnails.

### Prepare
- Private Guidance instead of a single plain-text notes box.
- Markdown / TXT upload, paste, or per-slide editing.
- Slide-aware headings such as `## Slide 4`.
- Guidance cues such as `[REMINDER]`, `[CUE]`, `[PAUSE]`, `[TRANSITION]`, and `[SLOW]`.
- Duration presets: **5, 7, 10, 15, 20 minutes** plus custom duration.
- Automatic timing estimate and per-slide time budget.
- **Floating camera bubble**: drag it anywhere inside the stage and resize it from the lower-right handle. Its exact stage-relative placement is mirrored into the recording.
- Camera presets remain available, but dragging/resizing automatically switches to Custom layout.
- **Floating Private Guidance**: drag its header to move it and resize the panel from its lower-right handle.
- Private guidance opacity, font size, focus line, and reading controls remain available.
- A **Reset layout** action restores sensible camera + guidance defaults.

### Rehearse
- Rehearsal without recording.
- Per-slide timing plan.
- Expected finish vs target.
- Live **ahead / behind** indicator.
- Auto-paced or manual guidance scrolling.
- Audio level / clipping health indicator.
- 5-second microphone test with playback.

### Present
Two performance modes:

**Record**
- Internally composes only the slide + optional camera into the recorded canvas.
- Private Guidance, controls, timer, thumbnails, and sidebar are excluded from the video.
- 720p / 1080p output.
- Pause / resume and countdown.

**Live Present**
- Opens a separate clean Audience View.
- You keep the presenter view with private guidance and timing.
- Share/project the Audience View rather than your private presenter interface.

### Review
- Review recording before download.
- Target vs actual duration.
- Slides reached.
- Script word count.
- Stores multiple takes for comparison.
- Play, download, mark best, or delete a take.

### Reliability
- Restores the last presentation session where possible.
- Saves notes and presentation preferences locally.
- Progressive recording-chunk protection using IndexedDB.
- Can recover protected chunks after an interrupted session.
- Warns when camera or microphone access fails or disconnects.
- Locks risky setup changes while a presentation session is active.

## V4.2 final stability patch

V4.2 incorporates the V4.1 floating-workspace fixes and closes the final reliability gaps found in release scanning:

- camera and Private Guidance remain freely draggable/resizable and persist across sessions,
- a camera or microphone disconnect now safely ends and saves an interrupted recording instead of promising an unreliable resume,
- recording chunks are progressively persisted without permanently duplicating the whole take in RAM, with in-memory fallback if IndexedDB writes fail,
- storage capacity is checked before long protected recordings where browser estimates are available,
- recoverable interrupted chunks must be recovered before a new recording can overwrite them,
- session Take retention is bounded to reduce memory pressure on long recordings,
- opening an older Take now updates the Review player **and** its Download target correctly,
- deleting the Best take automatically promotes a remaining take,
- static hosting detects that the shared-link Google bridge is unavailable and disables that option instead of failing after the click,
- timing no longer displays a misleading negative zero,
- the Node server handles `HEAD` correctly and reports V4.2 health/version metadata.

## Privacy model

The key promise is simple:

> **Private guidance stays private.**

For recorded sessions, Wakanda Studio creates a dedicated internal recording canvas. Only the rendered presentation and optional camera feed are drawn to it.

The following remain outside the recording canvas:

- Private Guidance / teleprompter
- countdown and presenter timer
- pacing indicator
- slide thumbnails
- setup sidebar
- presenter buttons and controls

For live sessions, Wakanda Studio creates a separate Audience View that contains the clean presentation output.

## PowerPoint support

V4 uses `@aiden0z/pptx-renderer` to render PowerPoint files directly in the browser and JSZip to inspect the OOXML package for speaker notes.

The goal is **high-fidelity static deck import**, not reproduction of the entire Microsoft PowerPoint slideshow engine. Complex animations, transitions, embedded media, or uncommon PowerPoint effects may not reproduce exactly.

If absolute visual fidelity is critical for a specific deck, PDF remains the safest fallback.

## Google Slides support

There are two paths.

### 1. Connect Google — private decks

Add a Google OAuth Web Client ID to `config.js`:

```js
window.WAKANDA_CONFIG = {
  googleClientId: 'YOUR_GOOGLE_OAUTH_WEB_CLIENT_ID'
};
```

Wakanda Studio requests read-only presentation / Drive permissions, reads Slides metadata and speaker notes, and exports the presentation as PDF for rendering.

See `GOOGLE_SLIDES_SETUP.md` for setup guidance.

### 2. Shared/public link

When the included Node server is running, paste a shareable Google Slides URL. The `/api/google-slides` bridge attempts to export the presentation as PDF.

This only works when Google permits export without interactive authentication.

## Run locally

### Recommended

Requires **Node.js 18+**.

```bash
npm start
```

Then open:

```text
http://localhost:8080
```

If port 8080 is occupied:

```bash
PORT=8123 npm start
```

and open:

```text
http://localhost:8123
```

`localhost` is important because browsers allow camera and microphone access on secure contexts such as HTTPS and localhost.

## GitHub Pages

The front-end itself can be published on GitHub Pages and works well for:

- PowerPoint import
- PDF import
- image slides
- notes / guidance
- rehearsal
- camera / microphone
- recording
- Google OAuth import after correctly configuring your OAuth origin

The **shared-link Google Slides bridge** is a Node endpoint and therefore cannot run on GitHub Pages alone. For that path, deploy `server.js` to a Node-capable host or use Connect Google.

See `GITHUB_UPLOAD_GUIDE.md`.

## Speaker guidance format

```md
## Slide 1 — Opening
Welcome. Today I am going to walk you through...

[REMINDER] Slow down for the opening.

## Slide 2 — Problem
The core problem became clear during research...

[CUE] Point to the chart.

[PAUSE] 2 seconds.

## Slide 3 — Solution
[TRANSITION] Now let's move from the problem to the solution.
```

## Recommended browser

Use a recent desktop version of **Google Chrome** or **Microsoft Edge**.

Wakanda Studio intentionally shows a warning rather than pretending to be fully optimized for small mobile screens.

## Architecture

See `ARCHITECTURE.md` for the clean-output, source-import, live presentation, and recording-protection architecture.

## Test before an important presentation

Use `TEST_CHECKLIST.md`, especially for:

1. the real PowerPoint / Slides deck,
2. your actual camera and microphone,
3. a 15–30 second recording,
4. clean-output privacy,
5. the downloaded video on your machine.

## Current boundaries

Wakanda Studio V4.2 deliberately does **not** try to be:

- a full video editor,
- a PowerPoint animation engine,
- a generative-AI dashboard,
- a camera-effects app,
- an analytics suite full of vanity scores.

The final scope is focused on helping a presenter deliver better.

## Third-party libraries

V4.2 currently loads the following browser libraries from jsDelivr:

- Mozilla PDF.js
- `@aiden0z/pptx-renderer`
- JSZip
- html2canvas

Their respective licenses and terms remain with their authors/projects.

---

**Wakanda Studio V4**  
*Import. Prepare. Rehearse. Present. Improve.*
