import * as React from 'react';

import { useIcon } from '../hooks/useIcon';
import { CommonCheckboxRadioProps } from '../types/CommonProps';
import { Pretty } from '../factory/Pretty';
import { isBoolean } from '../factory/utils/utils';
import { useUUID } from '../hooks/useUUID';
import { Group, GroupProps } from './Group';

export type RadioState = boolean | string;
export type RadioProps = CommonCheckboxRadioProps<RadioState>;

export const useRadioState = ({ state: initialState = false }: { state?: RadioState } = {}) => {
    const [state, setState] = React.useState<RadioState>(initialState);

    return {
        state,
        setState,
        onChange: React.useCallback((e: React.ChangeEvent<HTMLInputElement>, args?: RadioState) => {
            const value = args || e.currentTarget.value;
            setState(prev => (isBoolean(prev) ? !prev : value));
        }, []),
        ...useUUID(),
    };
};

export const RadioGroup = (props: GroupProps) => (
    <Group as="fieldset" role="radiogroup" {...props} />
);

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ value: userValue, icon: userIcon, shape = 'round', ...rest }: RadioProps, ref) => {
        const { icon, iconType } = useIcon(userIcon);
        const value = typeof userValue === 'undefined' ? '' : userValue;

        return React.createElement(Pretty, {
            type: 'radio',
            shape,
            icon,
            iconType,
            value,
            ref,
            ...rest,
        });
    }
);

Radio.displayName = 'Radio';
