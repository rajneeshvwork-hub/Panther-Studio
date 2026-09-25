# Decklight Studio

A clean, browser-based studio for recording polished Full HD presentation videos.

## Workflow

**Import → Present → Review → Download**

- Import PowerPoint, PDF, JPG, or PNG slides
- Add a private Markdown presentation script
- Record slides, camera, and microphone at 1920 × 1080
- Pause, resume, and stop from the presentation screen
- Review takes and download the selected recording
- Manually control script scrolling

The presenter script and studio controls are not included in the exported video.

## Markdown script format

```md
## Slide 1
Introduce the topic and explain the problem.

## Slide 2
Walk through the research and key insight.

## Slide 3
Present the proposed solution.
```

Decklight also recognises `##Slide 1`, `**Slide 1**`, and `Slide 1:`.

## Run locally

This is a static website with no installation or build step.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` in the latest desktop Chrome or Edge.

## Publish with GitHub Pages

Upload all files from this folder to the root of your repository. Then open:

**Settings → Pages → Deploy from a branch → main → /(root) → Save**

See [GITHUB-REPLACEMENT-GUIDE.md](GITHUB-REPLACEMENT-GUIDE.md) for the clean replacement procedure.

## Files

- `index.html` — complete Decklight Studio application
- `config.js` — optional Google Slides OAuth configuration
- `README.md` — project overview
- `GITHUB-REPLACEMENT-GUIDE.md` — exact GitHub replacement steps
- `VERSION.txt` — package revision

## Browser support

Use the latest desktop Chrome or Edge. Camera and microphone access require HTTPS or localhost.

## Privacy

Presentations, scripts, camera footage, and recordings remain in the browser during the active session. Decklight starts with a clean session and does not offer restore or recovery prompts.
