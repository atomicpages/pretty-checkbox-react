import * as React from 'react';

import { useIcon } from '../hooks/useIcon';
import { CommonCheckboxRadioProps } from '../types/CommonProps';
import { createPrettyComponent } from '../factory/createPrettyComponent';
import { isBoolean } from '../factory/utils';

export type RadioState = boolean | string;
export type RadioProps = CommonCheckboxRadioProps<RadioState>;

export const useRadioState = ({ initialState = false }: { initialState?: RadioState } = {}) => {
    const [state, setState] = React.useState<RadioState>(initialState);

    return {
        state,
        setState,
        onChange: React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value;
            setState(prev => (isBoolean(prev) ? !prev : value));
        }, []),
    };
};

export const Radio: React.FC<RadioProps> = ({
    value: userValue,
    icon: userIcon,
    shape = 'round',
    ...rest
}: RadioProps) => {
    const { icon, iconType } = useIcon(userIcon);
    const value = typeof userValue === 'undefined' ? '' : userValue;

    return createPrettyComponent({
        type: 'radio',
        shape,
        icon,
        iconType,
        value,
        ...rest,
    });
};

Radio.displayName = 'Radio';
