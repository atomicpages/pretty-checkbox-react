---
id: colors
title: Colors
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
Outline colors are not compatible with `Switch` or `plain`
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
