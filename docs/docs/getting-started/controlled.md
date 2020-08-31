---
id: controlled
title: Controlled Usage
---

## Controlled Usage

Controlled components are driven by changes in state. To make this a whole lot easier, PCR has hooks for that!

-   `useCheckboxState`
-   `useRadioState`
-   `useSwitchState`

Are you using hooks in production? If yes, then using PCR as a controlled component just got a whole lot easier with custom hooks:

```jsx live
function App() {
    const checkbox = useCheckboxState();

    return (
        <>
            <Checkbox {...checkbox}>Controlled Mode</Checkbox>
            <p>Checked {checkbox.state + ''}</p>
        </>
    );
}
```

### Manual State Hookup

Not feeling hooks or need to be in control everything yourself? No worries &ndash; my feelings aren't hurt :cry:. PCR wants three props for controlled usage:

| Prop       | Type                            | Description                                                                                    |
| ---------- | ------------------------------- | ---------------------------------------------------------------------------------------------- |
| `state`    | `boolean`, `string`, or `any[]` | Your state object                                                                              |
| `setState` | `React.Dispatch`                | Your state dispatch. This can come from a `useState` hook or be a reference to `this.setState` |
| `onChange` | `React.ChangeEventHandler`      | Your change handler to call when the input control is clicked                                  |

:::info
Array types in `state` are only applicable to `Checkbox`. Boolean and string types are supported by `Radio`, `Switch` and `Checkbox`.
:::

```jsx live
function App() {
    const [state, setState] = React.useState(false);

    return (
        <>
            <Checkbox
                state={state}
                setState={setState}
                onChange={React.useCallback(() => {
                    setState(previousCheckedState => !previousCheckedState);
                }, [])}>
                Controlled Mode
            </Checkbox>
            <p>Checked {state + ''}</p>
        </>
    );
}
```

### Class Controlled Usage

Not on the hooks train yet 🚂? No worries, here's a class example!

```jsx live
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };

        this.onChange = () => {
            this.setState({ checked: !this.state.checked });
        };
    }

    render() {
        return (
            <>
                <Checkbox
                    state={this.state.checked}
                    setState={this.setState}
                    onChange={this.onChange}>
                    Controlled Mode
                </Checkbox>
                <p>Checked {this.state.checked + ''}</p>
            </>
        );
    }
}
```
