---
title: Icons
order: 3
---

Pretty Checkbox React offers a lot of flexibility in rendering custom content in the `Checkbox` and `Radio` components. You can render any font icon library, SVG, or image file.

##### Font Icon Library
In this example we're using Material UI fonts `@mdi/icons`, though you are free to choose your preferred icon library.

```plain
<>
    <Checkbox shape="round" icon={<i className="mdi mdi-check" />}>Pay Bills</Checkbox>
    <Checkbox shape="curve" icon={<i className="mdi mdi-close" />}>Fuel Refill</Checkbox>
    <Checkbox icon={<i className="mdi mdi-close-outline" />}>Buy Groceries</Checkbox>
</>
```

##### SVGs
Similar to using a font icon library, use the `svg` prop and pass in your SVG source or react component.

```plain
(function () {
    const check = (
        <svg viewBox="0 0 20 20">
            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style={{ stroke: 'white', fill: 'white' }}></path>
        </svg>
    );

    const lock = (
        <svg viewBox="0 0 8 8">
            <path fill="#65bbd2" d="M4 0c-1.099 0-2 .901-2 2v1h-1v4h6v-4h-1v-1c0-1.099-.901-2-2-2zm0 1c.561 0 1 .439 1 1v1h-2v-1c0-.561.439-1 1-1z"></path>
        </svg>
    );

    return (
        <>
            <Checkbox shape="curve" color="success" svg={check}>Recurring</Checkbox>
            <Checkbox plain svg={<img src="https://lokesh-coder.github.io/pretty-checkbox/svg/open-iconic/task.svg" />}>Done</Checkbox>
            <Checkbox plain svg={lock}>Lock</Checkbox>
        </>
    )
})();
```

> **Note:** SVG can be quite unpredictable to style. The underlying TPL, `pretty-checkbox` attempts to color custom SVG components based on few assumptions. Occasionally, it might return weird results and you'll need to override styles yourself.

##### Images
Using images? No problem. Pass your image to the `image` prop.

```plain
<>
    <Checkbox plain image={<img src="https://lokesh-coder.github.io/pretty-checkbox/img/checked/001.png" />}>Agree</Checkbox>
    <Checkbox plain image={<img src="https://lokesh-coder.github.io/pretty-checkbox/img/checked/002.png" />}>Subscribe</Checkbox>
    <Checkbox plain image={<img src="https://lokesh-coder.github.io/pretty-checkbox/img/checked/003.png" />}>Cancel</Checkbox>
    <Checkbox plain image={<img src="https://lokesh-coder.github.io/pretty-checkbox/img/checked/004.png" />}>Yes</Checkbox>
</>
```
