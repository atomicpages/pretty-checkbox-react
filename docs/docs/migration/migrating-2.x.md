---
id: migrating-2.x
title: Migrating from Pretty Checkbox React 2
sidebar_label: From 2.x
---

I'll be frank with the readers of this guide. PCR 2.x was kind of a architectural nightmare. While it offers features with state management, many of the architectural decisions were short-sighted. The crux of the issue was twofold:

1. Component never achieved _real_ decoupling from the composition model which in turn lead to tight coupling with a new `Pretty` component
2. The code has an insane amount of indirection and in certain user flows it becomes exceedingly difficult to follow

PCR 3.x addresses _both_ issues.

## Breaking Changes

PCR 3.x introduces a few breaking changes you need to be aware of.

### `Group` and `RadioGroup` Removal

These components were introduced with the _intent_ of making PCR "more" accessible. The fact is, they were never needed. PCR _is_ accessible by default without the bloat of unnecessary `role` and `aria-*` props. PCR 3.x fixes these issues.

#### Migrating from `RadioGroup`

`RadioGroup` is just a `fieldset`. See more on [why this change was made](https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/examples/radio/radio-1/radio-1.html#:~:text=The%20role%3D%22radiogroup%22%20attribute,that%20contains%20the%20label%20text.).

```diff
- import { RadioGroup, Radio } from 'pretty-checkbox-react';
+ import { Radio } from 'pretty-checkbox-react';


function App() {
    return (
-       <RadioGroup>
+       <fieldset>
            <Radio name="pizza" value="thin">Thin Crust</Radio>
            <Radio name="pizza" value="reg">Regular Crust</Radio>
            <Radio name="pizza" value="dd">Deep Dish</Radio>
+       </fieldset>
-       </RadioGroup>
    )
}
```

#### Migrating from `Group`

If you're using `Group` replace  with a `div`:

```diff
- import { Group, Radio } from 'pretty-checkbox-react';
+ import { Radio } from 'pretty-checkbox-react';


function App() {
    return (
-       <Group>
+       <div>
            <Radio name="pizza" value="thin">Thin Crust</Radio>
            <Radio name="pizza" value="reg">Regular Crust</Radio>
            <Radio name="pizza" value="dd">Deep Dish</Radio>
+       </div>
-       </Group>
    )
}
```

### `useSwitchState` Removal

The `useSwitchState` hook existed for the sole purpose of convenience; however introduced problems with tree-shaking.

Our hypothetical scenario is a `Switch` component used as a radio _or_ a checkbox. `useSwitchState` calls both hooks and decides which props to forward based on a parameter. No only does this mean _none_ of the hooks can be removed from production bundles, but twice the amount of work was being done in the `useSwitchState` state hook 😢!

Replace with:

* `useRadioState`
* `useCheckboxState`

```diff title="CheckboxSwitch.tsx"
- import { useSwitchState, Switch } from 'pretty-checkbox-react';
+ import { useCheckboxState, Switch } from 'pretty-checkbox-react';


function App() {
-    const checkbox = useSwitchState();
+    const checkbox = useCheckboxState();

    return <Switch {...checkbox} />
}
```

and when used as a radio...

```diff title="RadioSwitch.tsx"
- import { useSwitchState, Switch } from 'pretty-checkbox-react';
+ import { useRadioState, Switch } from 'pretty-checkbox-react';


function App() {
-    const radio = useSwitchState({ type: 'radio' });
+    const radio = useRadioState();

    return <Switch {...radio} />
}
```

### `baseId` Removal

Mainly an internal prop in PCR 2.x, the `baseId` prop has been removed. If you're using this, remove the prop from your code :smile:

### `fill` Rename

The `fill` prop has been **renamed** to `variant`. This allows for you to create custom variants in `pretty-checkbox` and have them applied to PCR 3.x without any extra code changes required on the PCR side.

```diff
<Checkbox
-    fill="fill"
+    variant="fill"
>
    Hello
</Checkbox>
```

## Non-Breaking Changes

If I can sum it up in three words: return to simplicity. PR 2.x was a weird soft-control hybrid with questionable accessibility, yet still using semantic HTML elements. In reality, none of the complexity was needed. I've learned a lot since PCR 2.0 was released and this time it's here to stay.

* Removal of keyboard handlers on `.pretty`
* Removal of `Pretty` components (if you're using these &ndash;tsk tsk &ndash; they're not "public")
* Removal of _some_ (not all) `aria-*` props
* Addressing accessibility issues in `Switch`
* Fixing webpack error when building `nanoid@3`. PCR 3.x uses `nanoid/non-secure` so no `crypto` polyfill is needed for legacy clients :sunglasses:
* Intuitive `indeterminate` support via state or prop (your choice)
* The `checked` prop actually works now
* ...and _tonnes_ of type fixes :angel:
