# Wakanda Studio V3

**Record presentations while reading private speaker notes — without showing the notes in the final video.**

Wakanda Studio is a browser-based presentation recorder built for short assignment walkthroughs, product demos, portfolio presentations, and other situations where you need to present naturally while keeping a teleprompter private.

> The presenter sees the slide, teleprompter, timer, controls, and camera preview. The recording contains only the presentation slide, optional camera bubble, and microphone audio.

## Why this exists

Recording a polished 5-minute presentation can be surprisingly difficult. Switching between slides and notes breaks eye contact, timing drifts, microphone levels are inconsistent, and screen-recording tools can expose whatever is visible on screen.

Wakanda Studio separates the **presenter interface** from the **recorded output**.

## V3 highlights

- Drag-and-drop presentation upload.
- PDF and JPG/PNG slide support.
- Automatic PDF slide count.
- Clickable slide thumbnail navigator.
- Markdown/TXT speaker-note import.
- Slide-aware notes using `## Slide 1`, `## Slide 2`, etc.
- Per-slide note editing inside the app.
- Slide-sync or continuous movie-credit teleprompter mode.
- Adjustable WPM, font size, teleprompter position, and focus line.
- Target-duration pacing calculator for 5-minute or custom-length presentations.
- Optional automatic slide advance.
- Camera position, size, shape, and hide/show controls.
- Live microphone level and health indication.
- 5-second microphone recording/playback test.
- Rehearsal mode.
- 3- or 5-second recording countdown.
- Pause/resume recording.
- 720p or 1080p output.
- Clean-output preview before recording.
- Recording review and retake flow.
- Local preference and speaker-note autosave.
- Keyboard shortcuts and focus mode.
- macOS-inspired interface.

## Private recording architecture

Wakanda Studio does **not** record the whole browser interface.

It internally creates a dedicated HTML canvas and draws only:

1. the current presentation slide;
2. the optional camera feed.

The microphone audio track is then combined with that canvas video stream and recorded through the browser's `MediaRecorder` API.

The teleprompter, timer, slide thumbnails, controls, and setup sidebar remain DOM elements outside the recording canvas and therefore do not enter the final video.

## Quick start

Wakanda Studio should be served from `localhost` or HTTPS so camera and microphone permissions work correctly.

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Use a recent desktop version of **Google Chrome** or **Microsoft Edge**.

## Recommended workflow

1. Drop in a PDF presentation.
2. Drop in or paste your Markdown speaker notes.
3. Set the target duration, such as `5 minutes`.
4. Click **Fit pace to target**.
5. Enable camera and microphone.
6. Record a 5-second mic test and listen back.
7. Preview the clean output.
8. Rehearse once.
9. Record.
10. Review and download the result.

## Speaker-note format

```md
## Slide 1 — Opening
Hi everyone. In this presentation I'll walk you through...

## Slide 2 — Problem
The first issue I identified was...

## Slide 3 — Redesign
Here is how I approached the redesign...
```

If slide headings are not used, Wakanda Studio treats the content as one continuous script.

A ready-to-use example is included in [`sample-notes.md`](sample-notes.md).

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `→` | Next slide |
| `←` | Previous slide |
| `Space` | Start/pause teleprompter scroll |
| `R` | Restart current notes |
| `P` | Pause/resume session |
| `F` | Focus mode |
| `H` | Hide/show notes |
| `↑ / ↓` | Increase/decrease WPM |
| `Esc` | Close an open modal |

## Run on GitHub Pages

This repository is intentionally structured so it can be published directly from the repository root.

For a non-technical, click-by-click walkthrough, see [`GITHUB_UPLOAD_GUIDE.md`](GITHUB_UPLOAD_GUIDE.md).

## Repository structure

```text
wakanda-studio/
├── index.html
├── README.md
├── GITHUB_UPLOAD_GUIDE.md
├── PRODUCT_STORY.md
├── TEST_CHECKLIST.md
├── CHANGELOG.md
├── sample-notes.md
├── .gitignore
└── .nojekyll
```

## Browser and privacy notes

- Wakanda Studio runs in the browser.
- Presentation files and speaker notes are processed locally in the browser in the current version.
- Speaker notes/preferences may be stored in browser `localStorage` for convenience.
- Recordings are created locally and are not automatically uploaded to Loom or another service.
- Camera and microphone permissions are controlled by the browser.

## Current limitations

- Direct `.pptx` rendering is not supported yet. Export PowerPoint/Google Slides to PDF first.
- PDF rendering currently uses Mozilla PDF.js from a CDN, so internet access is required when the app first loads.
- Browser recording format depends on browser support; Chrome/Edge will normally produce WebM.
- Presentation animations and PowerPoint transitions are not reproduced from a PDF.
- There is no cloud account, project sync, or direct Loom upload yet.

## Product evolution

- **V0:** core proof of concept — presentation + notes + camera/mic.
- **V1:** teleprompter pacing, countdown, camera controls, pause/resume.
- **V2:** internal clean-output recording architecture and rehearsal/review flow.
- **V2.1:** reliability fixes and macOS-inspired visual redesign.
- **V3:** drag-and-drop, slide thumbnails, per-slide note editor, and microphone playback test.

See [`CHANGELOG.md`](CHANGELOG.md) for details. Before an important recording, run the short checks in [`TEST_CHECKLIST.md`](TEST_CHECKLIST.md).

## Roadmap ideas

- Direct PPTX import.
- Slide-level retakes and automatic stitching.
- Local silence trimming.
- AI script shortening and rewriting through a secure backend.
- Presentation-specific project saving.
- Cloud sharing and collaboration.
- Optional Loom or video-hosting integration.

## Product story

The problem statement, product decisions, architecture, iteration history, and roadmap are documented in [`PRODUCT_STORY.md`](PRODUCT_STORY.md). This is useful if you are reviewing Wakanda Studio as a portfolio/product-management project.

## License

No open-source license is included yet. That is intentional: the repository owner can decide later whether the product should remain all-rights-reserved or be released under an open-source license such as MIT.
