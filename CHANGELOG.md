# Wakanda Studio — Changelog

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
