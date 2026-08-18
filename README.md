# QuietCue

**Present naturally. Stay on track.**

QuietCue is a private presentation copilot for setting up a deck and private guidance, then rehearsing, recording, or presenting live from one focused presentation workspace — without exposing presenter notes.

## Why QuietCue

Most presentation tools help you show slides or record a screen. QuietCue is designed around the presenter: your deck stays central while timing, cues, camera, and private guidance remain available only when you need them.

## Experience

**Setup → Present → Review**

The flow is intentionally compact: **Setup** contains everything needed before speaking; **Present** contains Rehearse, Record, and Live; **Review** appears only when a recording take exists. Advanced controls stay out of the way until requested.

## Presentation sources

- PowerPoint `.pptx`
- Google Slides
- PDF
- JPG / PNG

PowerPoint support focuses on high-fidelity static slide rendering. Complex native PowerPoint animations and transitions are not guaranteed.

## Core capabilities

- Private Guidance that never enters the recording canvas
- 5 / 7 / 10 / 15 / 20 minute targets plus custom duration
- Per-slide rehearsal pacing
- Floating, resizable camera and guidance panel
- Camera / microphone preflight and audio test
- Rehearse, Record, and Live Present modes
- Clean audience-only view
- Multiple takes with review
- Session recovery and protected recording chunks

## Privacy

Private Guidance is session-only and is not stored in browser preferences. QuietCue also removes cached guidance fields from earlier prototype preference keys when it starts.

## Visual system

QuietCue 1.1 uses the **Porcelain / Ink / Iris** design language:

- warm porcelain workspace
- deep ink typography
- iris-purple interaction accent
- dark presentation theatre
- contextual controls instead of permanent dashboards

The presentation remains the visual focus.

## Run locally

Static front-end:

```bash
python3 -m http.server 8080
```

Optional Node server for shared-link Google Slides import:

```bash
npm start
```

Then open `http://localhost:8080`.

## GitHub Pages

The core QuietCue front-end works on GitHub Pages. Authenticated Google Slides import requires your Google OAuth Web Client ID in `config.js`. The public/shared Slides URL bridge requires the included Node server and therefore does not run on GitHub Pages alone.

See `GOOGLE_SLIDES_SETUP.md` and `GITHUB_UPLOAD_GUIDE.md`.

## Recommended browser

Recent desktop Google Chrome or Microsoft Edge. Camera and microphone access requires HTTPS or localhost.
