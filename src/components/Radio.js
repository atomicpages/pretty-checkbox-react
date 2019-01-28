// @flow

import React from 'react';
import classNames from 'classnames';
import { getBaseClassName } from '../utils/utils';

import Input, { PREFIX } from './Input';
import type { InputProps } from './Input';

export type RadioProps = {
    ...InputProps,

    /**
     * The name of the radio group.
     */
    name: string
};

function Radio(props: RadioProps) {
    const { className, name, inputProps, ...rest } = props;

    return (
        <Input
            type="radio"
            className={
                classNames(
                    // $ExpectError
                    getBaseClassName(props, PREFIX),
                    className
                )
            }
            inputProps={{ ...inputProps, name: name }}
            {...rest}
        />
    );
}

Radio.defaultProps = { shape: 'round' };

export default Radio;
