---
id: switch
title: Switch
---

In addition to Checkbox and Radio, PCR also provides a `Switch` control to
provide a mobile-like experience on the web. Switches have dual-use as radio
controls _or_ as checkboxes.

## Usage

By default `Switch` behaves like a checkbox. To make the switch behave lke a
radio, use the `type` prop:

```jsx live
<>
  <Switch>Basic Switch</Switch>
  <Switch type="radio">Radio Switch</Switch>
</>
```

## Shapes, Variants, & States

There's no "one size fits all" for input controls like Switch. Thankfully, PCR
allows you to represent Radio in various ways via the `shape` prop for
pre-bundled fun. See the [`shapes`](props/shapes-size#switch) docs for more
details.

```jsx live
<>
  <Switch>Regular</Switch>
  <Switch shape="fill">Fill</Switch>
  <Switch shape="slim">Slim</Switch>
</>
```

### Disabled &amp; Locked

Of course `disabled` is supported, but there's also a secondary state called
`locked`. See the [states](props/states) docs for more details.

```jsx live
<>
  <Switch>Regular</Switch>
  <Switch disabled>Disabled</Switch>
  <Switch locked>Locked</Switch>
</>
```

## Uncontrolled

`Switch` forwards `refs` to the input element :smile:. See the
[uncontrolled component docs](main-concepts/uncontrolled) for more info.

```jsx live
function App() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
    }
  }, []);

  return <Switch ref={ref}>Uncontrolled Usage</Switch>;
}
```

## Controlled

Switch can be used as a radio _or_ a checkbox. Because of this duality, you can
use either of the following state hooks:

- `useCheckboxState`
- `useRadioState`

### Controlled as a Checkbox

Like [checkbox](checkbox#controlled), you can use the state hook as a boolean,
named, or grouped controls.

:::danger Danger, Will Robinson! `switch` is a **reserved word** and the browser
will throw an error if you attempt to use the word as a variable 🙃

```js
const switch = useCheckboxState();
```

:::

```jsx live
function App() {
  const state = useCheckboxState();

  return <Switch {...state}>Switch: {state.state + ''}</Switch>;
}
```

### Controlled as a Radio

Like [radio](radio#controlled) you can use the state hook as a boolean or a
named value:

```jsx live
function App() {
  const radio = useRadioState();

  return (
    <>
      <Switch type="radio" name="yn" value="yes" {...radio}>
        Yes
      </Switch>
      <Switch type="radio" name="yn" value="no" {...radio}>
        No
      </Switch>
    </>
  );
}
```
