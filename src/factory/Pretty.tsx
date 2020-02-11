import * as React from 'react';

import { getClassNames } from './utils';
import { CommonCheckboxRadioProps, SwitchShape } from '../types/CommonProps';
import { PrettyInput } from './PrettyInput';
import { PrettyLabel } from './PrettyLabel';

type PrettyProps = Omit<CommonCheckboxRadioProps, 'icon' | 'shape'> & {
    as?: string | React.FunctionComponent | React.ComponentClass;
    icon?: React.ReactElement;
    shape?: SwitchShape | CommonCheckboxRadioProps['shape'];
    isSwitch?: boolean;
};

export const Pretty = React.forwardRef<HTMLDivElement, PrettyProps>((props: PrettyProps, ref) => {
    const {
        as = 'div',
        iconType,
        type,
        children,
        animation,
        bigger,
        plain,
        shape,
        fill,
        color,
        icon,
        className,
        locked,
        disabled,
        setState,
        state,
        onChange,
        checked,
        value,
        name,
        isSwitch,
        baseId,
        ...rest
    } = props;

    const inputProps = { onChange, disabled, value, state, locked, type, name, checked, baseId };
    const labelProps = { color, icon, children, baseId };

    return React.createElement<any>(
        as,
        {
            className: getClassNames(props),
            'aria-disabled': disabled,
            'aria-checked': state === 'indeterminate' ? 'mixed' : !!state,
            tabIndex: 0,
            onKeyPress: React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
                /* istanbul ignore next */
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
            ref,
            ...rest,
        },
        <>
            <PrettyInput {...inputProps} />
            <PrettyLabel {...labelProps} />
        </>
    );
});

Pretty.displayName = 'Pretty';
