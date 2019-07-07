// @flow

import * as React from 'react';
import classNames from 'classnames';
import { BaseInput } from '../BaseInput/BaseInput';

import { type PCRColors, type PCRColorsOutline, type SwitchFillModes } from '../../types';
import { mergeRefs, isChecked, isBoolean } from '../../utils/utils';
import { __handleCheckboxChange } from '../Checkbox/Checkbox';

export type SwitchState = boolean | string | any[];

export type SwitchProps = {
    /**
     * The type of the Switch.
     */
    type?: 'radio' | 'checkbox',

    /**
     * Specify one of the colors.
     */
    color?: PCRColors | PCRColorsOutline,

    /**
     * Specify one of the fill modes.
     */
    fill?: SwitchFillModes,

    /**
     * Controlled mode checkbox.
     */
    checked?: boolean,

    /**
     * Runs inside the default onChange handler for the Checkbox.
     *
     * Optionally return `false` from a synchronous action to prevent the
     * checkbox from being un/checked.
     */
    onChange?: (e: SyntheticMouseEvent<HTMLInputElement>) => ?boolean,

    /**
     * Set the checkbox as disabled.
     */
    disabled?: boolean,

    /**
     * Set the checkbox as locked. This will also set the
     * `aria-disabled` attribute to `true`.
     */
    locked?: boolean,

    /**
     * Pass additional class names to the `.pretty` div.
     */
    className?: string,

    /**
     * The `state` prop from` useSwitchState`.
     */
    state?: SwitchState,

    /**
     * The `setState` dispatcher from `useSwitchState`.
     */
    setState?: (state: SwitchState) => void,

    /**
     * Stub...
     */
    value?: string,

    /**
     * Additional HTML attributes to pass to the `input` element.
     * TODO: fix flow type after https://github.com/facebook/flow/pull/7569 🙄
     */
    htmlProps?: Object,

    /**
     * Text to show inside the label _or_ a render function
     * that allows you to render the internal pretty-checkbox
     * `.state` div.
     *
     * @example
     * <Switch>
     *     {({ color, icon }) => (
     *         <div className="state my-custom-class-name">
     *             {icon}
     *             <label>Something super special</label>
     *         </div>
     *     )}
     * </Switch>
     */
    children: React.Node | ((...props: Object) => React.Node),
};

export const useSwitchState = (initialState: SwitchState | (() => SwitchState) = false) => {
    const [state, setState] = React.useState<SwitchState>(initialState);

    return { state, setState };
};

export const Switch = React.forwardRef<SwitchProps, HTMLInputElement>(({
    type = 'checkbox',
    color,
    fill,
    checked: checkedProp,
    onChange,
    disabled,
    locked,
    children,
    className,
    value,
    state,
    setState,
    ...htmlProps
}, ref) => {
    const bool = isBoolean(value);
    const checked = isChecked(checkedProp, state, value);

    const switchRef = React.useRef(mergeRefs(ref, React.createRef()));

    const handleChange = React.useCallback(
        (e: SyntheticMouseEvent<HTMLInputElement>) => {
            if (disabled || locked) {
                e.preventDefault();
                return;
            }

            if (typeof onChange === 'function') {
                if (onChange(e) === false) {
                    return;
                }
            }

            if (typeof setState !== 'function') {
                return;
            }

            if (type === 'radio') {
                setState(bool ? !state : e.currentTarget.value);
            } else {
                __handleCheckboxChange({ setState, state, value, bool });
            }
        },
        [setState, state, disabled, locked, onChange]
    );

    return (
        <BaseInput
            type={type}
            role={type}
            locked={locked}
            className={classNames(
                'p-switch',
                {
                    [fill ? `p-${fill}` : '']: fill,
                },
                className
            )}
            disabled={disabled}
            aria-checked={!!checked}
            aria-disabled={disabled || locked}
            // $FlowFixMe
            onChange={handleChange}
            checked={checked || (state && state === value)}
            value={value}
            tabIndex="0"
            ref={switchRef}
            {...htmlProps}>
            {children}
        </BaseInput>
    );
});
