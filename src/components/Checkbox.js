// @flow

import React from 'react';
import classNames from 'classnames';

import Input, { PREFIX } from './Input';
import type { InputProps } from './Input';

type CheckboxProps = {
    ...InputProps,

    /**
     * Set true when the checkbox is in an indeterminate state.
     */
    indeterminate?: boolean
};

const getBaseClassName = ({ animation, icon, image, svg }: CheckboxProps) => {
    let base = `${PREFIX}default`;

    if (icon) {
        base = `${PREFIX}icon`;
    } else if (svg) {
        base = `${PREFIX}svg`;
    } else if (image) {
        base = `${PREFIX}image`;
    }

    if (animation) {
        base += PREFIX + animation;
    }

    return base;
};

function Checkbox(props: CheckboxProps) {
    const { animation, icon, image, svg } = props;

    if (animation && animation !== 'smooth' && (!icon || !image || !svg)) {
        throw new Error(`${animation} is incompatible with default checkbox styles. You must specify an icon, image, or a svg.`);
    }

    return <Input className={classNames(
        getBaseClassName(props),
        props.indeterminate ? 'p-has-indeterminate' : null
    )} type="checkbox" {...props} />;
}

export default Checkbox;
