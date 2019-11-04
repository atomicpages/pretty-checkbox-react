import * as React from 'react';
import { useCheckboxState, Checkbox } from '../../src';
import classNames from 'classnames';

function useTreeState({ values }) {
    const group = useCheckboxState();
    const items = useCheckboxState([]);

    // updates items when group is toggled
    React.useEffect(() => {
        if (group.state === true) {
            items.setState(values);
        } else if (group.state === false) {
            items.setState([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items.state]);

    return { group, items };
}

export function TreeCheckbox() {
    const values = ['Apple', 'Orange', 'Watermelon'];
    const { group, items } = useTreeState({ values });

    return (
        <ul>
            <li>
                <Checkbox
                    {...group}
                    icon={
                        <i
                            className={classNames({
                                mdi: group.state,
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
                        <Checkbox {...items} value={value} icon={<i className="mdi mdi-check" />}>
                            {value}
                        </Checkbox>
                    </li>
                ))}
            </ul>
        </ul>
    );
}
