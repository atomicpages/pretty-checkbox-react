---
title: Indeterminate
order: 0
---

Indeterminate checkboxes are a little more complex. A generic solution is to wrap your checkbox in a HOC; however, with our so-called "soft" checkboxes this becomes a little tricky &mdash; mostly because there's more than one way we can make an indeterminate checkbox.

##### Using Classes

If you're using the Component or PureComponent class then we can manage indeterminate through internal state.  This solution is great if you're using class components and don't need "library-like" flexibility.

```plain
class Indeterminate extends React.Component {
    constructor() {
        super();

        this.state = {
            indeterminate: false,
            checked: false,
        };
    }

    handleCheckboxChange() {
        const newState = { checked: !this.state.checked };

        if (this.state.indeterminate) {
            newState.indeterminate = false;
        }

        this.setState({ ...this.state, ...newState });
    }

    render() {
        return (
            <>
                <Checkbox
                    indeterminate={this.state.indeterminate}
                    shape="curve"
                    onChange={this.handleCheckboxChange.bind(this)}
                    checked={this.state.checked}
                    icon={
                        <i
                            className={
                                'mdi ' +
                                (this.state.indeterminate
                                    ? 'mdi-minus'
                                    : 'mdi-check')
                            }
                        />
                    }>
                    Indeterminate
                </Checkbox>
                <button
                    className="btn btn-small ml-auto mr-2"
                    onClick={() =>
                        this.setState({
                            indeterminate: true,
                            checked: true,
                        })
                    }
                    disabled={this.state.indeterminate}>
                    Apply
                </button>
            </>
        );
    }
}
```

Need something reusable? Don't want internal state? Check out the **Using a HOC** section.

##### Using Hooks

If you're one the awesome people getting your hands dirty with hooks then this is for you! We can rewrite our class component using hooks with ease:

```plain
function Indeterminate(props) {
    const [indeterminate, setIndeterminate] = React.useState(
        props.indeterminate
    );

    const [checked, setChecked] = React.useState(props.checked);

    const handleCheckboxChange = React.useCallback(() => {
        setChecked(!checked);

        if (indeterminate) {
            setIndeterminate(false);
        }
    }, [checked, setChecked, indeterminate, setIndeterminate]);

    return (
        <>
            <Checkbox
                indeterminate={indeterminate}
                shape="curve"
                onChange={handleCheckboxChange}
                checked={checked}
                icon={
                    <i
                        className={
                            'mdi ' + (indeterminate ? 'mdi-minus' : 'mdi-check')
                        }
                    />
                }>
                Indeterminate
            </Checkbox>
            <button
                className="btn btn-small ml-auto mr-2"
                onClick={() => {
                    setIndeterminate(true);
                    setChecked(true);
                }}
                disabled={indeterminate}>
                Apply
            </button>
        </>
    );
}
```

##### Using a Custom Hook

If you're developing a library then you might want to ease consumer pains. One of the many ways this can be done is using a custom hook. If you're using babel, webpack, rollup, or another modern bundler then you can `export` your custom hook so consumers which makes this bit reusable.

```plain
(function() {
    /**
     * Merge checked and indeterminate logic into a single hook.
     * This makes things slightly cleaner, but less transparent.
     */
    const useIndeterminate = ({ indeterminate, checked }) => {
        const [icon, setIcon] = React.useState(null);

        React.useEffect(() => {
            if (checked && !indeterminate) {
                setIcon('mdi-check');
            }

            if (checked && indeterminate) {
                setIcon('mdi-minus');
            }
        });

        return {
            icon: <i className={`mdi ${icon}`} />,
            indeterminate,
        };
    };

    return () => {
        const [checked, setChecked] = React.useState(false);
        const [indeterminate, setIndeterminate] = React.useState(false);

        const indeterminateProps = useIndeterminate({ indeterminate, checked });

        const handleCheckboxChange = React.useCallback(() => {
            setChecked(!checked);

            if (indeterminate) {
                setIndeterminate(false);
            }
        }, [checked, setChecked]);

        return (
            <>
                <Checkbox
                    shape="curve"
                    onChange={handleCheckboxChange}
                    checked={checked}
                    {...indeterminateProps}>
                    Indeterminate
                </Checkbox>
                <button
                    className="btn btn-small ml-auto mr-2"
                    onClick={() => {
                        setIndeterminate(true);
                        setChecked(true);
                    }}
                    disabled={indeterminate}>
                    Apply
                </button>
            </>
        );
    };
})();
```

##### Using a HOC
The last main way to expose indeterminate functionality is by creating a HOC. This is a more verbose solution that using a custom hook, but it might more suitable. Given the unique nature of HOCs, a simple example is provided below from Codesandbox which demonstrates using an HOC and `ref` to make a native HTML checkbox indeterminate.

<iframe src="https://codesandbox.io/embed/blazing-cherry-fvw1i?fontsize=14&module=%2Fsrc%2Fcomponents%2FwithIndeterminate.js" title="Indeterminate Checkbox Example" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
