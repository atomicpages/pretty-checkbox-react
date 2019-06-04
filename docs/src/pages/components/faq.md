---
title: FAQ
order: 6
---

#### Something is Overriding my styles!
Sometimes things aren't perfect and styles get messed up. Thankfully, we can fix this easily! The easiest way to get around this is to custom build pretty-checkbox `.scss` source files. Once you have that in place we need to make a few tweaks.

```scss
// @import ...

.#{$pretty--class-name}.my-icon {
    @extend .#{$pretty--class-name}.p-icon;
}
```

With the magic of using Sass `@extends` we can essentially "copy" the pretty-checkbox base styles to our own selector. After this, our usage becomes a bit different as well.

```jsx
import { Checkbox } from 'pretty-checkbox-react';

// pass a custom className to Checkbox, Radio, or Switch
<Checkbox className="my-icon"
    icon={<i className="fas fas-question-circle" />}>
    Label
</Checkbox>
```

#### Where is Toggle and State?
For those of you who are familiar with `pretty-checkbox` you might be wondering where toggle and states are. These are intentionally left out of the react API since re-rendering should be controlled by react, not CSS. You can achieve anything you need by tracking checkbox state:

```plain
function PlayPause(props) {
    const [checked, setChecked] = React.useReducer(state => !state, false);

    return (
        <Checkbox
            {...props}
            plain
            icon={<i className={`mdi mdi-${checked ? 'pause' : 'play-arrow'}`} />}
            color={!checked ? 'warn' : null}
            onChange={setChecked}>
            {checked ? 'Paused' : 'Playing...'}
        </Checkbox>
    )
}
```
