import * as React from 'react';

import { getClassNames } from './utils';
import { CommonCheckboxRadioProps, SwitchShape } from '../types/CommonProps';
import { createInput, createLabel } from './componentFactory';

type PrettyComponentProps = Omit<CommonCheckboxRadioProps, 'icon' | 'shape'> & {
    as?: string | React.FunctionComponent | React.ComponentClass;
    icon?: React.ReactElement;
    shape?: SwitchShape | CommonCheckboxRadioProps['shape'];
    isSwitch?: boolean;
};

export const PrettyComponent = (props: PrettyComponentProps) => {
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
        isSwitch,
        ...rest
    } = props;

    return React.createElement<any>(
        as,
        {
            className: getClassNames(props),
            'aria-disabled': disabled,
            'aria-checked': state === 'indeterminate' ? 'mixed' : !!state,
            tabIndex: 0,
            onKeyPress: React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
                e.preventDefault();
            }, []),
            onKeyUp: React.useCallback(
                (e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (!disabled && !locked && (e.keyCode === 32 || e.keyCode === 13)) {
                        onChange((e as unknown) as React.ChangeEvent<HTMLInputElement>);
                    }
                },
                [onChange, disabled, locked]
            ),
            role: type,
            ...rest,
        },
        <>
            {createInput(props)}
            {createLabel(props)}
        </>
    );
};
