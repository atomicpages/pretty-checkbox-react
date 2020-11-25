---
id: preact
title: Preact
---

PCR works out of the box with Preact 10 due to the simplicity of the components. Literally can't get any easier :wink:.

## Install

```sh
npx preact-cli preactjs-templates/simple preact_app
cd preact_app
npm i pretty-checkbox pretty-checkbox-react
```

## Usage

From the `index.js` file in your Preact app:

```jsx
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';
import '~/pretty-checkbox';

export default function App() {
    const checkbox = useCheckboxState();

    return (
        <>
            <Checkbox {...checkbox}>It lives!</Checkbox>
            <p>Checked: {checkbox.state + ''}</p>
        </>
    );
}
```

Wowza 🤯 so easy!

### Usage with Hooks

As per the Preact docs, we can use hooks from `preact/hooks` or from `preact/compat`:

```jsx
import { useRef, useEffect } from 'preact/hooks';
import { Checkbox } from 'pretty-checkbox-react';

import '~/pretty-checkbox';

export default function App() {
    const ref = useRef(null);

    useEffect(() => {
        console.log(ref);
    }, []);

    return <Checkbox ref={ref}>It lives!</Checkbox>;
}
```
