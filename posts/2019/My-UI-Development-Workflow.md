---
title: My UI Development Workflow
description: >-
  Over the years, I have developed many UIs. I have learned many approaches for
  the same — and here I have distilled down my “UI Development…
date: '2017-04-08T06:07:13.403Z'
categories: []
keywords: []
slug: /@nitinj/my-ui-development-workflow-1fa406a87574
---

Over the years, I have developed many UIs. I have learned many approaches for the same — and here I have distilled down my “UI Development Workflow” that I have developed over years. No matter what the technology stack is, this process is applicable. It makes sure that we have required things (or at least contracts for those things) before we start coding.

This workflow is for UI development of one complete functionality (“Story” in agile terms). It makes sure that we avoid many pitfalls of UI development.

**Step 1: Requirements**

What's the Purpose of this functionality?

Do we have business prerequisite in place? Does this functionality makes sense right now?

Requirement — What are the exact requirement?

**Step 2: Study**

Dig out any available information on the topic if you are not well aware of it. internal wiki pages, related requirement documents, emails, PDFs — Read it.

**Step 3: Data**

Is the data required for building this UI available?

*   If UI fetches server data, confirm that every single API Endpoint needed if available.
*   In case of metadata (e.g. JSON Schema, or other static data) is needed, make sure it is available and agreed upon.
*   If data not available, write formal email (or comment in Issue tracker, in slack group — you get the idea) to respective developers and ask for those endpoints.

_hint: I add subtasks to main JIRA story for API and assign to respective developers._

**Step 4: UX/Wireframe**

Do you have a dedicated UX/wireframe designer? Get complete (or at least a rough wireframe) UX design of the functionality from him/her in advance.

No UX/wireframe designer?

Re-examine the requirement and come up with a quick minimum UX/wireframe/Mock that solves the problem. No need to add bells and whistles, small details — this can be done in later stages.

Why no details? Your design may be thrown out of window, so unless people really like your quick-and-dirty UX/Wireframe, don't add details.

Put your design in the slack channel/Email/comment in issue tracker for the story — let people see it. You may get suggestions or even approval/rejection early on.

**Step 5: Proposal**

Write down comment in issue tracker (or email) — your perception of problem and how you are planning to implement solution (small details of how UI will work is desirable here). Add UX if not already done.

Why? Interested people will read it and point out any unnecessary/incorrect features, improvements. This will save lot of time.

**Step 6: Skeleton**

Add UI placeholders/stubs — pages, routes, tabs, dialogs, buttons, links. initial commit. Entire functionality should be navigable using above stubs. Popups should be accessible on button clicks. Pages should be with titles/headers, save buttons etc. Make sure that these placeholders are responsive.

Why? Creating skeleton of UI that you are going to implement gives you a overall frame — you can now focus on individual pages, tables, dialogues. In my experience, this greatly reduces complexity of complex, multi page functionality, freeing up you to focus on individual chunks.

**Step 7: Minimum viable UI Implementation**

This is where we add flesh. Code UI with actual data (or use hardcoded stubs in case data isn't available), logic routines, angular services/ redux reducers, basic error handling etc. No detailed visual styles/animations are necessary at this stage.

_The idea is to produce a barebone working UI in minimum time._ Visually pleasing elements and good to have features like comment that is expandable and shows “…” can be done at later stages. This way, in case you don’t have sufficient time to complete UI, you atleast have a working one.

**Step 8: Feature complete**

Here we complete every feature that's needed, extensive error handling, corner cases, responsive nature of elements, confirmation dialogs etc.

**Step 9: Visual Glitter**

Add visual styles/eye candy, background images, icons in buttons, animations, transition effects.

In my experience, minimal visual styles are better.

**Step 10: Review**

Do a _self review_ of what you have done. Focus should be on functionality and correctness.

Remove any extra code, comments etc. Self code review & bug fixes.

Are there any corner cases that needs to be taken care of?

**Step 11: Notify Users**

Comment on issue tracker (or email, chat) that UI is now complete — arrange a meeting and invite stakeholders for review,

Mark Story as complete — Acknowledge any known issue/bugs and notes for QA people.

That’s it! This process may sound obvious, but it resulted in better UI development and totally worked for me. I hope it's useful to fellow UI developers!

If you liked this story, give it a 💚!