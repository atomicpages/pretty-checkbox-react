<h4 align="center">Quickly integrate pretty checkbox Components (checkbox, switch, radio) with React</h4>

<p align="center">
 <a href="https://github.com/atomicpages/pretty-checkbox-react/releases">
    <img src="https://img.shields.io/github/release/atomicpages/pretty-checkbox-react.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Github Release">
  </a>
   <a href="LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/atomicpages/pretty-checkbox-react.svg?style=flat-square">
  </a>
   <a href="#">
    <img src="https://img.shields.io/npm/dm/pretty-checkbox-react.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Downloads">
  </a>
  <a href="https://travis-ci.org/atomicpages/pretty-checkbox-react" target="_blank" rel="nofollow noreferred noopener">
    <img alt="Build Status" src="https://img.shields.io/travis/atomicpages/pretty-checkbox-react.svg?style=flat-square">
  </a>
  <a href='https://coveralls.io/github/atomicpages/pretty-checkbox-react?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/atomicpages/pretty-checkbox-react/master.svg?style=flat-square">
  </a>
</p>
<br>

<div class="highlight highlight-source-shell">
<pre>
<div align="center"><strong >Demo and documentation</strong></div>
<div align="center"><a align="center" href="https://atomicpages.github.io/pretty-checkbox-react/">https://atomicpages.github.io/pretty-checkbox-react/</a></div>
</pre>
</div>

<div align="center">
    <img src="preview.gif" alt="Pretty checkbox preview" />
</div>

### Browser
Include the script file and then the component:

```html
<script type="text/javascript" src="node_modules/react/umd/react.production.min.js"></script>
<script type="text/javascript" src="node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script type="text/javascript" src="node_modules/pretty-checkbox-react/dist/pretty-checkbox-react.min.js"></script>

<script type="text/javascript">
function App() {
    return React.createElement(
        PrettyCheckboxReact.Checkbox,
        {
            animation: 'smooth',
            shape: 'curve'
        },
        React.createElement(
            'label',
            null,
            'Check me!'
        )
    )
}

ReactDOM.render(App, document.querySelector('body'));
</script>
```

#### Webpack + Rollup
If you're using webpack or rollup then with JSX you can write this more succulently:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox } from 'pretty-checkbox-react';

function App() {
    return <Checkbox animation="smooth" shape="curve">Check me!</Checkbox>;
}

ReactDOM.render(App, document.querySelector('body'));
```

### Getting Started
Install `pretty-checkbox` and `pretty-checkbox-react` through NPM or yarn:

```bash
yarn pretty-checkbox pretty-checkbox-react # or
npm i pretty-checkbox pretty-checkbox-react --save
```

> `pretty-checkbox` is a _peer_ dependency so you need to install it yourself!

Make the dependencies available and begin using! `pretty-checkbox-react` exposes three components for your use:

* Checkbox
* Radio
* Switch

### Contributions
Shout out to [Lokesh](https://github.com/lokesh-coder) for creating the original [pretty-checkbox library](https://github.com/lokesh-coder/pretty-checkbox)!

### License
This project is licensed under the MIT License
