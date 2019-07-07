// @flow

// https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox

import * as React from 'react';
import classNames from 'classnames';
import { warn, mergeRefs, isValidIconType, error, removeIndexFromArray, isBoolean, isChecked } from '../../utils/utils';

import { Icon } from '../Icon/Icon';
import { BaseInput } from '../BaseInput/BaseInput';

import {
    type PCRColors,
    type PCRColorsOutline,
    type RadioCheckboxVariants,
    type RadioCheckboxFillModes,
    type RadioCheckboxAnimations,
    type IconPropType,
} from '../../types';

export type CheckboxState = boolean | 'indeterminate' | any[];

export type CheckboxProps = {
    /**
     * Specify one of the colors.
     */
    color?: PCRColors | PCRColorsOutline,

    /**
     * Specify one of the variants.
     */
    variant?: RadioCheckboxVariants,

    /**
     * Specify one of the fill modes.
     */
    fill?: RadioCheckboxFillModes,

    /**
     * Specify one of the animations.
     */
    animation?: RadioCheckboxAnimations,

    /**
     * Controlled mode checkbox.
     */
    checked?: boolean,

    /**
     * Pass an icon to render.
     */
    icon?: IconPropType,

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
     * The `state` prop from` useCheckboxState`.
     */
    state?: CheckboxState,

    /**
     * The `setState` dispatcher from `useCheckboxState`.
     */
    setState?: (state: CheckboxState) => void,

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
     * <Checkbox>
     *     {({ color, icon }) => (
     *         <div className="state my-custom-class-name">
     *             {icon}
     *             <label>Something super special</label>
     *         </div>
     *     )}
     * </Checkbox>
     */
    children: React.Node | ((...props: Object) => React.Node),
};

export const useCheckboxState = (initialState: CheckboxState | (() => CheckboxState) = false) => {
    const [state, setState] = React.useState<CheckboxState>(initialState);

    return { state, setState };
};

/**
 * You probably shouldn't be using this ;)
 */
export const __handleCheckboxChange = ({
    setState,
    state,
    value,
    bool,
}: {
    setState: (state: CheckboxState) => void,
    state?: CheckboxState | string,
    value?: string,
    bool: boolean,
}) => {
    if (bool) {
        setState(!state);
    } else {
        const array = Array.isArray(state) ? state : [];
        const index = array.indexOf(value);

        if (index === -1) {
            setState([...array, value]);
        } else {
            setState([...removeIndexFromArray(array, index)]);
        }
    }
};

export const Checkbox = React.forwardRef<CheckboxProps, HTMLInputElement>(
    (
        {
            color,
            variant,
            fill,
            animation,
            checked: checkedProp,
            onChange,
            disabled,
            locked,
            children,
            className,
            icon = { type: null, icon: null },
            value,
            state,
            setState,
            ...htmlProps
        },
        ref
    ) => {
        const bool = isBoolean(value);
        const checked = isChecked(checkedProp, state, value);

        const checkboxRef = React.useRef(mergeRefs(ref, React.createRef()));

        const handleChange = React.useCallback(
            (e: SyntheticMouseEvent<HTMLInputElement>) => {
                if (disabled || locked) {
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

                __handleCheckboxChange({ setState, state, value, bool });
            },
            [setState, state, disabled, locked, onChange]
        );

        React.useEffect(() => {
            if (!checkboxRef.current && state === 'indeterminate') {
                warn(
                    'Checkbox',
                    "Can't set indeterminate state because `ref` wasn't passed to component."
                );

                return;
            }

            if (checkboxRef.current) {
                if (state === 'indeterminate') {
                    // $FlowFixMe
                    checkboxRef.current.indeterminate = true;
                    // $FlowFixMe
                } else if (checkboxRef.current.indeterminate) {
                    // $FlowFixMe
                    checkboxRef.current.indeterminate = false;
                }
            }
        }, [state]);

        return (
            <BaseInput
                // expected props
                type="checkbox"
                role="checkbox"
                icon={icon}
                color={color}
                locked={locked}
                ref={checkboxRef.current}
                // htmlProps
                disabled={disabled}
                aria-checked={state === 'indeterminate' ? 'mixed' : checked}
                aria-disabled={disabled || locked}
                // $FlowFixMe
                onChange={handleChange}
                checked={checked}
                value={value}
                tabIndex="0"
                className={classNames(
                    {
                        'p-default': !icon.type && (!animation || animation === 'smooth'),
                        [variant ? `p-${variant}`: '']: variant,
                        [animation ? `p-${animation}` : '']: animation,
                        [icon.type ? `p-${icon.type}` : '']: icon.type,
                        [fill ? `p-${fill}`: '']: fill,
                    },
                    className
                )}>
                {children}
            </BaseInput>
        );
    }
);

Checkbox.displayName = 'Checkbox';
