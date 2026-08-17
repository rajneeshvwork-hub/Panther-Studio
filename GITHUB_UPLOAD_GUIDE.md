# Wakanda Studio V4.2 — GitHub Upload Guide

This guide is intentionally written for someone who is new to GitHub.

## If your Wakanda Studio repository already exists

You do **not** need to create a new repository.

Open your existing `wakanda-studio` repository and upload the V4.2 files into the repository root.

When GitHub asks for a commit message, use something like:

```text
Wakanda Studio V4.2 — final stable release
```

Choose:

**Commit directly to the `main` branch**

for this personal project unless you specifically want to practice branches and pull requests.

## Files to upload

Upload the contents of the V4.2 GitHub-ready ZIP, not the containing folder itself.

Your repository root should look approximately like this:

```text
wakanda-studio/
├── index.html
├── README.md
├── PRODUCT_STORY.md
├── ARCHITECTURE.md
├── CHANGELOG.md
├── TEST_CHECKLIST.md
├── GOOGLE_SLIDES_SETUP.md
├── GITHUB_UPLOAD_GUIDE.md
├── config.js
├── config.example.js
├── server.js
├── package.json
├── sample-notes.md
├── THIRD_PARTY_NOTICES.md
└── .gitignore
```

## Publish the front-end with GitHub Pages

After the files are committed:

1. Open the repository.
2. Click **Settings**.
3. Click **Pages** in the left sidebar.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select:
   - Branch: `main`
   - Folder: `/ (root)`
6. Click **Save**.

GitHub will generate a URL similar to:

```text
https://YOUR-USERNAME.github.io/wakanda-studio/
```

That is your live portfolio demo.

## What works on GitHub Pages

The static GitHub Pages version supports the core product:

- PowerPoint `.pptx`
- PDF
- JPG / PNG
- private guidance
- target-duration planning
- rehearsal
- camera / mic
- audio test
- recording
- review / takes
- session recovery

It can also support **Connect Google** after you configure a Google OAuth Client ID correctly.

## One V4.2 feature that GitHub Pages cannot host by itself

The shared/public Google Slides URL bridge is implemented in:

```text
server.js
```

GitHub Pages only serves static files; it does not run Node server code.

Therefore:

- **Connect Google:** can be configured for the GitHub Pages front-end.
- **Paste a public/shared Slides URL through `/api/google-slides`:** requires a Node-capable deployment.

You can leave Google configuration blank for your first public portfolio release. PowerPoint, PDF, images, rehearsal, recording, and private guidance remain usable.

## `config.js`

The repository contains:

```js
window.WAKANDA_CONFIG = {
  googleClientId: ''
};
```

Do not place passwords, API secrets, or confidential credentials in this file.

A Google OAuth **Web Client ID** is intended to be used by browser applications and is different from a client secret. Follow `GOOGLE_SLIDES_SETUP.md` before enabling it.

## Your repository description

Suggested GitHub description:

> Presentation performance studio with private guidance, rehearsal pacing, PowerPoint/Slides import, live audience view, and clean recording.

## Recommended repository About settings

You can add topics such as:

```text
product-management
presentation
teleprompter
powerpoint
google-slides
mediarecorder
javascript
portfolio-project
```

## After V4.2 is live

Do one real-world test before sharing the project widely:

- import a real deck,
- add real guidance,
- use the actual camera/mic,
- record 15–30 seconds,
- confirm notes do not appear,
- download and play the recording.

Use `TEST_CHECKLIST.md` for the full QA pass.

## What the two links mean

You will have two useful links:

```text
GitHub repository:
https://github.com/YOUR-USERNAME/wakanda-studio

Live product:
https://YOUR-USERNAME.github.io/wakanda-studio/
```

The repository demonstrates the product thinking and implementation history. The live link lets someone actually use Wakanda Studio.
