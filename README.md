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

Pretty Checkbox React is a tiny react wrapper around the awesome pretty checkbox.

## Getting Started

> pretty checkbox react depends on react >=16.8. Make sure you have React 16.8 or above installed.

```sh
npm i pretty-checkbox pretty-checkbox-react

# or with yarn
yarn add pretty-checkbox pretty-checkbox-react
```

### Basic Example

```jsx
import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';

import 'pretty-checkbox';

function App() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = React.useCallback(() => {
        setChecked(prev => !prev);
    }, []);

    // or useReducer for shorthand...
    // const [checked, handleChange] = React.useReducer(state => !state, false);

    React.useEffect(() => {
        if (checked) {
            // perform some side effect
            // when the state changes
        }
    }, [checked]);

    return (
        <Checkbox state={checked} onChange={handleChange}>
            Yes! I want emails!
        </Checkbox>
    );
}
```

### `useState` Hooks

For your convenience, each component has a "useState" hook to takes care of connecting all the pieces together.

```jsx
import React from 'react';
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

import 'pretty-checkbox';

function App() {
    const checkbox = useCheckboxState();

    React.useEffect(() => {
        if (checkbox.state) {
            // perform some side effect
            // when the state changes
        }
    }, [chekbox.state]);

    return <Checkbox {...checkbox}>Yes! I want emails!</Checkbox>;
}
```

### Basic Uncontrolled Example

PCR works as an uncontrolled component too. This allows you to easily integrate with tools like react-hook-form and other uncontrolled form solutions.

```jsx
import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';

import 'pretty-checkbox';

const ref = React.createRef();

function App() {
    // or you can add a ref in your component
    // const ref = React.useRef();

    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                if (!ref.current.checked) {
                    alert('You must agree to the terms and conditions!');
                }

                // do something else...
            }}>
            <Checkbox ref={ref}>I agree to the terms and conditions</Checkbox>
        </form>
    );
}
```

### With Class Components

React 16.8 is required for pretty checkbox react to work. If you're on the required version, then you can use class components too:

```jsx
import * as React from 'react';
import { Checkbox } from 'pretty-checkbox-react';

import 'pretty-checkbox';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
        this.handleChange = this._handleChange.bind(this);
    }

    _handleChange() {
        this.setState({ checked: true });
    }

    render() {
        return (
            <Checkbox state={this.state.checked} onChange={this.handleChange}>
                Yes! I want emails!
            </Checkbox>
        );
    }
}
```

## Grouping Controls

To make working with managed form solutions easier, PCR has a generic `Group` component for usage with checkboxes and switches. For radio inputs, however, there is a special `RadioGroup` component.

```jsx
import * as React from 'react';
import { Radio, useRadioState, RadioGroup } from 'pretty-checkbox-react';

import 'pretty-checkbox';

function App() {
    const radio = useRadioState();

    return (
        <RadioGroup {...radio}>
            <Radio value="yes" name="sub" {...radio}>
                Yes! I want emails
            </Radio>
            <Radio value="no" name="sub" {...radio}>
                No, I do not want emails
            </Radio>
        </RadioGroup>
    );
}
```

### Changelog

See the releases page.

### Contributions

Shout out to [Lokesh](https://github.com/lokesh-coder) for creating the original [pretty-checkbox library](https://github.com/lokesh-coder/pretty-checkbox) :star:

### License

This project is licensed under the MIT License
