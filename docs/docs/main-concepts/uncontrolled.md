---
id: uncontrolled
title: Uncontrolled Components
---

React offers both controlled and
[uncontrolled usage](https://reactjs.org/docs/uncontrolled-components.html) of
components. All PCR components forward `refs` to the underlying
`HTMLInputElement` for easy integration using stateless managed form solutions
like [react-hook-form](https://www.npmjs.com/package/react-hook-form).

## Basic Usage

Create a `ref` and pass away!

```jsx live
function App() {
  const timer = React.useRef(null);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      timer.current = setTimeout(() => {
        ref.current.checked = true;
      }, 5000);
    }

    return () => clearTimeout(timer.current);
  }, []);

  return <Checkbox ref={ref}>Check after 5 seconds</Checkbox>;
}
```

### Without Hooks

Still using classes? No worries :+1:

```jsx live
class App extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.ref.current.checked = true;
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <Checkbox ref={this.ref}>Check after 5 seconds</Checkbox>;
  }
}
```
