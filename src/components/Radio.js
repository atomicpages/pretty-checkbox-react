// @flow

import React from 'react';
import classNames from 'classnames';

import Input from './Input';
import type { InputProps } from './Input';

const getDefaultSelector = ({ className }): string | null => {
    if (!className || (className && className.indexOf('p-switch') === -1)) {
        return 'p-round';
    }

    return null;
};

function Radio(props: InputProps) {
    const { className, ...rest } = props;

    return (
        <Input
            type="radio"
            className={classNames(getDefaultSelector(props), className)}
            {...rest}
        />
    );
}

export default Radio;
