# Wakanda Studio V3 — Manual Test Checklist

Use this checklist after publishing to GitHub Pages and before relying on Wakanda Studio for an important recording.

## A. App launch

- [ ] Open the live GitHub Pages URL in desktop Chrome or Edge.
- [ ] Confirm the Wakanda Studio V3 interface loads without a blank screen.
- [ ] Confirm the setup checklist starts at `Setup 0/3` on a fresh browser.

## B. Presentation

- [ ] Drag a PDF onto the Presentation drop zone.
- [ ] Confirm the PDF loads and the slide count is detected.
- [ ] Confirm the main stage shows Slide 1.
- [ ] Confirm thumbnails appear in the slide navigator.
- [ ] Click a thumbnail and confirm the correct slide opens.
- [ ] Test the Previous/Next buttons and left/right arrow keys.

## C. Speaker notes

- [ ] Drag `sample-notes.md` onto the speaker-note drop zone.
- [ ] Confirm word count and estimated time update.
- [ ] Confirm Slide 1 notes appear in the teleprompter.
- [ ] Change slides and confirm slide-aware notes change.
- [ ] Edit the current slide notes and save them.
- [ ] Confirm the teleprompter updates.
- [ ] Test Slide Sync and Continuous modes.

## D. Teleprompter and timing

- [ ] Change WPM and confirm estimated time changes.
- [ ] Set a 5-minute target and press **Fit pace to target**.
- [ ] Start/pause auto-scroll with Space.
- [ ] Manually scroll notes with the mouse wheel.
- [ ] Change teleprompter position and text size.
- [ ] Test Focus mode.

## E. Camera and microphone

- [ ] Click **Enable camera & mic**.
- [ ] Approve browser permissions.
- [ ] Confirm the camera preview appears.
- [ ] Speak normally and confirm the mic-health indicator responds.
- [ ] Record the 5-second microphone test.
- [ ] Play it back and confirm the voice is clear and at a reasonable level.
- [ ] Test camera size, shape, and position.

## F. Clean-output privacy

- [ ] Click **Preview clean output**.
- [ ] Confirm the preview contains only the slide and optional camera bubble.
- [ ] Confirm the teleprompter is not visible.
- [ ] Confirm timers, controls, thumbnails, and setup sidebar are not visible.

## G. Rehearsal

- [ ] Start a rehearsal.
- [ ] Confirm countdown works.
- [ ] Confirm timer starts after the countdown.
- [ ] Pause and resume the rehearsal.
- [ ] Confirm auto-scroll does not unexpectedly restart if it was manually stopped before pausing.
- [ ] Stop the rehearsal and confirm a final rehearsal time is shown.

## H. Recording

Start with a short 10–20 second test recording.

- [ ] Click Record.
- [ ] Confirm the countdown prevents accidental double-starts.
- [ ] Advance at least two slides.
- [ ] Pause and resume once.
- [ ] Stop and review.
- [ ] Confirm the review video plays.
- [ ] Confirm microphone audio is present.
- [ ] Confirm speaker notes and presenter controls are absent.
- [ ] Download the test recording.
- [ ] Open the downloaded file locally and play it once more.

## I. Retake

- [ ] Click Retake.
- [ ] Confirm the presentation returns to Slide 1.
- [ ] Confirm notes restart correctly.
- [ ] Confirm another recording can be started normally.

## J. Browser refresh / local save

- [ ] Refresh the app.
- [ ] Confirm speaker notes/settings saved by the app are restored where expected.
- [ ] Remember that presentation files and media permissions must be reselected/re-enabled after a browser refresh.

## Pass criteria

Wakanda Studio is ready for an important assignment when:

- a PDF loads correctly;
- notes stay synchronized;
- the microphone test sounds clear;
- the clean-output preview contains no presenter-only UI;
- a short recorded test plays with both video and audio;
- the downloaded recording also plays correctly outside the browser.
