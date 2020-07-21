<h4 align="center">Quickly integrate pretty checkbox Components (checkbox, switch, radio) with React</h4>

<p align="center">
 <a href="https://github.com/atomicpages/pretty-checkbox-react/releases">
    <img src="https://img.shields.io/github/release/atomicpages/pretty-checkbox-react.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Github Release">
  </a>
   <a href="https://github.com/atomicpages/pretty-checkbox-react/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/atomicpages/pretty-checkbox-react.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/pretty-checkbox-react" target="_blank" rel="nofollow noreferred noopener">
    <img src="https://img.shields.io/npm/dm/pretty-checkbox-react.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://travis-ci.org/atomicpages/pretty-checkbox-react" target="_blank" rel="nofollow noreferred noopener">
    <img alt="Build Status" src="https://img.shields.io/travis/atomicpages/pretty-checkbox-react.svg?style=flat-square">
  </a>
  <a href='https://coveralls.io/github/atomicpages/pretty-checkbox-react?branch=master' target="_blank" rel="nofollow noreferred noopener">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/atomicpages/pretty-checkbox-react/master.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/atomicpages/pretty-checkbox-react/maintainability" target="_blank" rel="nofollow noreferred noopener">
    <img src="https://api.codeclimate.com/v1/badges/e7cca7813f2905d7aca7/maintainability" />
    </a>
</p>
<br>

<div align="center">
    <img src="preview.gif" alt="Pretty checkbox preview" />
</div>

# Pretty Checkbox React

Pretty Checkbox React (PCR for short) is a small react wrapper around the the pretty awesome library pretty checkbox.

## Getting Started

> pretty checkbox react depends on react >=16.8. Make sure you have React 16.8 or above installed.

```sh
npm i pretty-checkbox pretty-checkbox-react

# or with yarn
yarn add pretty-checkbox pretty-checkbox-react
```

## Basic Usage

PCR components are easy to use and require no additional setup. They support controlled and uncontrolled modes and pass pretty much all props down to the underlying `input` element.

```tsx
import * as React from 'react';
import { Checkbox } from 'pretty-checkbox-react';

function App() {
    return <Checkbox>Do you agree to the terms and conditions?</Checkbox>;
}
```

### Colors &amp; Variants

Like `pretty-checkbox`, `colors`, `variant`, and `shapes` are supported via props:

```tsx
import * as React from 'react';
import { Checkbox } from 'pretty-checkbox-react';

function App() {
    return (
        <Checkbox color="primary" shape="curve" variant="thick">
            Do you agree to the terms and conditions?
        </Checkbox>
    );
}
```

### Uncontrolled Usage

Add a `ref` and get access to the input element. Uncontrolled mode allows for seamless integration with form solutions like `react-hook-form`:

```tsx
import * as React from 'react';
import { Checkbox } from 'pretty-checkbox-react';

function App() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (ref.current) {
            // do something awesome
        }
    }, []);

    return <Checkbox ref={ref}>Do you agree to the terms and conditions?</Checkbox>;
}
```

### Controlled Mode

For your state needs, PCR components can be controlled, too. For convenience, there are hooks provided that abstract the typical, mundane tasks or creating stateful components:

```tsx
import * as React from 'react';
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function App() {
    const checkbox = useCheckboxState();

    const onSubmit = React.useCallback(
        e => {
            e.preventDefault();

            if (!checkbox.state) {
                // update the state manually from the `confirm` result
                checkbox.setState(confirm('Do you agree to the terms and conditions?'));
            }
        },
        [checkbox]
    );

    return (
        <form onSubmit={onSubmit}>
            <Checkbox name="tac" value="" {...checkbox}>
                Do you agree to the terms and conditions?
            </Checkbox>
        </form>
    );
}
```

### Loading CSS

PCR provides an API around `pretty-checkbox` which means the CSS needs to get loaded by your application. If you're using webpack, [`css-loader`](https://webpack.js.org/loaders/css-loader/) probably would be ideal since you can import it alongside your app. Not using webpack? Add it to your `index.html` :+1:

### Changelog

See the releases page.

### Contributions

Shout out to [Lokesh](https://github.com/lokesh-coder) for creating the original [pretty-checkbox library](https://github.com/lokesh-coder/pretty-checkbox) :star:

### License

This project is licensed under the MIT License
