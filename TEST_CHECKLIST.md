# Wakanda Studio V4 — Final QA Checklist

Use this before calling a deployment production-ready or using it for an important presentation.

## 1. Launch

- [ ] App loads without a blank screen.
- [ ] Import workflow is selected by default.
- [ ] No unexpected browser console errors appear.
- [ ] Desktop/mobile warning behaves appropriately at narrow widths.

## 2. PDF import

- [ ] Drop a real PDF into the import area.
- [ ] Correct slide count appears.
- [ ] Slide 1 renders correctly.
- [ ] Thumbnails render.
- [ ] Clicking thumbnails changes slide.
- [ ] Previous / Next works.

## 3. PowerPoint import

Test at least one real `.pptx` used in your portfolio/course.

- [ ] PPTX imports without crashing.
- [ ] Correct slide count appears.
- [ ] Fonts/text are reasonably faithful.
- [ ] Images/charts render acceptably.
- [ ] Thumbnails render.
- [ ] Slide switching remains responsive.
- [ ] Existing PowerPoint speaker notes import when present.
- [ ] Recording preview matches the rendered slide closely.

If a complex deck renders incorrectly, export it to PDF and confirm PDF fallback works.

## 4. Google Slides

### OAuth path
- [ ] Google OAuth Client ID is configured.
- [ ] Connect Google opens authentication.
- [ ] Private presentation imports.
- [ ] Speaker notes import.
- [ ] Slides render from exported PDF.

### Shared-link path
- [ ] App is running through `npm start` / Node deployment.
- [ ] Public/shareable presentation URL imports.
- [ ] A non-shareable deck gives a helpful error instead of silently failing.

## 5. Private Guidance

- [ ] Upload Markdown notes.
- [ ] Paste notes manually.
- [ ] `## Slide N` mapping works.
- [ ] Per-slide editor updates current notes.
- [ ] `[REMINDER]` appears as a reminder cue.
- [ ] `[CUE]`, `[PAUSE]`, `[TRANSITION]`, `[SLOW]` render clearly.
- [ ] Continuous mode works.
- [ ] Slide-sync mode works.

## 6. Timing

- [ ] 5-minute preset works.
- [ ] 7-minute preset works.
- [ ] 10-minute preset works.
- [ ] 15 / 20-minute presets work.
- [ ] Custom target works.
- [ ] Estimated finish updates with notes.
- [ ] Per-slide timing plan adds up sensibly.
- [ ] Ahead / behind indicator changes during rehearsal.

## 7. Teleprompter

- [ ] Manual scroll works.
- [ ] Auto pace works.
- [ ] Mouse wheel cancels auto-scroll safely.
- [ ] Font size control works.
- [ ] Opacity control works.
- [ ] Top/middle/bottom position works.
- [ ] Reading lane/focus line remains legible.
- [ ] Hide/show notes works.

## 8. Camera + microphone

Use the real device setup you expect to use.

- [ ] Camera permission prompt succeeds.
- [ ] Microphone permission prompt succeeds.
- [ ] Device selectors populate after permission.
- [ ] Selected camera works.
- [ ] Selected microphone works.
- [ ] Mic meter reacts to speech.
- [ ] Too-quiet warning is reasonable.
- [ ] Clipping warning appears when deliberately speaking too loudly.
- [ ] 5-second audio test records.
- [ ] Test playback has clear audio.

## 9. Preflight

- [ ] Presentation status is accurate.
- [ ] Guidance status is accurate.
- [ ] Camera/mic status is accurate.
- [ ] Audio status is accurate.
- [ ] Timing status is accurate.
- [ ] Recording quality status is accurate.

## 10. Rehearsal

- [ ] Rehearsal countdown works.
- [ ] App enters minimal performance mode.
- [ ] Timer runs.
- [ ] Private Guidance scrolls.
- [ ] Slide navigation remains available.
- [ ] Pause remains visible.
- [ ] Stop remains visible.
- [ ] Stop returns safely to normal UI.

## 11. Clean recording privacy — critical

Record a 15–30 second test.

- [ ] Final video contains the slide.
- [ ] Final video contains camera if enabled.
- [ ] Final video contains microphone audio.
- [ ] Private Guidance is **not** visible.
- [ ] Sidebar is **not** visible.
- [ ] Timer/pacing is **not** visible.
- [ ] Buttons are **not** visible.
- [ ] Slide thumbnails are **not** visible.

Do not skip this test.

## 12. Recording controls

- [ ] Countdown works.
- [ ] Double-clicking Record does not create two sessions.
- [ ] Pause pauses the recording.
- [ ] Resume resumes it.
- [ ] Stop completes the recording.
- [ ] Duration in Review is correct.
- [ ] Download works.
- [ ] Downloaded file plays in a local video player/browser.

## 13. Live Present

- [ ] Audience View opens.
- [ ] Audience View contains no private guidance.
- [ ] Next / previous updates Audience View.
- [ ] Presenter keeps timing/guidance privately.
- [ ] Pause / Stop remains reachable.
- [ ] Closing Audience View does not crash Wakanda.

## 14. Takes

- [ ] New recording appears as a take.
- [ ] Take can play.
- [ ] Take can download.
- [ ] Mark Best works.
- [ ] Delete works.
- [ ] Multiple takes do not break the Review layout.

## 15. Recovery

### Session
- [ ] Import a deck and add notes.
- [ ] Refresh page.
- [ ] Restore-last-session option appears where supported.
- [ ] Presentation can be restored.
- [ ] Notes/settings are restored.

### Recording protection
- [ ] Start a short recording.
- [ ] Confirm chunks are progressively persisted.
- [ ] Simulate interrupted session only in a safe test.
- [ ] Recovery prompt appears on next launch.
- [ ] Recovered recording can be downloaded/playback tested.

## 16. Device interruption

- [ ] Disconnect/disable microphone during a test session if safe.
- [ ] Wakanda warns the presenter.
- [ ] Recording pauses rather than silently continuing with broken audio.

## 17. GitHub Pages deployment

- [ ] Live URL loads through HTTPS.
- [ ] PDF import works.
- [ ] PPTX import works.
- [ ] Camera/mic works.
- [ ] Recording works.
- [ ] CDN libraries load without CSP/network errors.

## Final release gate

Before sharing Wakanda Studio publicly:

- [ ] One real assignment/presentation completed end-to-end.
- [ ] One PPTX tested.
- [ ] One PDF tested.
- [ ] One 1080p video downloaded and watched fully.
- [ ] Private Guidance verified absent from final video.
- [ ] README accurately reflects tested behavior.
