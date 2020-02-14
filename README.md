# Getting Started

## Installing

Getting `pretty-checkbox-react` is easy

{% hint style="info" %}
`pretty-checkbox` is a peer dependency of pretty-checkbox-react so you need to be sure to install this as well
{% endhint %}

```bash
npm i pretty-checkbox-react pretty-checkbox --save

# or with yarn
yarn add pretty-checkbox-react pretty-checkbox
```

### Usage

Pretty Checkbox React \(PCR\) can be used directly in the browser via UMD or inside a modern bundlers like webpack, rollup, or browserify.

{% code title="index.html" %}
```markup
<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/pretty-checkbox-react/dist-browser/index.js"></script>

<script type="text/javascript">
    function App() {
        return React.createElement(
            PrettyCheckboxReact.Checkbox,
            Object.assign(
                {
                    animation: "smooth",
                    shape: "curve"
                },
                PrettyCheckboxReact.useCheckboxState()
            ),
            "Yes, I want emails!"
        );
    }

    ReactDOM.render(React.createElement(App), document.querySelector("body"));
</script>

```
{% endcode %}

If you're using a modern bundler then the syntax is a bit easier:

{% code title="index.js" %}
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function App() {
    const checkbox = useCheckboxState();
    
    return <Checkbox {...checkbox}>Hello</Checkbox>
}

ReactDOM.render(<App />, document.getElementById('root'));
```
{% endcode %}

For more details about the components available, see each component for more examples and APIs.

