# GitHub Upload Guide — No Coding Required

This guide is written for someone using GitHub for the first time. You do **not** need Git commands, Terminal, VS Code, or programming knowledge for the first upload.

## 1. Create the repository

1. Sign in to GitHub.
2. Click the **+** button in the top-right corner.
3. Choose **New repository**.
4. Repository name: `wakanda-studio`
5. Description:

   `A browser-based presentation recorder with a private teleprompter, camera/mic capture, slide-aware notes, and target-duration pacing.`

6. Choose **Public** if you want to use it as a portfolio project.
7. Do not add a README, `.gitignore`, or license from the GitHub creation screen because these files are already included in the upload package.
8. Click **Create repository**.

## 2. Upload the project files

Open the unzipped `wakanda-studio-v3` folder on your computer.

In the empty GitHub repository:

1. Click **uploading an existing file** or **Add file → Upload files**.
2. Drag all files from inside the `wakanda-studio-v3` folder into the GitHub upload area.
3. Make sure `index.html` appears at the repository's top level.

The repository should look approximately like:

```text
wakanda-studio
├── index.html
├── README.md
├── GITHUB_UPLOAD_GUIDE.md
├── PRODUCT_STORY.md
├── CHANGELOG.md
├── sample-notes.md
├── .gitignore
└── .nojekyll
```

Important: upload the **contents** of the folder, not an extra folder containing those files.

**Mac note:** files beginning with a dot, such as `.gitignore` and `.nojekyll`, may be hidden in Finder. They are helpful but not required for your first browser upload; the live app will still work if you initially upload the visible project files.

## 3. Save the upload

At the bottom of the upload page, GitHub asks for a commit message.

Use:

```text
Launch Wakanda Studio V3
```

Then click **Commit changes**.

A commit simply means: **save this version of the project to GitHub**.

## 4. Turn it into a live website

Inside the repository:

1. Open **Settings**.
2. In the left sidebar, open **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch: `main`.
5. Select folder: `/ (root)`.
6. Click **Save**.

Your live URL will usually have this structure:

```text
https://YOUR-GITHUB-USERNAME.github.io/wakanda-studio/
```

## 5. Test the live product

Open the GitHub Pages URL in Chrome or Edge and check:

- the Wakanda Studio interface loads;
- PDF upload works;
- speaker notes load;
- camera/mic permission appears;
- microphone test playback works;
- clean-output preview works;
- a short 10–20 second recording can be reviewed and downloaded.

Do this small test before recording an important assignment.

## 6. Add it to your GitHub profile and resume

Useful links:

```text
Product: https://YOUR-GITHUB-USERNAME.github.io/wakanda-studio/
Repository: https://github.com/YOUR-GITHUB-USERNAME/wakanda-studio
```

Suggested GitHub repository topics:

```text
presentation
teleprompter
recording
productivity
product-management
portfolio-project
javascript
mediarecorder
```

## Updating the product later

When a new version is ready, you can update files without using Terminal:

1. Open the repository.
2. Open the file you want to replace, or use **Add file → Upload files**.
3. Upload the newer files.
4. GitHub will ask you to commit the changes.
5. Use a message such as:

```text
Update Wakanda Studio to V3.1
```

GitHub Pages will publish changes from the configured publishing branch automatically.

## About the license

This package intentionally does not include an open-source license yet.

If you want other people to freely copy, modify, and redistribute the code later, you can add a license such as MIT. If you are using the project primarily as your own portfolio product and have not decided on licensing, leaving it without an open-source license for now is reasonable.
