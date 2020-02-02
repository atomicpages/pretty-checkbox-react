import * as React from 'react';
import classNames from 'classnames';

import { getClassNames, getChecked } from './utils';
import { CommonCheckboxRadioProps, SwitchShape } from '../types/CommonProps';

const createInput = ({
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
            checked={
                typeof checked === 'undefined'
                    ? getChecked({ state, value, disabled, locked, type })
                    : checked
            }
            disabled={disabled}
        />
    );
};

const createLabel = ({ color, icon, children }: CommonCheckboxRadioProps) => (
    <div
        className={classNames('state', {
            [`p-${color}`]: color,
        })}>
        {icon}
        <label>{children}</label>
    </div>
);

export const createPrettyComponent = (
    props: Omit<CommonCheckboxRadioProps, 'icon' | 'shape'> & {
        as?: string | React.FunctionComponent | React.ComponentClass;
        icon?: React.ReactElement;
        shape?: SwitchShape | CommonCheckboxRadioProps['shape'];
        isSwitch?: boolean;
    }
) => {
    const {
        as = 'div',
        iconType,
        type,
        children,
        animation,
        icon,
        bigger,
        plain,
        shape,
        fill,
        className,
        setState,
        state,
        locked,
        disabled,
        onChange,
        checked,
        value,
        color,
        name,
        ...rest
    } = props;

    return React.createElement<any>(
        as,
        {
            className: getClassNames(props),
            'aria-disabled': disabled,
            'aria-checked': state === 'indeterminate' ? 'mixed' : !!state,
            role: type,
            ...rest,
        },
        <>
            {createInput(props)}
            {createLabel(props)}
        </>
    );
};
