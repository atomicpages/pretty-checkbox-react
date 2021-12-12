---
id: icons
title: Icons
---

:::note Icons are applicable to `Checkbox` and `Radio` only :::

Icon in the generic sense can mean by image, svg, or font icon kit. PCR works
with all three :tada: and the usage is incredibly simple using the `icon` prop!
Supported elements are:

- `i`
- `em`
- `svg`
- `img`

## How it Works

PCR attempts to get the _type_ of the component. For "primitive" HTML types
(e.g. `i`, `svg`, etc.) PCR can add `className` for you by cloning the element.

Confused? It helps to see what our sweet JSX syntax is converted to:

```js
const icon = React.createElement('i', { className: 'mdi mdi-check' });
console.assert(icon.type === 'i');
```

PCR leverages the `.type` field of components to decide if it's something that
can be cloned with predictable results:

```js
const icon = React.createElement('i', { className: 'mdi mdi-check' });

const newIcon = React.cloneElement(icon, {
    ...icon.props,
    // merge classNames with icon
    className: icon.props.className + ' icon';
});
```

### Gotchas

This process works with HTML elements. PCR cannot clone components with any
certainty so you must add two props yourself with one of the following values:
`svg`, `image`, or `icon`.

- `className`
- `data-type`

```jsx {7}
import React from 'react';
import { Check } from 'react-feather';

function App() {
  return (
    <Checkbox icon={<Check className="svg" data-type="svg" />}>
      react-feather check
    </Checkbox>
  );
}
```

## Icons

PCR takes the heavy lifting of adding icons for you. Use `i` or `em` elements
and add your selectors; PCR takes care of the rest :sunglasses:

```jsx live
<Checkbox icon={<i className="mdi mdi-check" />}>mdi-check</Checkbox>
```

### Supported Icon Libraries

Pretty Checkbox has been tested with the following font icons libraries:

- [Font Awesome](https://fontawesome.com/icons?from=io)
- [Bootstrap Glyphicons](http://fontawesome.io/icons/)
- [Material Icon (MDI)](https://materialdesignicons.com/)
- [Material Icon (ZMDI)](http://zavoloklom.github.io/material-design-iconic-font/icons.html)
- [Material Icon (Google)](https://material.io/icons)
- [Typeicons](http://www.typicons.com/)
- [Ion icons](http://ionicons.com/)

## SVG

Like icons, `svg` elements can be used, too.

:::info Using with SVG Components See [the gotchas section](#gotchas). :::

```jsx live
<Checkbox
  icon={
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#fff" d={mdiCheck} />
    </svg>
  }
>
  mdi-check
</Checkbox>
```

### Supported SVG Libraries

- [UIKit](https://getuikit.com/docs/icon)
- [Feather Icons](https://feathericons.com/)

## Image

Feeling pixelated? PCR support images, too!

```jsx live
<Checkbox icon={<img src="https://tiny.cc/tuotsz" alt="check mark" />}>
  Image
</Checkbox>
```
