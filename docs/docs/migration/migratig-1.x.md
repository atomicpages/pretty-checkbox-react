---
id: migrating-1.x
title: Migrating from Pretty Checkbox React 1
sidebar_label: From 1.x
---

First off, thank you for using PCR for as long as you have! You are appreciated :star:. PCR has changed a lot since the days of PCR 1.x. The project has evolved with improved stateful support, transitioned to typescript (with flows types still generated), and much more.

## `style` prop

The `style` prop from PCR has been renamed to `variant` to prevent conflicts with the `style` prop used by React to pass inline CSS to components.

```diff
function App() {
    return (
        <>
-            <Checkbox style="fill">Fill</Checkbox>
-            <Checkbox style="thick">Thick</Checkbox>
+            <Checkbox variant="fill">Fill</Checkbox>
+            <Checkbox variant="thick">Thick</Checkbox>
        </>
    )
}
```

## `indeterminate` prop

PCR 3.x adds back the `indeterminate`. If you used one of the myriad of examples on the old doc site, see the new [checkbox docs for alternatives](/docs/checkbox#indeterminate).

## `icon`, `svg` and `image` props

PCR 3.x unifies each image type under a single prop: `icon`. PCR behind the scenes will figure out what kind of element you're using and apply the correct className. See the new icon [docs for more info](/docs/props/icons).

```diff
function App() {
    return (
-        <Checkbox image={<img src="..." alt="..." />}>
+        <Checkbox icon={<img src="..." alt="..." />}>
            My fancy checkbox
        </Checkbox>
    )
}
```

## Render Prop

Render prop (a.k.a child render function) has been removed from PCR 3.x. In practice the render prop approach was error-prone and often lead to error conditions and frustration. If you really require customization of the `.state` div, open an issue on github.
