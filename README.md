<h4 align="center">A flexible, yet simple React API around Pretty Checkbox</h4>

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
  <a href='https://coveralls.io/github/atomicpages/pretty-checkbox-react?branch=master' target="_blank" rel="nofollow noreferred noopener">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/atomicpages/pretty-checkbox-react/master.svg?style=flat-square">
  </a>
</p>
<br>

<div align="center">
    <img src="preview.gif" alt="Pretty checkbox preview" />
</div>

# Pretty Checkbox React

Pretty Checkbox React (PCR for short) is a small react wrapper around the the pretty awesome library
pretty checkbox.

## Getting Started

> Pretty Checkbox React uses hooks heavily., Be sure you're running React 16.9 or later :smile:. Not
> using hooks? No sweat &ndash; you still need 16.9+! PCR is compatible with classes, too!

```sh
npm i pretty-checkbox pretty-checkbox-react

# or with yarn
yarn add pretty-checkbox pretty-checkbox-react
```

Make sure you're on a supported version of React and React DOM:

```sh
npm i react@^16.9 react-dom@^16.9

# or use the latest and greatest react
npm i react react-dom
```

### Using Preact?

PCR seamlessly integrates with Preact :sunglasses:, you don't even need to include `preact/compat`!

## Basic Usage

PCR components are easy to use and require no additional setup. Use as controlled or uncontrolled,
use with hooks or with classes, and pass all the props you want -- it's all forwarded to the
underlying `input` element. Hungry for more? Head on over the the
[doc site](https://pretty-checkbox-react.netlify.app/).

```tsx
import * as React from 'react';
import { Checkbox } from 'pretty-checkbox-react';

function App() {
    return <Checkbox>Do you agree to the terms and conditions?</Checkbox>;
}
```

### Uncontrolled Usage

Add a `ref` and get access to the input element. Uncontrolled mode allows for seamless integration
with form solutions like `react-hook-form`:

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

Use our awesome hooks to abstract away state logic!

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

## Documentation

PCR has extensive docs documented here: https://pretty-checkbox-react.netlify.app/. Give it a read
and see what PCR is all about :+1:.

### Legacy Docs

For posterity purposes, PCR 1.x docs are still hosted here:
https://atomicpages.github.io/pretty-checkbox-react/home/

## Changelog

Head on over to [releases](https://github.com/atomicpages/pretty-checkbox-react/releases) :tada:

## Contributions

Shout out to [Lokesh](https://github.com/lokesh-coder) for creating the original
[pretty-checkbox library](https://github.com/lokesh-coder/pretty-checkbox) :star:

## License

This project is licensed under the MIT License
