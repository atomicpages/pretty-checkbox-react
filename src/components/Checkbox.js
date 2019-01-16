// @flow

import React from 'react';

import Input from './Input';
import type { InputProps } from './Input';

function Checkbox(props: InputProps) {
    return <Input type="checkbox" {...props} />;
}

export default Checkbox;
