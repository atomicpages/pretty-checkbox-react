---
id: basic
title: Checkbox
sidebar_label: Checkbox
---

At the heart and soul of every application is at least one checkbox. It might be a terms and conditions agreement, "Do not sell" CCPA notice, or something else; whatever it is, `pretty-checkbox-react` (PCR) has your back.

## Shapes

There's no "one size fits all" for input controls like Checkbox. Thankfully, PCR allows you to represent Checkbox in various ways via the `shape` prop:

```jsx live
<>
    <Checkbox>Regular</Checkbox>
    <Checkbox shape="curve">Curve</Checkbox>
    <Checkbox shape="round">Round</Checkbox>
</>
```

## Variants

The `variant` prop differs slightly from shape -- we can basically think of this as controlling the "weight" of the checkbox:

-   `thick` increases the border width and decreases the check
-   `fill` allows the check to "fill" the entire checkbox

```jsx live
<>
    <Checkbox>Regular</Checkbox>
    <Checkbox variant="thick">Thick</Checkbox>
    <Checkbox variant="fill">Fill</Checkbox>
</>
```

## Icons

Checkbox supports rendering icons in place of the default check via the `icon` prop. Check it out :+1:

```jsx live
<Checkbox icon={<i className="mdi mdi-check" />}>Aweeee yis</Checkbox>
```

### Custom Icons

There's a few things you should know when using `icon`. There are four different kinds of elements you can pass this prop:

-   `i`
-   `em`
-   `img`
-   `svg`

Custom elements are supported; however, you'll need to do two manual steps:

1. Add `icon` as a `className` for your custom icon component
2. Add `p-svg`, `p-image`, or `p-icon` to `Checkbox`

Some low-level stuff here, but we're adding the necessary selectors for `pretty-checkbox`.

```js
import * as React from 'react';
import { Check } from 'react-feather';

function App() {
    return (
        <Checkbox icon={<Check className="icon" />} className="p-svg">
            Aweeee yis
        </Checkbox>
    );
}
```

## States

Checkbox has various states that might come in handy, too :wrench:

### Disabled &amp; Locked

Of course `disabled` is supported, but there's also a secondary state called `locked`. This unique approach to preventing user action doesn't visually display the checkbox as disabled; however, user action is prevented (keyboard focus, clicking, etc.). Confused? Check it out!

```jsx live
<>
    <Checkbox>Regular</Checkbox>
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox locked>Locked</Checkbox>
</>
```
