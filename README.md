# Presenter Studio V1

A more advanced browser prototype for recording presentation walkthroughs while privately reading speaker notes.

## What changed from V0

- Cleaner presenter-studio interface
- Slide-synced **or continuous** teleprompter mode
- Script word count and estimated speaking duration
- **Target-duration pacing** (for example, fit a script to 5 minutes)
- 3-second / 5-second recording countdown
- Recording timer with remaining-time warning
- Pause / resume recording
- Improved microphone health indicator: too quiet / good / loud / clipping
- Camera position controls: four corners
- Camera size controls
- Rounded or circular camera
- Hide/show camera without hiding the presentation
- Next-slide cue in the teleprompter
- Shortcut overlay and more keyboard controls
- Cleaner recording output with no teleprompter and no “clean output” badge
- Custom recording filename

## Run locally

Camera and microphone permissions usually require a local web server rather than `file://`.

```bash
cd presenter-recorder-v1
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

A Chromium-based desktop browser is recommended.

## Recommended notes format

```md
## Slide 1
Opening and introduction...

## Slide 2
Problem statement...

## Slide 3
Key insight...
```

Choose **Slide sync** to reset the teleprompter on each slide, or **Continuous** for movie-credit-style scrolling through the whole script.

## Recording workflow

1. Upload a PDF.
2. Add speaker notes.
3. Set a target duration, e.g. 5 minutes.
4. Click **Fit teleprompter to target** if useful.
5. Enable camera and microphone.
6. Adjust camera position/size.
7. Open the clean output window.
8. Click Record.
9. After the countdown, Chrome will ask which window to share. Choose **Presenter Output**.
10. Present from the main Studio window.
11. Stop and download the WebM recording.

## Keyboard shortcuts

- `→` next slide
- `←` previous slide
- `Space` start/pause teleprompter scrolling
- `P` pause/resume recording
- `H` hide/show notes
- `↑ / ↓` increase/decrease teleprompter speed
- `?` shortcut help

## Current prototype limitations

- PDF only. PPTX import is not yet implemented.
- Browser screen-share picker is required by browser security.
- Total PDF pages are still entered manually.
- Export is WebM rather than MP4.
- Automatic audio enhancement is not yet included; V1 focuses on detecting bad levels before/during a recording.
