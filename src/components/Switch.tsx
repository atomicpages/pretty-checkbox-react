import * as React from 'react';

import { CommonControlledProps, SwitchShape } from '../types/CommonProps';
import { Pretty } from '../factory/Pretty';
import { useCheckboxState, CheckboxState } from './Checkbox';
import { useRadioState, RadioState } from './Radio';

export type SwitchState = CheckboxState | RadioState;
export type SwitchProps = CommonControlledProps<SwitchState> & {
    shape?: SwitchShape;
};

export const useSwitchState = ({
    type = 'checkbox',
    state: initialState = false,
}: {
    type?: CommonControlledProps<SwitchState>['type'];
    state?: any;
} = {}) => {
    // TODO: might be an issue if the baseId changes if folks change from checkbox > radio
    const checkbox = useCheckboxState(initialState);
    const radio = useRadioState(initialState);

    return Object.assign({ type }, type === 'checkbox' ? checkbox : radio);
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ value: userValue, ...rest }: SwitchProps, ref) => {
        const value = typeof userValue === 'undefined' ? '' : userValue;

        return React.createElement(Pretty, {
            type: 'checkbox',
            isSwitch: true,
            value,
            ref,
            ...rest,
        });
    }
);

Switch.displayName = 'Switch';
