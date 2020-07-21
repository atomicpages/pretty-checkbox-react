---
id: basic-concepts
title: Basic Concepts
sidebar_label: Basic Concepts
---

Pretty Checkbox React is a small wrapper around Pretty Checkbox, but exposes a intuitive and flexible API to make common tasks easier.

## Components

Pretty Checkbox defines three "controls" that are available. In `pretty-checkbox-react` these controls are exported:

1. `Checkbox`
2. `Radio`
3. `Switch`

## Hook API

:::info
`Switch` can be used as a checkbox or a radio so you can use either of these hooks 🎉
:::

There are two hooks exported for make controlling input easier:

1. `useCheckboxState`
2. `useRadioState`

Hooks receive the same arguments as an object:

```typescript
type Options<S> = {
    state?: S;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
```

Each hook returns an object with the following shape:

```typescript
type HookResult<S> = {
    state: S;
    setState: React.Dispatch<React.SetStateAction<S>>;
    onChange: React.ChangeEventHandler<HTMLInput>;
};
```

## Controlled Mode

[Controlling inputs and forms](https://reactjs.org/docs/forms.html#controlled-components) is arguably the defacto standard when writing React components.

PCR allows you to control state yourself via the `checked` prop, or you can use one of tje convenience hooks do to this for you:

```jsx {2,5}
import React from 'react';
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function App() {
    const checkbox = useCheckboxState();

    return <Checkbox {...checkbox}>Do you agree?</Checkbox>;
}
```

```jsx live
function App() {
    const checkbox = useCheckboxState();

    return (
        <>
            <Checkbox {...checkbox}>Do you agree?</Checkbox>
            Checked? {checkbox.state ? 'Yes' : 'No'}
        </>
    );
}
```

😲 No hook-ups required and simple-as-pie usage! Be sure to checkout the [checkbox docs](/docs/checkbox) for more detailed examples.

## Uncontrolled Mode

In certain cases it's advantageous to let the DOM handle input state. Thankfully, PCR has you covered :wink: All `refs` are forwarded to the underlying `HTMLInputElement` for ease of use.

```jsx {5}
import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';

function App() {
    const ref = React.useRef(null);

    return <Checkbox ref={ref}>Do you agree?</Checkbox>;
}
```

```jsx live
function App() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        ref.current.indeterminate = true;
    }, []);

    return <Checkbox ref={ref}>Do you agree?</Checkbox>;
}
```
