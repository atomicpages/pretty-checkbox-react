import * as React from 'react';
import { useCheckboxState } from '../../../src';

export const useTreeState = ({ values }) => {
    const group = useCheckboxState();
    const items = useCheckboxState({ state: [] });

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
        if ((items.state as string[]).length === values.length) {
            group.setState(true);
        } else if ((items.state as string[]).length) {
            group.setState('indeterminate');
        } else {
            group.setState(false);
        }
    }, [items.state]);

    return { group, items };
};
