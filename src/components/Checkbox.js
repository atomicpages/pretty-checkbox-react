// @flow

import React from 'react';
import classNames from 'classnames';
import { getBaseClassName } from '../utils/utils';

import Input, { PREFIX } from './Input';
import type { InputProps } from './Input';

export type CheckboxProps = {
    ...InputProps,

    /**
     * Set true when the checkbox is in an indeterminate state.
     */
    indeterminate?: boolean,
};

function Checkbox(props: CheckboxProps) {
    const { animation, className, ...rest } = props;

    if (
        animation &&
        animation !== 'smooth' &&
        animation !== 'pulse' &&
        !props.icon &&
        !props.image &&
        !props.svg
    ) {
        throw new Error(
            `animation '${animation}' is incompatible with default checkbox styles. You must specify an icon, image, or a svg.`
        );
    }

    return (
        <Input
            type="checkbox"
            className={classNames(
                // $ExpectError
                getBaseClassName(props, PREFIX),
                props.indeterminate ? 'p-has-indeterminate' : null,
                className
            )}
            animation={animation}
            {...rest}
        />
    );
}

export default Checkbox;
