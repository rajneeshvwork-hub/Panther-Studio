# Wakanda Studio — Product Story

## The problem

Short recorded presentations often involve several tools at once: presentation software, a camera, a microphone, speaker notes, a timer, and a screen recorder. The presenter must remember the script, manage slide changes, stay within a strict time limit, and maintain eye contact.

A common workaround is to place notes somewhere on-screen while a screen recorder captures the presentation. This creates a new risk: the notes may be visible in the final recording.

Wakanda Studio was conceived around a simple product principle:

> **The presenter should be able to see more than the audience sees.**

## Target user

The initial user is someone recording short, structured presentations such as:

- course assignments;
- product case studies;
- portfolio walkthroughs;
- sales/product demos;
- interview presentations.

The first use case emphasizes a strict target duration, often around five minutes.

## Core job to be done

**When I need to record a short presentation, help me read my notes, manage my slides, check my audio, and stay within time without exposing my presenter aids in the final video.**

## Product principles

### 1. Presenter view and audience view are different

The user can see teleprompter notes, timing, controls, thumbnails, and setup information. The output should include only the content intended for the audience.

### 2. Timing should be built into the workflow

Rather than manually estimating script length, Wakanda Studio calculates estimated duration and target WPM.

### 3. Recording confidence starts before the record button

Camera setup, microphone health, mic playback test, rehearsal, and clean-output preview reduce the cost of failed takes.

### 4. Interaction should disappear while presenting

Clicking/arrow keys move slides. The mouse wheel controls notes. Auto-scroll can reduce manual interaction further.

## Iteration history

### V0 — validate the concept

The first prototype tested whether a presentation, private notes, camera, and microphone could coexist in one browser workflow.

### V1 — make presenting easier

Added timing controls, countdown, auto-scroll, camera positioning, pause/resume, and clearer audio feedback.

### V2 — fix the architecture

The major architectural decision was to stop relying on screen capture of the browser interface.

Instead, Wakanda Studio creates a dedicated recording canvas containing only the slide and camera feed. This makes privacy an architectural property rather than a visual trick.

### V2.1 — make it feel like a product

The interface was redesigned with a macOS-inspired visual system and several state-management/reliability issues were fixed.

### V3 — reduce operational friction

V3 adds:

- drag-and-drop file import;
- slide thumbnails;
- per-slide note editing;
- five-second microphone playback testing;
- improved product/repository packaging.

These features reduce switching between tools and make the app more usable as a complete recording workspace.

## Technical architecture

```text
Presentation file
      ↓
Slide renderer ───────────┐
                         │
Camera stream ────────────┤→ Clean recording canvas → MediaRecorder → Video file
                         │
Microphone audio ─────────┘

Speaker notes → Teleprompter UI only
Timer / controls → Presenter UI only
Slide thumbnails → Presenter UI only
```

## Success metrics for future testing

Potential product metrics:

- first-attempt successful recording rate;
- percentage of users completing setup without help;
- average number of retakes per five-minute presentation;
- time from opening the app to starting a successful recording;
- percentage of recordings within ±15 seconds of target duration;
- percentage of users who use mic test before recording;
- teleprompter mode preference: slide-sync vs continuous.

## Key risks / open questions

- Does reading the teleprompter still create obvious eye movement?
- Is auto-scroll predictable enough across different speaking styles?
- Do users prefer slide-aware scripts or one continuous script?
- Should camera be optional at setup rather than part of the readiness gate?
- How should slide-level retakes work without making editing complicated?
- Is direct PPTX support important enough to justify the rendering complexity?

## Near-term roadmap

### V3.x

- improve drag-and-drop feedback and thumbnail performance;
- allow reordering image slides;
- add project reset/new-session action;
- add a stronger preflight test before recording.

### V4 candidates

- slide-level retakes and stitching;
- direct PPTX import;
- local silence trimming;
- AI script shortening/rewriting through a secure backend;
- project save/load;
- optional direct sharing/upload workflow.
