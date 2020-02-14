# Checkbox

PCR's Checkbox is a simple and small accessible checkbox implementation that's flexible.

### Usage

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

#### `useCheckboxState`

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

### Using icons

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

### Specifying shape

Use the `shape` prop to control the shape of the checkbox. Supported values are:

* `square`
* `round`
* `curve`

### `indeterminate` state

You can programmatically set checkbox value as `indeterminate`:

```jsx
import React from 'react'
import classNames from 'classnames';
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';

function useTreeState({ values }) {
    const group = useCheckboxState();
    const items = useCheckboxState();
    
    React.useEffect(() => {
        if (group.state === true) {
            items.setState(values);
        } else if (group.state === false) {
            items.setState([]);
        }
    }, [group.state]);

    React.useEffect(() => {
       if (items.state.length === values.length) {
            group.setState(true);
        } else if ((items.state as string[]).length) {
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



