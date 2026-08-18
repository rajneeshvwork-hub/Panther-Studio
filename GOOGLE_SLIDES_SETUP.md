# QuietCue 1.1 — Google Slides Setup

Google Slides integration is optional. QuietCue remains usable with PowerPoint, PDF, and image decks without configuring Google.

## What Connect Google does

The authenticated Google path is designed to:

1. request read-only access from the user,
2. read presentation structure and speaker notes through the Google Slides API,
3. export the presentation through Google Drive as PDF for reliable display,
4. keep the notes inside QuietCue as Private Guidance.

## What you need

A Google Cloud project with:

- Google Slides API enabled,
- Google Drive API enabled,
- an OAuth 2.0 Web Client ID,
- the domain/origin where QuietCue runs added as an authorized JavaScript origin.

For local development, your origin will normally be:

```text
http://localhost:8080
```

If you use a different port, authorize that exact origin as well.

For GitHub Pages, authorize the live origin, for example:

```text
https://YOUR-USERNAME.github.io
```

## Configure QuietCue

Open:

```text
config.js
```

Change:

```js
window.QUIETCUE_CONFIG = {
  googleClientId: ''
};
```

to:

```js
window.QUIETCUE_CONFIG = {
  googleClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com'
};
```

Do not put a Google OAuth **client secret** in this browser file.

## Scopes requested by QuietCue

QuietCue uses read-only access for presentations and Drive export.

The app should never ask for edit/delete permission just to import a deck.

## Test the integration

1. Run QuietCue on an authorized origin.
2. Open **Google Slides** in Import.
3. Choose **Connect Google**.
4. Complete Google's consent flow.
5. Paste/select the target Slides URL when requested.
6. Confirm:
   - slide count is correct,
   - speaker notes appear as Private Guidance,
   - slides render correctly.

## Shared/public link alternative

If a presentation is shareable/public and QuietCue is running through its Node server, V4 can use:

```text
/api/google-slides
```

to request a PDF export without the OAuth flow.

This path depends on the deck's Google sharing/export permissions and does not work for every private deck.

## GitHub Pages limitation

GitHub Pages does not execute Node.js. Therefore the `/api/google-slides` bridge is not available on a Pages-only deployment.

Use **Connect Google** for authenticated Google Slides import, or host `server.js` on a Node-capable service.

## Troubleshooting

### “Google integration is not configured”

`googleClientId` is still blank or malformed.

### OAuth error about origin

Add the exact URL origin to the Web Client's authorized JavaScript origins in Google Cloud.

### Presentation metadata loads but PDF export fails

Confirm Drive API is enabled and the user/deck permissions allow export.

### Shared-link import returns 403

The presentation is not exportable anonymously. Use Connect Google instead.


## Static hosting behavior

On GitHub Pages or another static-only host, QuietCue automatically checks for `/api/health`. If the Node bridge is not present, **Import shared link** is disabled instead of allowing a guaranteed failed request. Authenticated **Connect Google** can still work when `config.js` contains a valid browser OAuth Client ID and the hosting origin is authorized in Google Cloud.
