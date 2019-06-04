---
title: Checkbox
order: 0
displayName: Checkbox
---

The Checkbox component is easy to use -- even easier then using a regular HTML checkbox. All components implemented by pretty-checkbox-react are simple stateless function components.

There are three shapes: `default`, `curve`, and `round`. Use the `shape` prop to customize.

#### Default Checkbox

```plain
<>
    <Checkbox>Default</Checkbox>
    <Checkbox style="fill">Fill</Checkbox>
    <Checkbox style="thick">Thick</Checkbox>
</>
```

#### Curve Checkbox

```plain
<>
    <Checkbox shape="curve">Default</Checkbox>
    <Checkbox shape="curve" style="fill">
        Fill
    </Checkbox>
    <Checkbox shape="curve" style="thick">
        Thick
    </Checkbox>
</>
```

#### Round Checkbox

```plain
<>
    <Checkbox shape="round">Default</Checkbox>
    <Checkbox shape="round" style="fill">
        Fill
    </Checkbox>
    <Checkbox shape="round" style="thick">
        Thick
    </Checkbox>
</>
```

#### Custom Rendering
Pretty Checkbox React APIs are relative inflexible. This is because the underlying TPL, pretty checkbox, is _very_ selector dependent. Almost all the props exposed by pretty checkbox react just append selectors to elements. Like most things, this can lead to challenges. If you're facing issues getting pretty checkbox react to work _exactly_ how you want it to, then you can pass your own children render function or `render` prop to `Checkbox`, `Switch`, or `Radio`.

**Note:** in most cases you can make things work using CSS. Please do not misuse this feature. Be sure you understand how `pretty-checkbox` works **before** custom rendering. Consult the [docs](https://lokesh-coder.github.io/pretty-checkbox/) for more information.

##### Children Render Function
```jsx
// node is the svg, icon, or image node
<Checkbox>{({ className, node }) => (
    <div className={classNames("state", className, "custom-handle")}>
        <label>My custom label</label>
    </div>
)}</Checkbox>
```

##### Render Prop
```jsx
// node is the svg, icon, or image node
<Checkbox render={({ className, node }) => (
    <div className={classNames("state", className, "custom-handle")}>
        <label>My custom label</label>
    </div>
)} />
```
