# QuietCue — GitHub Upload Guide

## Repository name

Recommended:

```text
quietcue
```

Suggested description:

> Private presentation copilot for rehearsal, live presenting and clean recording with guidance the audience never sees.

## Upload

Upload the contents of the GitHub-ready ZIP directly into the repository root.

Expected structure:

```text
quietcue/
├── index.html
├── README.md
├── PRODUCT_STORY.md
├── ARCHITECTURE.md
├── CHANGELOG.md
├── TEST_CHECKLIST.md
├── GOOGLE_SLIDES_SETUP.md
├── GITHUB_UPLOAD_GUIDE.md
├── GUIDANCE_TEMPLATE.md
├── config.js
├── config.example.js
├── server.js
├── package.json
├── THIRD_PARTY_NOTICES.md
└── .gitignore
```

For a personal project, choose **Commit directly to the `main` branch**.

Suggested commit message:

```text
QuietCue 1.1 — simplified flow release
```

## GitHub Pages

1. Open the repository.
2. Go to **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save.

Your demo URL will look similar to:

```text
https://YOUR-USERNAME.github.io/quietcue/
```

## Google configuration

`config.js` contains:

```js
window.QUIETCUE_CONFIG = {
  googleClientId: ''
};
```

Do not add passwords, API secrets, or confidential credentials. See `GOOGLE_SLIDES_SETUP.md` before configuring Google OAuth.

## Before sharing publicly

Run the checks in `TEST_CHECKLIST.md`, especially:

- guidance starts blank,
- guidance does not return after refresh,
- camera/mic test works,
- a short recording downloads and plays,
- private guidance is absent from the final video.
