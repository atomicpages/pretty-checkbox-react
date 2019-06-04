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
    name: string,
};

const Radio = React.forwardRef<RadioProps, HTMLInputElement>((props, ref) => {
    const { className, name, inputProps, shape = 'round', ...rest } = props;

    return (
        <Input
            type="radio"
            className={classNames(
                // $ExpectError
                getBaseClassName(props, PREFIX),
                className
            )}
            inputProps={{ ...inputProps, name: name }}
            shape={shape}
            ref={ref}
            {...rest}
        />
    );
});

Radio.displayName = 'Radio';

export default Radio;
