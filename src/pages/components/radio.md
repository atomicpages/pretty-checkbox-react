---
title: Radio
order: 3
displayName: Radio
---

Like Checkbox and Switch, Radio has an almost identical API.

#### Basic Example
```plain
<>
    <Radio name="radio-1">Same Day</Radio>
    <Radio name="radio-1">Next Day</Radio>
    <Radio name="radio-1">Standard Ground</Radio>
</>
```

#### Colors
```plain
<>
    <Radio color="primary-o" shape="curve" name="radio-2">Primary</Radio>
    <Radio color="success-o" shape="curve" name="radio-2">Success</Radio>
    <Radio color="info-o" shape="curve" name="radio-2">Info</Radio>
    <Radio color="warning-o" shape="curve" name="radio-2">Warning</Radio>
    <Radio color="danger-o" shape="curve" name="radio-2">Danger</Radio>
</>
```

#### Radio Group with a Disabled Item
```plain
<>
    <p>Choose your shipping method:</p>
    <Radio name="radio-3" disabled>Same Day</Radio>
    <Radio name="radio-3">Next Day</Radio>
    <Radio name="radio-3">Standard Ground</Radio>
</>
```
