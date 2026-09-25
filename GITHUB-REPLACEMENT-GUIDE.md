# Replace the previous GitHub version

This package is a complete replacement. Do not merge it with previous Decklight Studio files.

## Recommended method: GitHub website

1. Open your Decklight Studio repository on GitHub.
2. Confirm that you are on the `main` branch.
3. Delete the previous website files from the repository.
   - Do not delete the repository itself.
   - Keep `CNAME` only if you use a custom domain.
4. Extract `Decklight-Studio-GitHub-Replacement.zip` on your computer.
5. Open the extracted folder.
6. Upload these five files to the repository root:
   - `index.html`
   - `config.js`
   - `README.md`
   - `GITHUB-REPLACEMENT-GUIDE.md`
   - `VERSION.txt`
7. Use the commit message: `Replace previous version with clean Decklight Studio`.
8. Open **Settings → Pages**.
9. Select **Deploy from a branch**, `main`, and `/(root)`.
10. Wait one or two minutes, then open the GitHub Pages URL.
11. Hard-refresh the page:
    - Windows: `Ctrl + Shift + R`
    - Mac: `Command + Shift + R`

## Important

- Upload the files themselves, not the outer extracted folder.
- `index.html` must be in the repository root.
- Remove old JavaScript, CSS, asset, build, and distribution folders unless you intentionally use them elsewhere.
- Keep `config.js` beside `index.html`.
- A previous `CNAME` file may be retained when using a custom domain.

## Final repository structure

```text
your-repository/
├── index.html
├── config.js
├── README.md
├── GITHUB-REPLACEMENT-GUIDE.md
├── VERSION.txt
└── CNAME                         optional
```

## Quick verification

After deployment, confirm:

- Decklight Studio opens directly
- No restore or recovery option appears
- PowerPoint or PDF import works
- Markdown notes change with slides
- Pause, Resume, and Stop remain visible during recording
- The downloaded recording contains no blank slide transitions
