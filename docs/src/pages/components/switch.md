---
title: Switch
order: 2
displayName: Switch
---
Want a mobile feel on the web? Use the `Switch` component to start using switches as a checkbox or a radio. Customize the feel of switches via `shape` prop which accepts the following values:

* `outline` (default)
* `fill`
* `slim`

#### Checkbox
By default `Switch` components behave as a checkbox. You can override this behavior by passing the `type` prop.

```plain
<>
    <Switch>Outline</Switch>
    <Switch shape="fill">Fill</Switch>
    <Switch shape="slim">Slim</Switch>
</>
```

#### Radio
You're free to mix-and-match colors too!

```plain
<>
    <Switch type="radio" color="success" name="radio">Summer</Switch>
    <Switch type="radio" color="success" style="fill" name="radio">Winter</Switch>
    <Switch type="radio" color="success" style="slim" name="radio">Fall</Switch>
</>
```
