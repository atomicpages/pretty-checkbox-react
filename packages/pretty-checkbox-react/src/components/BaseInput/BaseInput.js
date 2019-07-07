// @flow

import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

import {
    type PCRColors,
    type PCRColorsOutline,
    type RadioCheckboxAnimations,
    type IconPropType,
} from '../../types';

type ChangeType = { currentTarget: ?HTMLElement } | SyntheticMouseEvent<HTMLInputElement>;

export type BaseProps = {
    className: string,
    type: string,
    role: string,
    checked?: any,
    locked?: boolean,
    color?: PCRColors | PCRColorsOutline,
    icon?: IconPropType,
    tabIndex: string,
    children?: React.Node | ((...props: Object) => React.Node),
    onChange: (e: ChangeType) => ?boolean,
};

const ENTER = 13;
const SPACE = 32;

export const BaseInput = React.forwardRef<BaseProps, HTMLInputElement>(
    (
        { className, type, role, locked, color, icon, children, tabIndex, onChange, ...htmlProps },
        ref
    ) => {
        const spaceKeyPressed = React.useRef();

        const handleKeyDown = React.useCallback((e: SyntheticKeyboardEvent<HTMLDivElement>) => {
            spaceKeyPressed.current = e.keyCode === SPACE;

            if (spaceKeyPressed.current) {
                e.preventDefault();
            }
        }, []);

        const handleKeyUp = React.useCallback(
            (e: SyntheticKeyboardEvent<HTMLDivElement>) => {
                if (spaceKeyPressed.current) {
                    spaceKeyPressed.current = false;
                    onChange({ currentTarget: e.currentTarget.querySelector('input') });
                }
            },
            [onChange]
        );

        return (
            <div
                className={classNames('pretty', { 'p-locked': locked }, className)}
                tabIndex={tabIndex}
                role={role}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}>
                <input type={type} ref={ref} tabIndex="-1" onChange={onChange} {...htmlProps} />
                {typeof children === 'function' ? (
                    children({ color, icon })
                ) : (
                    <div className={classNames('state', { [color ? `p-${color}` : '']: color })}>
                        <Icon {...icon} />
                        <label>{children}</label>
                    </div>
                )}
            </div>
        );
    }
);

BaseInput.displayName = 'PCR.Base';
