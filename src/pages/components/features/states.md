---
title: Component States
order: 2
---

Pretty Checkbox React exposes various states that give you greater control over your components. See each example below to learn more.

#### Disabled Items
```plain
<>
    <p>Choose your shipping method:</p>
    <Radio name="radio-3" disabled>Same Day</Radio>
    <Radio name="radio-3">Next Day</Radio>
    <Radio name="radio-3">Standard Ground</Radio>
</>
```

#### Locked Items
Similar to `disable`, but it will make the component _appear_ to be active.

```plain
// readOnly used for this example to prevent console errors from React

<>
    <Checkbox shape="round"
        color="success"
        locked
        checked
        inputProps={{ readOnly: true }}
        icon={<i className="mdi mdi-check" />}>Cannot be unchecked</Checkbox>
    <Checkbox>Not Checked</Checkbox>
</>
```

#### Bigger
Increase the size of your components using the `bigger` prop. Alternatively, just increase the `font-size` property on `.pretty` in your CSS.

```plain
<>
    <Checkbox bigger
        shape="round"
        color="info"
        animation="jelly"
        icon={<i className="mdi mdi-check" />}>done</Checkbox>
    <Checkbox bigger color="danger" animation="smooth">clear</Checkbox>
</>
```

#### Plain
Remove the border (when checkbox is checked) with the `plain` prop.

```plain
<>
    <Checkbox plain
        shape="round"
        color="warning-o"
        animation="smooth"
        icon={<i className="mdi mdi-star" />}>Favorite</Checkbox>
    <Checkbox plain
        shape="round"
        color="success-o"
        animation="smooth">Add</Checkbox>
</>
```
