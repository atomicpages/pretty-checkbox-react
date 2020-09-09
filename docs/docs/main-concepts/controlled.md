---
id: controlled
title: Controlled Components
---

Controlled components allows React to manage component state for you via props or state solutions like Redux or Flux. PCR exposes state hooks for convenience, but you're welcome to use different tools as well.

## Hooks

To greatly simplify state-based components, PCR exports two hooks for use:

-   `useCheckboxState`
-   `useRadioState`

Both hooks have standard options:

| Name       | Description                     |
| ---------- | ------------------------------- |
| `state`    | The state object of the control |
| `onChange` | Your custom callback to call    |

Both hooks `return` a standard interface:

| Name       | Description                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| `state`    | The state object of the control                                                                               |
| `setState` | The React dispatch function                                                                                   |
| `onChange` | The change handler to be called by the input control when a change event fires. This calls `setState` for you |

Confused? Don't be! Hooks are just functions that return stuff we'll _spread_ to the PCR component. Like this!

```jsx live
function App() {
    const checkbox = useCheckboxState();

    return <Checkbox {...checkbox}>Checked: {checkbox.state + ''}</Checkbox>;
}
```

Say whhaaatttt?! 🤯 If it seems too good to be true, it's not :wink:. It really is _that_ easy.

### Customizing `onChange`

Using the PCR hooks you sacrifice some control the hook, but you are free to pass in your own change handler. This will be called _after_ the hook's `onChange` handler has executed.

```jsx live
function App() {
    const [fired, setFired] = React.useState(false);

    // don't forget to memoize!
    const onChange = React.useCallback(e => {
        // the original event is passed as an argument
        setFired(true);
    }, []);

    const checkbox = useCheckboxState({ onChange });

    return (
        <>
            <Checkbox {...checkbox}>Checked: {checkbox.state + ''}</Checkbox>
            <p>My callback called: {fired + ''}</p>
        </>
    );
}
```

### Grouping State

Interrelated controls don't require a new hook for each control. PCR supports state arrays to keep the component footprint tiny! Check it out :+1:

:::tip
Something acting funky? Make sue you're passing a unique `value` control on the `Checkbox` 🙂
:::

```jsx live
function App() {
    const items = [
        {
            label: 'Apples',
            value: 'apples',
        },
        {
            label: 'Oranges',
            value: 'oranges',
        },
        {
            label: 'Bananas',
            value: 'bananas',
        },
    ];

    const checkbox = useCheckboxState({ state: [] });

    return (
        <>
            {items.map(({ label, value }) => (
                <Checkbox value={value} {...checkbox}>
                    {label}
                </Checkbox>
            ))}
            <p>Selected items: {checkbox.state.join(', ')}</p>
        </>
    );
}
```

## Managing State without Hooks

Not sold on the PCR's super awesome hooks? That's okay :cry:. Because our hooks have a standard interface, this means you can easily mirror that interface using your own state hooks, class component, or something else.

### React `useState`

:::note
Passing `setState` while optional, is recommended since PCR internally handles different types of state. For full control use the `checked` prop.
:::

```jsx live
function App() {
    const [checked, setChecked] = React.useState(false);

    const onChange = React.useCallback(() => {
        setChecked(prev => !prev);
    }, []);

    return (
        <Checkbox state={checked} setState={setChecked} onChange={onChange}>
            Checked: {checked + ''}
        </Checkbox>
    );
}
```

### Class Components

Not on the hooks gravy train yet 🚂? No worries. PCR works well with class components too (but remember that React 16.9+ is required).

```jsx live
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { checked: true };
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            <Checkbox state={this.state.checked} setState={this.setState} onChange={this.onChange}>
                Checked: {this.state.checked + ''}
            </Checkbox>
        );
    }
}
```
