import * as React from 'react';

import { CommonProps, SwitchShape } from '../types/CommonProps';
import { createPrettyComponent } from '../factory/createPrettyComponent';
import { useCheckboxState, CheckboxState } from './Checkbox';
import { useRadioState, RadioState } from './Radio';

export type SwitchState = CheckboxState | RadioState;
export type SwitchProps = CommonProps<SwitchState> & {
    shape?: SwitchShape;
};

export const useSwitchState = ({
    type = 'checkbox',
    initialState = false,
}: {
    type?: CommonProps<SwitchState>['type'];
    initialState?: any;
} = {}) => {
    const checkbox = useCheckboxState(initialState);
    const radio = useRadioState(initialState);

    return Object.assign({ type }, type === 'checkbox' ? checkbox : radio);
};

export const Switch: React.FC<SwitchProps> = ({ value: userValue, ...rest }: SwitchProps) => {
    const value = typeof userValue === 'undefined' ? '' : userValue;

    return createPrettyComponent({
        type: 'checkbox',
        isSwitch: true,
        value,
        ...rest,
    });
};

Switch.displayName = 'Switch';
