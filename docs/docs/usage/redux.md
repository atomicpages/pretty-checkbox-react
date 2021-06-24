---
id: redux
title: Redux
---

In lieu of using custom hooks, you should control state yourself when integrating with external
state systems like redux, flux, etc.

<!-- prettier-ignore -->
:::caution
Rarely is there a benefit to using local component state with redux.
Generally speaking we should avoid this as much as possible and control
PCR components using state providers rather than `useCheckboxState` and friends.
:::

Here's a quick example of using redux with PCR:

```tsx
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const accepted = useSelector(state => state.accepted);
    const dispatch = useDispatch();

    const onChange = React.useCallback(e => {
        dispatch({ type: 'tac', actions: { accepted: e.currentTarget.checked } });
    }, []);

    return (
        <Checkbox onChange={onChange} checked={accepted}>
            Accept terms and conditions?
        </Checkbox>
    );
}
```
