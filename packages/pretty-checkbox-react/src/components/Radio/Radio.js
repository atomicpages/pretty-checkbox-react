// @flow

import * as React from 'react';
import classNames from 'classnames';

import { mergeRefs } from '../../utils/utils';
import { BaseInput } from '../BaseInput/BaseInput';

import {
    type PCRColors,
    type PCRColorsOutline,
    type RadioCheckboxVariants,
    type RadioCheckboxFillModes,
    type RadioCheckboxAnimations,
    type IconPropType,
} from '../../types';

export type RadioState = boolean | string;

export type RadioProps = {
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
     * The `state` prop from` useRadioState`.
     */
    state?: RadioState,

    /**
     * The `setState` dispatcher from `useRadioState`.
     */
    setState?: (state: RadioState) => void,

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
     * <Radio>
     *     {({ color, icon }) => (
     *         <div className="state my-custom-class-name">
     *             {icon}
     *             <label>Something super special</label>
     *         </div>
     *     )}
     * </Radio>
     */
    children: React.Node | ((...props: Object) => React.Node),
};

export const useRadioState = (initialState: RadioState | (() => RadioState)) => {
    const [state, setState] = React.useState<RadioState>(initialState);

    return { state, setState };
};

export const Radio = React.forwardRef<RadioProps, HTMLInputElement>(({
    color,
    variant = 'round',
    fill,
    animation,
    checked,
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
}, ref) => {
    const radioRef = React.useRef(mergeRefs(ref, React.createRef()));

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

            setState(e.currentTarget.value);
        },
        [setState, state, disabled, locked, onChange]
    );

    return (
        <BaseInput
            type="radio"
            role="radio"
            locked={locked}
            icon={icon}
            className={classNames(
                {
                    'p-default': !icon.type && (!animation || animation === 'smooth'),
                    [`p-${variant}`]: variant,
                    [animation ? `p-${animation}` : '']: animation,
                    [icon.type ? `p-${icon.type}` : '']: icon.type,
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
            ref={radioRef.current}
            {...htmlProps}>
            {children}
        </BaseInput>
    );
});

export const RadioGroup = (props: Object) => <fieldset role="radiogroup" {...props} />;
