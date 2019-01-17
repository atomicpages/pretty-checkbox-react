// @flow

import React from 'react';
import classNames from 'classnames';

import Input, { PREFIX } from './Input';
import type { InputProps } from './Input';

export type SwitchProps = {
    ...InputProps,

    /**
     * Specify animation for the `Switch` component.
     */
    animation?: "smooth" | "jelly" | "tada",

    /**
     * The shape of the `Switch` component.
     */
    shape?: "outline" | "fill" | "slim",

    /**
     * Provide a name when `type` is `radio`.
     */
    name?: string
};

function Switch(props: SwitchProps) {
    const { type, shape, className, name, inputProps, ...rest } = props;

    if (!shape && shape !== 'outline'  && shape !== 'fill' && shape !== 'slim') {
        throw new Error('Shape can be one of the following: outline, fill, or slim');
    }

    if (!type) {
        throw new Error('type is required to be set');
    }

    if (rest.animation && rest.animation !== 'smooth' && rest.animation !== 'jelly' && rest.animation !== 'tada') {
        throw new Error('Switch animations can be one of the following: smooth, jelly, or tada');
    }

    return (
        <Input className={classNames(`${PREFIX}switch`, className)}
            type={type}
            shape={shape}
            inputProps={{ ...inputProps, name: name }}
            {...rest} />
    );
}

Switch.defaultProps = {
    shape: 'outline',
    type: 'checkbox'
};

export default Switch;
