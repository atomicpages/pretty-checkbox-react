import * as React from 'react';
import { BaseProps } from '../../types/BaseProps';
import classNames from 'classnames';
import { isDefaultStyle } from '../../utils/utils';
import { useMemoizedIcon } from '../../hooks/useMemoizedIcon';

export interface BaseInputProps extends BaseProps<any> {
    /**
     * Specify the type of input control.
     */
    type?: 'radio' | 'checkbox';
}

export const BaseInput = React.forwardRef(
    (
        {
            state,
            setState,
            color,
            variant,
            value,
            fill,
            animation,
            disabled,
            locked,
            className,
            children,
            onChange,
            icon,
            bigger,
            type = 'checkbox',
            ...rest
        }: BaseInputProps,
        htmlRef: React.Ref<HTMLInputElement>
    ) => {
        const [iconType, memoizedIcon] = useMemoizedIcon(icon);

        const isDefault = React.useMemo(() => {
            return isDefaultStyle({
                icon,
                animation,
                isSwitch: !!(className && className.includes('p-switch')),
            });
        }, [icon, animation, className]);

        return (
            <div
                className={classNames(
                    'pretty',
                    {
                        'p-locked': locked,
                        [`p-${variant}`]: variant,
                        [`p-${fill}`]: fill,
                        [`p-${iconType.current}`]: iconType.current,
                        [`p-${animation}`]: animation,
                        'p-bigger': bigger,
                        'p-default': isDefault,
                    },
                    className
                )}>
                {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props*/}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    role={type}
                    aria-checked={!!state}
                    name={name}
                    checked={!!state}
                    aria-disabled={disabled || locked}
                    ref={htmlRef}
                    disabled={disabled}
                    tabIndex={0}
                    {...rest}
                />
                <div className={classNames('state', { [color ? `p-${color}` : '']: color })}>
                    {memoizedIcon}
                    <label>{children}</label>
                </div>
            </div>
        );
    }
);

BaseInput.displayName = 'BaseInput';
