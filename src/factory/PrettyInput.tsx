import * as React from 'react';

import { getChecked } from './utils/utils';
import { CommonCheckboxRadioProps } from '../types/CommonProps';

export type PrettyInputProps = Pick<
    CommonCheckboxRadioProps,
    | 'onChange'
    | 'disabled'
    | 'value'
    | 'state'
    | 'locked'
    | 'type'
    | 'name'
    | 'checked'
    | 'baseId'
    | 'defaultChecked'
    | 'defaultValue'
>;

export const PrettyInput = React.forwardRef<HTMLInputElement, PrettyInputProps>(
    (
        {
            onChange,
            disabled,
            value,
            state,
            locked,
            type,
            name,
            checked,
            defaultChecked,
            defaultValue,
            baseId,
        }: PrettyInputProps,
        ref
    ) => {
        return (
            <input
                onChange={onChange}
                type={type}
                value={value}
                name={name}
                id={baseId}
                tabIndex={-1}
                ref={ref}
                defaultChecked={defaultChecked}
                defaultValue={defaultValue}
                checked={
                    typeof checked === 'undefined'
                        ? getChecked({ state, value, disabled, locked, type })
                        : checked
                }
                disabled={disabled}
            />
        );
    }
);

PrettyInput.displayName = 'Pretty.Input';
