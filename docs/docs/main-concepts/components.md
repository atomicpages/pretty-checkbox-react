---
id: components
title: Components
---

Pretty Checkbox React (PCR) is a tiny implementation of a `radio`, `checkbox`,
and mobile-like switch control _powered by_
[Pretty Checkbox](https://pretty-checkbox.netlify.app/). PCR is minimal
component library written in React which provides a flexible API around pretty
checkbox, including:

- Hooks to help manage state
- Easy checkbox indeterminate support
- Works with managed-state form solutions (e.g. `formik`)
- Works with uncontrolled form solutions (e.g. `react-hook-form`)
- and more...

The components by themselves are completely _stateless_ and just render regular
old HTML that pretty-checkbox styles 💅.

## Components

PCR exposes three components:

- `Checkbox`
- `Radio`
- `Switch`

any by themselves, the components are completely _stateless_ and just render
regular old HTML.

```jsx live
function App() {
  return (
    <>
      <Checkbox>Click me!</Checkbox>
      <Radio>Select me!</Radio>
      <Switch>Toggle me!</Switch>
    </>
  );
}
```

## Prop Forwarding

Libraries _should be flexible_. It brings me a whole lot of joy to see that my
random HTML props are passes to the component I expect. PCR passes _all_ HTML
props to the underlying `input` element to allow you to build wickedly awesome
apps &ndash; no danger here, Will Robinson.

### `className` merging

PCR handles pretty checkbox `className` for you via the Prop API, but that
doesn't mean you shouldn't be able to use your own `className` values; those are
happily merged for you:

```jsx
// out is <div class="pretty my-awesome-name">...</div>
<Checkbox className="my-awesome-name">Awe yis</Checkbox>
```

### `id` Override

Don't want to use the super awesome UUID generator? No biggie. Use your own
:+1:. Here's an example using `shortid` instead:

```jsx
import React from 'react';
import shortid from 'shortid';

function App() {
  const id = React.useRef('MY_PROJECT' + shortid.generate());

  return <Checkbox id={id}>Here's my ID, officer</Checkbox>;
}
```

### HTML Input Attributes

Need to make the checkbox `required`? Use plain old HTML 👩‍💻

```jsx live
function App() {
  return (
    <form className="form" onSubmit={noop}>
      <div className="form__group">
        <label htmlFor="name">Name:</label>{' '}
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form__group">
        <label htmlFor="email">Email:</label>{' '}
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form__group">
        <Checkbox required>I have read the terms &amp; conditions</Checkbox>
      </div>
      <div className="form__group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
```

### Everything Else

Custom `data-*` attribute or something else? PCR has your back :sunglasses:

```jsx
<Radio data-testid="tlr">@testing-library/react ready</Radio>
```

## Tree Shaking & Modules

PCR is totally modular and is
[side-effect free](https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects).
If you're using webpack, snowpack, or another modern bundler that supports
[ES Modules or CJS Modules](https://webpack.js.org/concepts/modules/).

### Transpiling from Source

In addition to ES and CJS modules, PCR also packages the transpiled typescript
source code for special application needs 🙂. A typical flow might look like:

```js title="App.js"
import {
  Checkbox,
  useCheckboxState,
} from 'pretty-checkbox-react/dist-src/index';

// use your imports
```

If you're using babel make sure you have the following:

- presets
  - `@babel/preset-react`
- plugins
  - `@babel/plugin-proposal-optional-chaining`

```js title="webpack.config.js"
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?/,
        // prevent exclusion of PCR from node_modules
        // to allow babel to transpile for you
        exclude: /(?!node_modules\/pretty-checkbox-react\/)/,
        options: {
          presets: [
            ['@babel/preset-env', { corejs: 3 }],
            '@babel/preset-react',
          ],
          plugins: ['@babel/plugin-proposal-optional-chaining'],
        },
      },
    ],
  },
};
```
