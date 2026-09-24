# Decklight Studio

A focused browser studio for recording polished presentations in Full HD.

## Core workflow

**Import → Present → Review → Download**

- Import PowerPoint (`.pptx`), PDF, JPG, or PNG presentations
- Upload or write a private Markdown script using `## Slide 1` headings
- Enable the camera and microphone in one click
- Practise or record at 1920 × 1080 and 30 fps
- Pause, resume, or stop from the persistent controls on the presentation stage
- Review takes and download the selected recording

Only slides, microphone audio, and the optional camera enter the recording. The Markdown script and controls remain private.

## Run locally

This project has no build step or package dependencies.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` in a current desktop version of Chrome or Edge. Camera and microphone access require `localhost` or HTTPS.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload every file from this folder to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.

GitHub Pages will provide an HTTPS address. No build workflow is required.

## Files

- `index.html` — complete interface, presentation renderer, and recorder
- `config.js` — optional Google OAuth configuration
- `README.md` — setup and publishing instructions
- `VERSION.txt` — packaged source revision

## Browser support

Use a current desktop version of Chrome or Edge. Recordings download as WebM, depending on the codecs supported by the browser.

## Privacy

Presentation files, scripts, and recordings are handled locally in the browser during normal use. Review any hosting, analytics, or OAuth configuration added separately before making broader privacy claims.
