---
id: installation
title: Get Started
sidebar_label: Installation
---

Pretty Checkbox React (PCR) is a small wrapper around the already great Pretty Checkbox :star:

## Installation

First, make sure `react` and `react-dom` are installed:

```sh
npm i react react-dom
```

Then, install `pretty-checkbox-react` _and_ `pretty-checkbox`:

```sh
npm i pretty-checkbox pretty-checkbox-react
```

## Usage

While PCR supports a multitude of use cases, we'll start simple :smile:. The example below will render a basic checkbox:

:::info
Webpack and other modern bundles support loading, process, or otherwise "making available" imported CSS. If you're not using a modern bunlder you can import CSS via [unpkg.com](https://unpkg.com/browse/pretty-checkbox/dist/)
:::

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'pretty-checkbox-react';

import 'pretty-checkbox';

function App() {
    return <Checkbox>Do you agree?</Checkbox>;
}
```

... and of course a real example :grin:

```jsx live
function App() {
    return <Checkbox>Do you agree?</Checkbox>;
}
```
