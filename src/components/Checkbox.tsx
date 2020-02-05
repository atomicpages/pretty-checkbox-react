import * as React from 'react';

import { useIcon } from '../hooks/useIcon';
import { CommonCheckboxRadioProps } from '../types/CommonProps';
import { PrettyComponent } from '../factory/PrettyComponent';

export type CheckboxState = boolean | any[] | 'indeterminate';

export type CheckboxProps = Omit<CommonCheckboxRadioProps<CheckboxState>, 'type'> & {
    type?: 'checkbox';
};

export const useCheckboxState = ({
    initialState = false,
}: { initialState?: CheckboxState } = {}) => {
    const [state, setState] = React.useState<CheckboxState>(initialState);

    return {
        state,
        setState,
        onChange: React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value;

            setState(state => {
                if (Array.isArray(state)) {
                    const index = state.indexOf(value);

                    if (index === -1) {
                        state.push(value);
                    } else {
                        state.splice(index, 1);
                    }

                    return state.slice();
                }

                return !state;
            });
        }, []),
    };
};

export const Checkbox: React.FC<CheckboxProps> = ({
    value: userValue,
    icon: userIcon,
    ...rest
}: CheckboxProps) => {
    const { icon, iconType } = useIcon(userIcon);
    const value = typeof userValue === 'undefined' ? '' : userValue;

    return React.createElement(PrettyComponent, {
        type: 'checkbox',
        icon,
        iconType,
        value,
        ...rest,
    });
};

Checkbox.displayName = 'Checkbox';
