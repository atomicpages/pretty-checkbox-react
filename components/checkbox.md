# Checkbox

PCR's Checkbox is a simple and small accessible checkbox implementation that's flexible.

## Usage

Checkbox receives props as [controlled inputs](https://reactjs.org/docs/forms.html), such as `checked` and `onChange`. Basic controlled usage can be seen below:

```jsx
import React from 'react'
import { Checkbox } from 'pretty-checkbox-react';

function App() {
    const [checked, setChecked] = React.useState(false);
    const toggle = React.useCallback(() => {
        setChecked(prev => !prev);
        // some other action on change...
    }, []);
    
    return (
        <Checkbox
            checked={checked}
            onChange={toggle}>
            Yes! I want emails!
        </Checkbox>
    )
}
```

### `useCheckboxState`

To make things easier, there's also the `useCheckboxState` hook which takes care of connecting the checkbox and state together.

```jsx
import React from 'react'
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function App() {
    const checkbox = useCheckboxState();
    
    React.useEffect(() => {
        // perform some action whenever state changes
    }, [checkbox.state]);
    
    return (
        <Checkbox {...checkbox}>
            Yes! I want emails!
        </Checkbox>
    )
}
```

### Using `icon`

Using a custom icon instead of the pretty checkbox default is easy. Use the `icon` prop and pass in your own JSX. Supported types are:

* `i`
* `svg`
* `img`

```jsx
import React from 'react'
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function App() {
    const checkbox = useCheckboxState();
    
    return (
        <Checkbox icon={<i className="far fa-check" />} {...checkbox}>
            Yes! I want emails!
        </Checkbox>
    )
}
```

### Specifying `shape`

Use the `shape` prop to control the shape of the checkbox. Supported values are:

* `square` \(default\)
* `round`
* `curve`

```jsx
import React from 'react'
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function App() {
    const checkbox = useCheckboxState();
    
    return (
        <Checkbox {...checkbox} shape="curve">Curved Checkbox</Checkbox>
    );
}
```

### Using `fill`

Adjust the fill mode of Checkbox via the `fill` prop. Supported values are:

* `fill`
* `thick`

```jsx
import React from 'react'
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function App() {
    const checkbox = useCheckboxState();
    
    return (
        <Checkbox {...checkbox} fill="thick">Curved Checkbox</Checkbox>
    );
}
```

### `indeterminate` state

You can programmatically set checkbox value as `indeterminate`. This can best be illustrated by an example on the [reakit docs](https://reakit.io/docs/checkbox/#indeterminate-state).

```jsx
import React from 'react'
import classNames from 'classnames';
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function useTreeState({ values }) {
    // create a state for the root checkbox
    const group = useCheckboxState();
    
    // create a state for each leaf checkbox
    const items = useCheckboxState();
    
    React.useEffect(() => {
        if (group.state === true) {
            // if the group "root" checkbox
            // is true, set state where all
            // items are selected
            items.setState(values);
        } else if (group.state === false) {
            // when the group "root" checkbox is not selected
            // reset all the selected items
            items.setState([]);
        }
    }, [group.state]);

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

function App() {
    const values = ['Apple', 'Orange', 'Watermelon'];
    const { group, items } = useTreeState({ values });

    return (
        <ul>
            <li>
                <Checkbox
                    {...group}
                    icon={
                        <i
                            className={classNames('mdi', {
                                'mdi-minus': group.state === 'indeterminate',
                                'mdi-check': group.state === true,
                            })}
                        />
                    }>
                    Fruits
                </Checkbox>
            </li>
            <ul>
                {values.map((value, i) => (
                    <li key={i}>
                        <Checkbox
                            {...items}
                            icon={<i className="mdi mdi-check" />}
                            value={value}>
                            {value}
                        </Checkbox>
                    </li>
                ))}
            </ul>
        </ul>
    );
}
```

## Props API

### `useCheckboxState`

* `state` - `boolean | any[] | "indeterminate"` - Stores the state of the checkbox. Use an array of multiple checkboxes need to to share the same state value. See the [indeterminate state example](checkbox.md#indeterminate-state) for more info.

### `Checkbox`

| Name | Type | Required | Initial Value | Description |
| :--- | :--- | :--- | :--- | :--- |
| `state` | `boolean | any[] | "indeterminate"` | Yes | \`\` |  |
| `onChange` | `Function` | Yes |  | Change event to call when the checkbox is clicked or a keyboard event is triggered |
|  |  |  |  |  |

