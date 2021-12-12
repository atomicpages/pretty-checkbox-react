---
id: accessibility
title: Accessibility
---

## Accessibility

PCR is not another soft-control that is bloated with internal states,
accessibility gaps, and missing functionality. Pretty checkbox styles **real**
HTML `input` elements through CSS magic and as a result is 90% there with
accessibility. Pretty checkbox, and by extension regular old HTML, doesn't give
us everything for free. PCR fills in these gaps by:

- Linking `label` and `input` fields using generated UUIDs
- Using the correct ARIA `role` for `Switch`
- Using the necessary `aria-*` attributes when necessary (e.g. indeterminate
  checkbox)

The main goal of PCR is to provide the essentials without restricting you from
adding additional props or even overriding generated props with your own stuff
:wink:. The philosophy of this project is to leverage all the good stuff
browsers do for us out-of-the box instead of the library handling complex
interactions and ensuring non-standard controls integrate with assistive
technologies. We'll review a few common patterns and show how PCR is compatible
with each.

### Roving Selection

Roving selection is supported by browsers for standard input controls, but often
missed by soft controls. Considering a series of radios. Rather than focusing on
meeting the
[WA-ARIA criteria](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html)
of a radio control, PCR allows the _browser_ to handle that.

Interact with the control below. Use the arrow keys to navigate between items in
the radio group.

```jsx live
<>
  <Radio name="pizza" value="thin-crust">
    Thin Crust
  </Radio>
  <Radio name="pizza" value="regular-crust">
    Regular Crust
  </Radio>
  <Radio name="pizza" value="deep-dish">
    Deep Dish
  </Radio>
</>
```

Under the hood PCR is generating the following DOM structure for each radio
control:

```html
<div class="pretty p-default p-round">
  <input type="radio" id="pcr_0jWTcTtk" name="pizza" value="thin-crust" />
  <div class="state"><label for="pcr_0jWTcTtk">Thin Crust</label></div>
</div>
```
