import * as React from 'react';
import classNames from 'classnames';

import { getChecked } from './utils';
import { CommonCheckboxRadioProps } from '../types/CommonProps';

export const createInput = ({
    onChange,
    disabled,
    value,
    state,
    locked,
    type,
    name,
    checked,
}: CommonCheckboxRadioProps) => {
    return (
        <input
            onChange={onChange}
            type={type}
            value={value}
            name={name}
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

export const createLabel = ({ color, icon, children }: CommonCheckboxRadioProps) => (
    <div
        className={classNames('state', {
            [`p-${color}`]: color,
        })}>
        {icon}
        <label>{children}</label>
    </div>
);
