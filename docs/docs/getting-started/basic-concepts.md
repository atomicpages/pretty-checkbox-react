---
id: basic-concepts
title: Basic Concepts
sidebar_label: Basic Concepts
---

Pretty Checkbox React (PCR) is a tiny implementation of a `radio`, `checkbox`, and mobile-like switch control _powered by_ [Pretty Checkbox](https://lokesh-coder.github.io/pretty-checkbox/). That being said, PCR is more than a component library, there are APIs to help with various integrations and tasks including:

-   Hooks to help manage state
-   Easy checkbox indeterminate support
-   Works with managed-state form solutions (e.g. `formik`)
-   Works with uncontrolled form solutions (e.g. `react-hook-form`)
-   and more...

## Components

At the core of PCR lies three components:

-   `Checkbox`
-   `Radio`
-   `Switch`

By themselves, the components render regular old HTML.

```jsx live
function App() {
    return (
        <>
            <Checkbox>Click me!</Checkbox>
            <Radio>Select me!</Radio>
            <Switch>Click me!</Switch>
        </>
    );
}
```

## Uncontrolled Usage

When using as a standalone component or in a form, all PCR components support [uncontrolled usage](https://reactjs.org/docs/uncontrolled-components.html).

:::info
When we pass a `ref` it will be attached to the underlying HTML `input` element.
:::

Below is a contrived example where we check the checkbox automatically after three seconds.

```jsx live
function App() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        const id = setTimeout(() => {
            if (ref.current) {
                ref.current.checked = true;
            }
        }, 3000);

        return () => {
            clearTimeout(id);
        };
    }, []);

    return <Checkbox ref={ref}>I will get checked in 3 seconds</Checkbox>;
}
```

## Controlled Usage

Controlled components are driven by changes in state. To make this a whole lot easier, PCR has hooks for that!

-   `useCheckboxState`
-   `useRadioState`
-   `useSwitchState`

Using the hooks is like eating cake :cake:

```jsx live
function App() {
    const checkbox = useCheckboxState();

    return (
        <>
            <Checkbox {...checkbox}>Controlled Mode</Checkbox>
            <p>Checked {checkbox.state + ''}</p>
        </>
    );
}
```
