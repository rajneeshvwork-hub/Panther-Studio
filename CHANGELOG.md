# Wakanda Studio — Changelog

## V4.2 — Final stable release

### Recording reliability
- Device disconnect during recording now safely ends and saves the interrupted take.
- Long recordings no longer keep a permanent duplicate of every protected chunk in RAM and IndexedDB.
- Added browser-storage capacity preflight for protected recording when quota estimates are available.
- Added graceful in-memory fallback and warning if Recording Protection storage fails mid-take.
- Prevents a new recording from overwriting unrecovered protected chunks.
- Recording chunk interval increased to reduce storage/transaction overhead.

### Review / memory
- Take retention is bounded to protect browser memory, with tighter retention for long takes.
- Older Take playback now updates the modal Download target and review metadata correctly.
- Take filenames use monotonic take numbers instead of reusing numbers after deletion.
- Deleting the Best take promotes a remaining take automatically.

### Hosting / polish
- Shared-link Google Slides import is detected and disabled on static hosting such as GitHub Pages when the Node bridge is unavailable.
- Fixed negative-zero timing display.
- Fixed HTTP `HEAD` handling in the included Node server.
- Updated package/server version metadata to 4.2.0.


## V4.1 — Stability + floating workspace patch

### Floating presenter workspace
- Camera bubble is now freely draggable within the stage.
- Camera bubble can be resized with a lower-right resize handle.
- Camera custom position and size are mapped to the clean recording canvas.
- Private Guidance can be dragged by its header and resized independently.
- Floating layouts are stage-relative, constrained to bounds, and persisted locally.
- Added Reset layout.
- Preset camera/prompter controls remain available and switch to Custom after manual adjustment.

### Reliability / packaging
- Added missing `config.js`, `config.example.js`, `server.js`, `package.json`, and `.gitignore`.
- Added shared Google Slides bridge and `/api/health` in the included Node server.
- Preference saving now degrades gracefully if browser storage is unavailable.
- Improved camera resize aspect-ratio enforcement near stage edges.
- Re-ran DOM, syntax, image-import, slide-navigation, duration, and floating-interaction smoke tests.

## V4.0 — Final presentation-performance release

### Product model
- Reframed Wakanda from a presentation recorder into a presentation performance studio.
- Added five-stage workflow: Import → Prepare → Rehearse → Present → Review.
- Added Live Present alongside Record.

### Import
- Added PowerPoint `.pptx` rendering.
- Added PowerPoint speaker-note extraction.
- Added Google Slides OAuth import path.
- Added shared/public Google Slides URL bridge for Node deployment.
- Retained PDF and JPG/PNG support.

### Timing / rehearsal
- Added duration presets 5 / 7 / 10 / 15 / 20 minutes and custom target.
- Added per-slide timing plan.
- Added expected finish vs target.
- Added live ahead/behind pacing.
- Made outcome metrics primary and WPM secondary.

### Private Guidance
- Added richer cue types: reminder, cue, pause, transition, slow.
- Added focus reading lane.
- Added opacity control.
- Retained manual and auto-paced scrolling.

### Present
- Added minimal performance mode.
- Added visible Pause / Stop controls in performance mode.
- Added clean Audience View for live presenting.
- Retained internal clean recording architecture.

### Review
- Added take management.
- Added target vs actual timing.
- Added best-take marking.

### Reliability
- Added last-session presentation restoration.
- Added progressive recording-chunk protection and recovery.
- Improved device-disconnect behavior.
- Locked risky settings during active sessions.
- Added guards against repeated session starts.

### UI/UX
- Refined restrained macOS-inspired visual system.
- Reduced control-panel feel by exposing settings contextually.
- Added clearer source selection, preflight, and performance status.

## V3
- Added slide thumbnails, drag-and-drop, per-slide note editing, microphone playback test, stronger reliability, and GitHub packaging.

## V2
- Replaced screen/window capture workflow with internal canvas recording.
- Added rehearsal, pacing, clean preview, pause/resume, and camera controls.

## V1
- Initial presentation + private teleprompter + camera/mic recording proof of concept.
