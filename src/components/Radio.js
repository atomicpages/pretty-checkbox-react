// @flow

import React from 'react';
import classNames from 'classnames';

import Input, { PREFIX } from './Input';
import type { InputProps } from './Input';

type RadioProps = {
    ...InputProps,

    /**
     * The name of the radio group.
     */
    name: string
};

const getBaseClassName = ({ icon, image, svg }: RadioProps) => {
    let base = `${PREFIX}default`;

    if (icon) {
        base = `${PREFIX}icon`;
    } else if (svg) {
        base = `${PREFIX}svg`;
    } else if (image) {
        base = `${PREFIX}image`;
    }

    return base;
};

function Radio(props: RadioProps) {
    const { className, name, inputProps, ...rest } = props;

    return (
        <Input
            type="radio"
            className={classNames(getBaseClassName(props), className)}
            inputProps={{ ...inputProps, name: name }}
            {...rest}
        />
    );
}

Radio.defaultProps = { shape: 'round' };

export default Radio;
