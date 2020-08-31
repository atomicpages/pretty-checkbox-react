---
id: installation
title: Get Started
sidebar_label: Installation
---

Pretty Checkbox React (PCR for short) is a small, a11y friendly implementation of Pretty Checkbox :star: with easy as pie usage :pie:

## Installation

First, make sure `react` and `react-dom` 16.9+  are installed:

```sh
npm i react react-dom
```

Then, install `pretty-checkbox-react` _and_ `@djthoms/pretty-checkbox`:

```sh
npm i @djthoms/pretty-checkbox pretty-checkbox-react
```

## Usage

Pretty Checkbox React exposes three components as [named exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) that are importable in your super groovy development environment:

-   `Checkbox`
-   `Radio`
-   `Switch`

```jsx title="index.js"
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';

import '@djthoms/pretty-checkbox';

function App() {
    return (
        <>
            <Checkbox>Hey Jude</Checkbox>
            <Radio>Don't make it bad</Radio>
            <Switch>Take a sad song</Switch>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Interactive examples are awesome :fire: so expect them throughout the docs!

```jsx live
function App() {
    return (
        <>
            <Checkbox>Hey Jude</Checkbox>
            <Radio>Don't make it bad</Radio>
            <Switch>Take a sad song</Switch>
        </>
    );
}
```

### Browser Usage

Nothing using a modern bundler like parcel, create-react-app, webpack, or something else? Use it in the browser :boom:

```html title="index.html" {9,14,15,18}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Awe yis</title>

        <!-- load pretty-checkbox css -->
        <link rel="stylesheet" href="https://unpkg.com/@djthoms/pretty-checkbox" />
    </head>
    <body>
        <div id="root"></div>
        <!-- load react first -->
        <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

        <!-- load pretty-checkbox-react -->
        <script src="https://unpkg.com/pretty-checkbox-react@3/dist-browser/index.js"></script>

        <script>
            var App = function () {
                return React.createElement(
                    PrettyCheckboxReact.Checkbox,
                    null,
                    "Are you sure you don't want to use a modern bundler?"
                );
            };

            ReactDOM.render(React.createElement(App), document.getElementById('root'));
        </script>
    </body>
</html>
```

### IE Support

PCR requires **no extra polyfills** to support IE other than the ones [required for React](https://www.npmjs.com/package/react-app-polyfill#supporting-internet-explorer).
