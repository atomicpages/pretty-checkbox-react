---
id: radio
title: Radio
---

Radio controls are pretty much essential for any application. PCR makes it easy
to add stylish radio controls to your application :+1:

## Shapes, Variants, & States

There's no "one size fits all" for input controls like Radio. Thankfully, PCR
allows you to represent Radio in various ways via the `shape` and `variant` prop
for pre-bundled fun. See the [`shapes`](props/shapes-size) docs for more
details.

```jsx live
<>
  <Radio name="a">Regular</Radio>
  <Radio name="a" shape="curve" variant="thick">
    Thick Curve
  </Radio>
  <Radio name="a" shape="square" variant="fill">
    Fill Square
  </Radio>
</>
```

### Disabled &amp; Locked

Of course `disabled` is supported, but there's also a secondary state called
`locked`. See the [states](props/states) docs for more details.

```jsx live
<>
  <Radio>Regular</Radio>
  <Radio disabled>Disabled</Radio>
  <Radio locked>Locked</Radio>
</>
```

### Scalability

Out of the box, PCR offers a `bigger` prop to make all input controls just a tad
bit larger. For more fine-grained control check out the
[size docs](props/shapes-size#size).

```jsx live
<>
  <Radio name="b">Regular</Radio>
  <Radio name="b" bigger>
    Bigger
  </Radio>
</>
```

## Uncontrolled

`Radio` forwards `refs` to the input element :smile:. See the
[uncontrolled component docs](main-concepts/uncontrolled) for more info.

```jsx live
function App() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
    }
  }, []);

  return <Radio ref={ref}>Uncontrolled Usage</Radio>;
}
```

## Controlled

PCR exposes helpful state hooks to make managing state a breeze. For radio you
should use `useRadioState`. See the
[controlled component docs](main-concepts/controlled) for more info.

### Boolean Radios

Like checkbox, `Radio` supports boolean modes for simple yes/no options:

```jsx live
function App() {
  const radio = useRadioState();

  return (
    <>
      <Radio name="boolean" {...radio}>
        Single Radio
      </Radio>
      <button type="reset" onClick={() => radio.setState(false)}>
        Reset
      </button>
      <p>Selected: {radio.state + ''}</p>
    </>
  );
}
```

### Named Radios

Typically `Radio` will have a `value` associated with the control. Unlike
checkbox, `Radio` works with _single_ controls and **does not** store named
results in an array.

```jsx live
function App() {
  const radio = useRadioState();

  return (
    <>
      <Radio name="pizza" value="thin" {...radio}>
        Thin Crust
      </Radio>
      <Radio name="pizza" value="deep-dish" {...radio}>
        Deep Dish
      </Radio>
      <Radio name="pizza" value="regular" {...radio}>
        Regular Crust
      </Radio>
      <p>Selected Item: {radio.state}</p>
    </>
  );
}
```
