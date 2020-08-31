---
id: uncontrolled
title: Uncontrolled Usage
---

## Refs &amp; Uncontrolled Usage

When using as a standalone component or in a form, all PCR components support [uncontrolled usage](https://reactjs.org/docs/uncontrolled-components.html).

:::info
Refs will be attached to the underlying HTML `input` element.
:::

Below is an example of how we can pass a `ref` to checkbox:

```jsx live
function App() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        const id = setTimeout(() => {
            if (ref.current) {
                ref.current.checked = true;
            }
        }, 3000);

        return () => {
            clearTimeout(id);
        };
    }, []);

    return <Checkbox ref={ref}>I will get checked in 3 seconds</Checkbox>;
}
```

### Class Uncontrolled Usage

Not on the hooks train yet 🚂? No worries, here's a class example!

```jsx live
class App extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.id = null;
    }

    componentDidMount() {
        this.id = setTimeout(() => {
            if (this.ref.current) {
                this.ref.current.checked = true;
            }
        }, 3000);
    }

    componentWillUnmount() {
        // don't forget to clean up side effects
        clearTimeout(this.id);
    }

    render() {
        return (
            <Checkbox ref={this.ref} {...this.props}>
                I will get checked in 3 seconds
            </Checkbox>
        );
    }
}
```
