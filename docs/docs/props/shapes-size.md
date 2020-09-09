---
id: shapes-size
title: Shapes & Size
---

Shapes and size adjustments might be the most widely used PCR features 🤔

## Shapes

Shapes allow for control over the overall appearance of the control and can be configured vi the `shape` prop.

### Checkbox &amp; Radio

`Checkbox` and `Radio` share the same shapes and there are two to choose from:

1. `curve`
2. `round`

```jsx live
<>
    <Checkbox shape="round">I'm a checkbox</Checkbox>
    <Radio shape="curve">Radio time</Radio>
</>
```

### Switch

Switch offers three shapes that are unique to this control:

1. `outline` (default)
2. `fill`
3. `slim`

```jsx live
<>
    <Switch>Outline</Switch>
    <Switch shape="fill" color="primary">
        Fill
    </Switch>
    <Switch shape="slim" color="success">
        Slim
    </Switch>
</>
```

## Variants

:::info
Applicable to `Checkbox` and `Radio` only.
:::

Previously known as "fill modes", variants are similar to `shape`. The `variant` prop allows us to modify the inner appearance without making the control look like something else. There are two variants to choose from:

1. `fill`
2. `thick`

```jsx live
<>
    <Checkbox variant="fill">Fill</Checkbox>
    <Radio variant="thick">Thick</Radio>
    <Checkbox shape="curve" variant="thick">
        Curved Thick
    </Checkbox>
</>
```

## Size

Out of the box, PCR offers a `bigger` prop to make all input controls just a tad bit larger:

```jsx live
<>
    <Checkbox>Regular</Checkbox>
    <Checkbox bigger>Bigger</Checkbox>
</>
```

Need more control? Use the `font-size` CSS property!

```jsx live
function App() {
    const scale = useScaleState();

    return (
        <>
            <Scale {...scale} />{' '}
            <Checkbox style={{ fontSize: scale.size }}>Regular</Checkbox>
            <p>
                Current <code>font-size: {scale.size}px</code>
            </p>
        </>
    );
}
```
