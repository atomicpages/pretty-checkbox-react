---
id: checkbox
title: Checkbox
---

At the heart and soul of every application is at least one checkbox. It might be
a terms and conditions agreement, "Do not sell" CCPA notice, or something else;
whatever it is, `pretty-checkbox-react` (PCR) has your back.

## Shapes, Variants, & States

There's no "one size fits all" for input controls like Checkbox. Thankfully, PCR
allows you to represent Checkbox in various ways via the `shape` and `variant`
prop for pre-bundled fun. See the [`shapes`](props/shapes-size) docs for more
details.

```jsx live
<>
  <Checkbox>Regular</Checkbox>
  <Checkbox shape="curve" variant="thick">
    Thick Curve
  </Checkbox>
  <Checkbox shape="round" variant="fill">
    Fill Round
  </Checkbox>
</>
```

### Disabled &amp; Locked

Of course `disabled` is supported, but there's also a secondary state called
`locked`. See the [states](props/states) docs for more details.

```jsx live
<>
  <Checkbox>Regular</Checkbox>
  <Checkbox disabled>Disabled</Checkbox>
  <Checkbox locked>Locked</Checkbox>
</>
```

### Scalability

Out of the box, PCR offers a `bigger` prop to make all input controls just a tad
bit larger. For more fine-grained control check out the
[size docs](props/shapes-size#size).

```jsx live
<>
  <Checkbox>Regular</Checkbox>
  <Checkbox bigger>Bigger</Checkbox>
</>
```

## Uncontrolled

`Checkbox` forwards `refs` to the input element :smile:. See the
[uncontrolled component docs](main-concepts/uncontrolled) for more info.

```jsx live
function App() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
    }
  }, []);

  return <Checkbox ref={ref}>Uncontrolled Usage</Checkbox>;
}
```

## Controlled

PCR exposes helpful state hooks to make managing state a breeze. For checkbox
you should use `useCheckboxState`. See the
[controlled component docs](main-concepts/controlled) for more info.

### Boolean Checkboxes

For simple yes/no, or true/false usage, you can use the hook as-is without any
extra config needed 😲:

```jsx live
function App() {
  const checkbox = useCheckboxState();

  return <Checkbox {...checkbox}>Checked: {checkbox.state + ''}</Checkbox>;
}
```

### Named Checkbox

PCR supports checkbox controls with a `value` prop too! The resulting state will
be an `array` &ndash; even if it's a single item.

:::note The initial `state` will be `false` unless specified otherwise. :::

```jsx live
function App() {
  const checkbox = useCheckboxState();

  return (
    <Checkbox value="active" {...checkbox}>
      Checked: {checkbox.state + ''}
    </Checkbox>
  );
}
```

### Grouped Controls

PCR represents _named_ checkboxes as an array which allows us to use the same
state hook for multiple checkboxes! Not only does this keep your code clean, but
keeps th footprint of PCR extra small :sunglasses:

```jsx live
function App() {
  const fruits = ['apples', 'oranges', 'bananas'];
  const checkbox = useCheckboxState({ state: [] });

  return (
    <>
      {fruits.map((fruit) => (
        <Checkbox value={fruit} {...checkbox}>
          {fruit}
        </Checkbox>
      ))}
      <p>Selected items: {checkbox.state.join(', ')}</p>
    </>
  );
}
```

## Indeterminate

`indeterminate`, or tri-state checkboxes are relative niche, but have their
place in the wild. PCR supports state-driven tri-state as well as an
`indeterminate` prop for uncontrolled usage.

### Uncontrolled Indeterminate

Using the `indeterminate`, PCR sets two things:

1. `aria-checked` to `mixed`
2. `indeterminate` property on the `input` element to true

:::info As of `alpha.2` the second point isn't true. A fixed is needed on
pretty-checkbox to ensure `:indeterminate` selectors style the checkbo as
checked. :::

```jsx live
<Checkbox indeterminate>Indeterminate</Checkbox>
```

### Controlled Indeterminate

For controlled usage, you can use the `indeterminate` _or_ use "indeterminate"
as a special state keyword:

```jsx live
function App() {
  const checkbox = useCheckboxState();

  return (
    <>
      <Checkbox
        icon={
          <i
            className={`mdi mdi-${
              checkbox.state === 'indeterminate' ? 'minus' : 'check'
            }`}
          />
        }
        {...checkbox}
      >
        Controlled Indeterminate
      </Checkbox>
      <button
        onClick={() => {
          checkbox.setState('indeterminate');
        }}
      >
        Indeterminate
      </button>
    </>
  );
}
```

Controlled indeterminates have a whole host of usages including trees!

<p>
    <small>
        Credit where credit is due. This example is{' '}
        <a href="https://reakit.io/docs/checkbox/#indeterminate-or-mixed-state">
            adapted from reakit
        </a>
    </small>
</p>

```jsx live
(function () {
  function useTreeState({ values }) {
    const group = useCheckboxState();
    const items = useCheckboxState();

    // updates items when group is toggled
    React.useEffect(() => {
      if (group.state === true) {
        items.setState(values);
      } else if (group.state === false) {
        items.setState([]);
      }
    }, [group.state]);

    // updates group when items is toggled
    React.useEffect(() => {
      if (items.state.length === values.length) {
        group.setState(true);
      } else if (items.state.length) {
        group.setState('indeterminate');
      } else {
        group.setState(false);
      }
    }, [items.state]);

    return { group, items };
  }

  function Icon({ state }) {
    return (
      <i
        className={`icon mdi mdi-${
          state === 'indeterminate' ? 'minus' : 'check'
        }`}
      />
    );
  }

  function App() {
    const values = ['Apple', 'Orange', 'Watermelon'];
    const { group, items } = useTreeState({ values });

    return (
      <ul>
        <li>
          <label>
            <Checkbox icon={<Icon {...group} />} data-type="icon" {...group}>
              Fruits
            </Checkbox>
          </label>
        </li>
        <ul>
          {values.map((value, i) => (
            <li key={i}>
              <label>
                <Checkbox
                  icon={<Icon />}
                  data-type="icon"
                  {...items}
                  value={value}
                >
                  {value}
                </Checkbox>
              </label>
            </li>
          ))}
        </ul>
      </ul>
    );
  }

  return App;
})();
```

### `indeterminate` Gotchas

No pun intended :laughing:. Okay, but seriously there's one gotcha regarding
`indeterminate` prop usage you need to be aware of. In rare cases usage of the
`indeterminate` prop with `checked` will result in the checkbox becoming
immediately checked after React re-renders the component. Be sure
`indeterminate` is `undefined`:

```jsx {3}
<Checkbox
    checked={checked}
    indeterminate={indeterminate || undefined}
    onChange={/* ... */}
    icon={/* ... */} />
```

This is due to a side effect in `useIndeterminate.ts` and in particular the
three highlighted lines below:

```js {3,5,7}
React.useEffect(() => {
  if (
    state !== 'indeterminate' &&
    ref.current &&
    typeof indeterminateFromProps !== 'undefined'
  ) {
    ref.current.checked = indeterminateFromProps;
    setStatus(indeterminateFromProps);
  }
}, [indeterminateFromProps, state]);
```

If `indeterminateFromProps` is `false` (not `undefined`) then our checkbox
becomes immediately unchecked :cry:.
