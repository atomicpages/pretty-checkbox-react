// @flow

import * as React from 'react';
import classNames from 'classnames';

const blacklist = {
    'p-default': [
        'p-switch',
        'p-icon',
        'p-plain',
        'p-svg',
        'p-image',
        'p-jelly',
        'p-tada',
        'p-rotate',
        'p-pulse'
    ],
    'p-switch': ['p-rotate', 'p-pulse']
};

export type InputProps = {
    /**
     * Select the type if component: checkbox or radio.
     */
    type: "checkbox" | "radio",

    /**
     * Specify label values or render your own children for
     * things like icons and states.
     */
    children: React.Node | (() => React.Node),

    /**
     * Additional class selectors to pass to the `pretty` element.
     */
    className?: string,

    /**
     * Specify a value for the underlying `input` element.
     */
    value?: string | number | string[],

    /**
     * Add an event handler when the radio/checkbox/switch changes.
     */
    onChange?: (SyntheticMouseEvent<HTMLInputElement>) => void,

    /**
     * Need a11y? Add your `id` here and it'll automatically be added to the `label`
     * when you use `children` as a prop and not a function.
     */
    id?: string,

    /**
     * Additional input props to pass to the input component.
     */
    inputProps?: {},

    /**
     * Specify colors to add to the checkbox, radio, or switch.
     */
    color?: string,

    /**
     * Specify animations to add to the checkbox, radio, or switch.
     */
    animation?: string,

    /**
     * Control the state of your component by deciding when it can be checked/unchecked.
     */
    checked?: boolean,

    /**
     * Disable the checkbox, radio, or switch.
     */
    disabled?: boolean,

    /**
     * Lock the checkbox, radio, or switch.
     */
    locked?: boolean,

    /**
     * Make the checkbox, radio, or switch bigger.
     */
    bigger?: boolean
};

const getPrettySelector = ({ className }) => {
    if (
        !className ||
        blacklist['p-default'].every(selector => !className.includes(selector))
    ) {
        return 'p-default';
    }
};

function Input(props: InputProps) {
    const {
        className,
        children,
        value,
        onChange,
        id,
        type,
        inputProps,
        color,
        animation,
        checked,
        disabled,
        locked,
        bigger
    } = props;

    return (
        <div
            className={classNames(
                'pretty',
                getPrettySelector(props),
                animation,
                className,
                locked ? 'p-locked' : null,
                bigger ? 'p-bigger' : null
            )}
        >
            <input
                id={id || null}
                type={type}
                value={value}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                {...inputProps}
            />
            <div className={classNames('state', color)}>
                {typeof children === 'function' ? (
                    children()
                ) : (
                    <label htmlFor={id || null}>{children}</label>
                )}
            </div>
        </div>
    );
}

export default Input;
