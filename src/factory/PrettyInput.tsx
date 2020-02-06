import * as React from 'react';

import { getChecked } from './utils';
import { CommonCheckboxRadioProps } from '../types/CommonProps';

export type PrettyInputProps = Pick<
    CommonCheckboxRadioProps,
    'onChange' | 'disabled' | 'value' | 'state' | 'locked' | 'type' | 'name' | 'checked' | 'baseId'
>;

export const PrettyInput: React.FC<PrettyInputProps> = ({
    onChange,
    disabled,
    value,
    state,
    locked,
    type,
    name,
    checked,
    baseId,
}: PrettyInputProps) => {
    return (
        <input
            onChange={onChange}
            type={type}
            value={value}
            name={name}
            id={baseId}
            tabIndex={-1}
            checked={
                typeof checked === 'undefined'
                    ? getChecked({ state, value, disabled, locked, type })
                    : checked
            }
            disabled={disabled}
        />
    );
};

PrettyInput.displayName = 'Pretty.Input';
