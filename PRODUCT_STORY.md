# Wakanda Studio — Product Story

## The problem

The project began with a very specific frustration: recording a short presentation while trying to remember a script, manage slides, maintain eye contact, monitor time, and avoid inconsistent audio.

A conventional workflow often requires several separate tools or windows:

- presentation software,
- speaker notes,
- camera and microphone,
- screen recorder,
- timer,
- rehearsal,
- final video review.

The result is cognitive load exactly when the presenter should be focused on communicating.

## Initial hypothesis

The first idea was simple:

> Put the presentation and a private teleprompter in one interface, but make sure the audience or recording never sees the notes.

That became the foundation of Wakanda Studio.

## V1 — Proof of concept

The first version tested the core interaction:

- upload presentation,
- add speaker notes,
- connect camera/mic,
- read a private teleprompter,
- create a clean output.

The key learning was that a private teleprompter was useful, but the workflow still felt too much like operating recording software.

## V2 — Clean internal recording

V2 removed the awkward screen-share selection step.

Instead of recording the browser interface, Wakanda Studio began composing a dedicated internal output containing only:

**presentation + camera + microphone**

This made privacy a product architecture decision rather than a UI trick.

## V3 — Usable presenter studio

V3 focused on usability:

- slide thumbnails,
- drag-and-drop imports,
- current-slide note editing,
- microphone testing,
- stronger session controls,
- reliability improvements,
- GitHub-ready packaging,
- macOS-inspired visual polish.

The product was usable, but it was still fundamentally framed as a recorder with a teleprompter.

## V4 — Presentation performance studio

The final reframing was more important than any individual feature:

> **Loom helps you record a presentation. Wakanda helps you deliver one.**

The user problem is not simply recording. The actual job is to:

1. bring in the deck,
2. prepare what to say,
3. rehearse to time,
4. present or record confidently,
5. review and improve.

V4 therefore reorganizes the product around:

**Import → Prepare → Rehearse → Present → Review**

## What V4 deliberately adds

### Multi-source presentation import

Users can work with:

- PowerPoint,
- Google Slides,
- PDF,
- slide images.

Existing PowerPoint/Google speaker notes can become Private Guidance instead of forcing users to duplicate work manually.

### Flexible timing

Wakanda Studio is no longer a “5-minute video” tool.

It supports common presets and custom presentation durations. The product translates timing into outcomes such as:

- expected finish,
- per-slide budget,
- ahead / behind pace.

### Private Guidance

“Speaker notes” evolved into a richer model:

- script,
- reminder,
- cue,
- pause,
- transition,
- slow-down instruction.

The audience never sees these elements.

### Rehearsal intelligence

Rehearsal is treated as a first-class stage rather than an optional Record button without saving.

Wakanda creates a timing plan and helps the presenter understand where time is being spent.

### Live Present

Wakanda is not limited to recorded assignments.

A clean Audience View can be shared on a second display, projector, Zoom, or Meet, while the presenter retains private notes and timing.

### Takes

Instead of treating each recording as disposable, V4 keeps recent takes so users can compare, mark the preferred version, and download the one they want.

## What V4 deliberately does not add

Good product design includes refusal.

V4 does not attempt to become:

- a full video editor,
- a complete PowerPoint animation engine,
- an AI scoring dashboard,
- a webcam-effects product,
- a giant analytics suite.

Those capabilities would increase complexity without improving the core presentation job enough to justify it.

## Product principles

### 1. What the presenter sees is not what the audience sees

Presenter controls and guidance stay private by architecture.

### 2. Reveal complexity only when needed

Configuration belongs in Prepare. Performance-critical information belongs in Present.

### 3. Prevent failed recordings before they happen

Audio preflight, camera/mic readiness, timing checks, and recording protection are more valuable than decorative features.

### 4. Timing should be understandable

“12 seconds behind” is more useful during a presentation than exposing WPM calculations as the primary metric.

### 5. AI should be contextual, not ornamental

Future AI should solve specific presentation tasks such as shortening an over-time slide or improving a transition. It should not generate meaningless confidence scores.

## Final positioning

### Wakanda Studio

**Present better. Not harder.**

Import your presentation, prepare private guidance, rehearse to time, present live or record, and review your best take — without your audience ever seeing your notes.

## Portfolio value

The product demonstrates an iterative PM / product-building process:

**Observed problem → hypothesis → MVP → architectural improvement → UX iteration → scope reduction → final product framing.**

The strongest part of the story is not the number of features. It is the evolution of the product definition itself.
