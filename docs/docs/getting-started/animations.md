---
id: animations
title: Animations
sidebar_label: Animations
---

Let's take a peek at the various animations available to PCR &mdash; just keep in mine this page is not comprehensive so be sure to check out the animations available to each component.

## Basic Animations

Animations are split into two main categories: those that work without an icon and those that work _only_ with icons (basic animations fall into the first bucket).

I could bore you to death with an elaborate story of why animations are useful that would rival any cooking website (you know, the ones where you need to scroll forever to get to the recipe), but I won't. Enough! Action!

Okay, okay, so the `animation` prop accepts five values, but only _two_ work without icons:

* `smooth` (basic)
* `jelly` (icon)
* `tada` (icon)
* `rotate` (icon)
* `pulse` (basic)

```jsx live
<>
    <Checkbox animation="smooth">Smooth</Checkbox>
    <Checkbox animation="pulse">Pulse</Checkbox>
</>
```
