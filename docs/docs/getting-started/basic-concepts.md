---
id: basic-concepts
title: Basic Concepts
sidebar_label: Basic Concepts
---

Pretty Checkbox React (PCR) is a tiny implementation of a `radio`, `checkbox`, and mobile-like switch control _powered by_ [Pretty Checkbox](https://pretty-checkbox.netlify.app/). PCR is minimal component library which provides a flexible API around pretty checkbox, including:

-   Hooks to help manage state
-   Easy checkbox indeterminate support
-   Works with managed-state form solutions (e.g. `formik`)
-   Works with uncontrolled form solutions (e.g. `react-hook-form`)
-   and more...

All the things you know and love about pretty checkbox are supported with a rich, intuitive react-first API.

## Components

PCR exposes three components:

-   `Checkbox`
-   `Radio`
-   `Switch`

any by themselves, the components are completely _stateless_ and just render regular old HTML.

```jsx live
function App() {
    return (
        <>
            <Checkbox>Click me!</Checkbox>
            <Radio>Select me!</Radio>
            <Switch>Toggle me!</Switch>
        </>
    );
}
```

## Accessibility

PCR is not another soft-control that is bloated with internal states, accessibility gaps, and missing functionality. Pretty checkbox styles **real** HTML `input` elements through CSS magic and as a result is 90% there with accessibility. Pretty checkbox, and by extension regular old HTML, doesn't give us everything for free. PCR fills in these gaps by:

-   Linking `label` and `input` fields using generated UUIDs
-   Using the correct ARIA `role` for `Switch`
-   Using the necessary `aria-*` attributes when necessary (e.g. indeterminate checkbox)

The main goal of PCR is to provide the essentials without restricting you from adding additional props or even overriding generated props with your own stuff :wink:. The philosophy of this project is to leverage all the good stuff browsers do for us out-of-the box should be utilized instead of the library handling things like roving and keyboard interaction.

## Prop Forwarding

Libraries _should be flexible_. It brings me a whole lot of joy to see that my random HTML props are passes to the component I expect. PCR passes _all_ HTML props to the underlying `input` element to allow you to build wickedly awesome apps.

### `className` merging

PCR handles pretty checkbox `className` for you via the Prop API, but that doesn't mean you shouldn't be able to use your own `className` values. Those are happily merged for you:

```jsx
<Checkbox className="my-awesome-name">Awe yis</Checkbox>
```

### `id` Override

Don't want to use the super awesome UUID generator? No biggie. Use your own :+1:

```jsx
<Checkbox id="my-unique-name">Here's my ID, officer</Checkbox>
```

### HTML Input Attributes

Need to make the checkbox `required` using regular old HTML? No biggie 💁‍♀️

```jsx live
function App() {
    return (
        <form className="form">
            <div className="form__group">
                <label htmlFor="name">Name:</label>{' '}
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form__group">
                <label htmlFor="email">Email:</label>{' '}
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form__group">
                <Checkbox required>I have read the terms &amp; conditions</Checkbox>
            </div>
            <div className="form__group">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
```

### Everything Else

Custom `data-*` attribute or something else? PCR has your back :sunglasses:

```jsx
<Radio data-testid="tlr">@testing-library/react ready</Radio>
```
