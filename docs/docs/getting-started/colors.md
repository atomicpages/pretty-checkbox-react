---
id: colors
title: Colors & States
sidebar_label: Colors & States
---

All components share a set of "universal" props, that is props shared by all components and have the same effect.

## Colors

`color` is one such prop that has the same usage across components. There are five colors and they can be used two ways: **solid** or **outline** <span class="color-preview primary"></span> <span class="color-preview success"></span> <span class="color-preview warning"></span> <span class="color-preview info"></span> <span class="color-preview danger"></span>:

### Solid Colors

Solid colors style the interior of the components, but leave the border (oooo pretty colors 😯).

```jsx live
<>
    <Checkbox color="primary">Primary</Checkbox>
    <Checkbox color="success">Success</Checkbox>
    <Checkbox color="info">Info</Checkbox>
    <Checkbox color="warning">Warning</Checkbox>
    <Checkbox color="danger">Danger</Checkbox>
</>
```

### Outline Colors

Outline colors change the interior _and_ the border.

:::caution
Outline colors are not compatible with `Switch`
:::

```jsx live
<>
    <Checkbox color="primary-o">Primary Outline</Checkbox>
    <Checkbox color="success-o">Success Outline</Checkbox>
    <Checkbox color="info-o">Info Outline</Checkbox>
    <Checkbox color="warning-o">Warning Outline</Checkbox>
    <Checkbox color="danger-o">Danger Outline</Checkbox>
</>
```

## Disabled

Disabled state is pretty universal and is supported by all components using the `disabled` prop. Nothing fancy here, we let the browser handle preventing user action when a component is disabled with no extra magic needed 🧙‍♂️.

```jsx live
function App() {
    const checkbox = useCheckboxState();

    return (
        <Checkbox {...checkbox} disabled>
            Do you agree to the terms and conditions?
        </Checkbox>
    );
}
```

## Locked

In addition to `disabled` states, there's also this thing called `locked` state. Functionally speaking they are the same; however visually they are different. Disabling an input field changes the visual appearance, whereas `locked` does not. For the curious reader, under the hood PCR blocks user interaction using some CSS magic with `pointer-events: none`.

:::caution
While this might seem enticing, there are accessibility concerns with using this prop. ([See WCAG 2 for more info](https://webaim.org/articles/contrast/)).
:::

```jsx live
<Checkbox locked>Bamboozled again!</Checkbox>
```
