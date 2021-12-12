---
id: states
title: States
---

In addition to the `color` prop, PCR components share many states in common,
too.

## Disabled

Disabled state is pretty universal and is supported by all components using the
`disabled` prop. Nothing fancy here, we let the browser handle preventing user
action when a component is disabled with no extra magic needed 🧙‍♂️.

```jsx live
<>
  <Checkbox disabled>Danger</Checkbox>
  <Radio disabled>Will</Radio>
  <Switch disabled>Robinson</Switch>
</>
```

## Locked

In addition to `disabled` states, there's also this thing called `locked` state.
Functionally speaking they are the same; however visually they are different.
Disabling an input field changes the visual appearance, whereas `locked` does
not. For the curious reader, under the hood PCR blocks user interaction using
some CSS magic with `pointer-events: none`.

:::caution While this might seem enticing, there are accessibility concerns with
using this prop.
([See WCAG 2 for more info](https://webaim.org/articles/contrast/)). :::

```jsx live
<>
  <Checkbox locked>Bamboozled again!</Checkbox>
  <Radio locked>Nope!</Radio>
  <Switch locked>Try again!</Switch>
</>
```

## Focus

Add a bit of class to any control via `hasFocus` 🥂:

```jsx live
<Checkbox hasFocus>Fancy!</Checkbox>
```

## Other Pretty Checkbox States

Extra states such as hover and toggle are not implemented in PCR since they can
be done easily using React. If you're new to React this might seem pretty
esoteric, but fret not because it's super easy!

### Hover

[Pretty Checkbox hover state](https://pretty-checkbox.netlify.app/docs/basic-concepts/states#hover)
uses CSS to handle visibility of elements. In the world of React the trick here
is make our component _stateful_ and use event handlers to update the state:

```jsx live
function App() {
  const [label, setLabel] = React.useState('Remember me');

  const onMouseEnter = React.useCallback(() => {
    setLabel('Remembered for 15 days');
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setLabel('Remember me');
  }, []);

  return (
    <Checkbox onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {label}
    </Checkbox>
  );
}
```

### Toggle

Like hover,
[pretty checkbox toggle](https://pretty-checkbox.netlify.app/docs/basic-concepts/states#toggle)
can be achieved in PCR by making our component stateful. Replicating this logic
requires a bit more overhead than hovering so buckle up 🚙!

1. Force the control (checkbox, radio, or switch) to be `checked`
2. Change color and label when state changes

Using built-in PCR hooks make this process a whole lot easier :+1:

```jsx live
function App() {
  const checkbox = useCheckboxState();

  return (
    <>
      <Checkbox
        color={checkbox.state ? 'success' : 'danger'}
        shape="curve"
        {...checkbox}
        checked
      >
        {checkbox.state ? 'Subscribed' : 'Subscribe'}
      </Checkbox>
      <p>Checked: {checkbox.state + ''}</p>
    </>
  );
}
```

### Toggle without Hooks

Not on the hooks train 🚂? No worries:

```jsx live
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <>
        <Checkbox
          color={this.state.checked ? 'success' : 'danger'}
          shape="curve"
          onChange={this.handleChange}
          checked
        >
          {this.state.checked ? 'Subscribed' : 'Subscribe'}
        </Checkbox>
        <p>Checked: {this.state.checked + ''}</p>
      </>
    );
  }
}
```
