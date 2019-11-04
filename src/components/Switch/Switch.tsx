import * as React from 'react';
import classNames from 'classnames';

import { BaseProps } from '../../typings/BaseProps';
import { BaseInput } from '../BaseInput/BaseInput';

import { useGenericChange, ChangeArgs } from '../../hooks/useGenericChange';
import { SwitchFillModes, SwitchAnimations } from '../../typings/types';
import { getChecked } from '../../utils/utils';
import { useGenericState } from '../../hooks/useGenericState';

export type SwitchState = boolean | string | any[] | undefined;

export type SwitchProps = BaseProps<SwitchState> & {
    /**
     * The name of the input field.
     */
    name?: string;

    /**
     * The type of Switch control. Can be a checkbox
     * or a radio.
     */
    type?: 'checkbox' | 'radio';

    /**
     * Specify one of the variants.
     */
    variant?: undefined;

    /**
     * Specify one of the fill modes.
     */
    fill?: SwitchFillModes;

    /**
     * Specify one of the animations.
     */
    animation?: SwitchAnimations;
};

export const useSwitchState = (initialState: SwitchState = false) =>
    useGenericState<SwitchState>(initialState);

const handleChange = ({ value, setState }: ChangeArgs<SwitchState>) => {
    if (typeof value === 'string') {
        setState(value);
    }
};

export const Switch = React.forwardRef(
    (
        {
            state,
            setState,
            value,
            disabled,
            locked,
            onChange,
            className,
            type = 'checkbox',
            ...props
        }: SwitchProps,
        htmlRef: React.Ref<HTMLInputElement>
    ) => {
        const defaultOnChange = useGenericChange<SwitchState>({
            setState,
            value,
            disabled,
            locked,
            onChange: handleChange,
        });

        const checked = React.useMemo(() => {
            if (typeof value === 'string') {
                return value === state;
            }

            return getChecked<SwitchState>({ value, state, setState });
        }, [value, state, setState]);

        return (
            <BaseInput
                type={type}
                state={checked}
                setState={setState}
                value={value}
                disabled={disabled}
                locked={locked}
                onChange={onChange || defaultOnChange}
                className={classNames('p-switch', className)}
                ref={htmlRef}
                {...props}
            />
        );
    }
);

Switch.displayName = 'Switch';
