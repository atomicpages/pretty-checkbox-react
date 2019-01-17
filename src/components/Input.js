// @flow

import * as React from 'react';
import classNames from 'classnames';

/**
 * The base prefix for all pretty-checkbox class names.
 */
export const PREFIX: string = 'p-';

export type InputProps = {
    /**
     * Select the type if component: checkbox or radio.
     */
    type: "checkbox" | "radio",

    /**
     * Customize the rendering of the checkbox, radio,
     * or switch.
     *
     * **Note:** You are responsible for providing
     * the details of pretty-checkbox's `div.state`.
     */
    children?: React.Node | (() => React.Node),

    /**
     * Customize the rendering of the checkbox, radio,
     * or switch.
     *
     * **Note:** You are responsible for providing
     * the details of pretty-checkbox's `div.state`.
     */
    render?: (() => React.Node),

    /**
     * The style of the checkbox or radio.
     */
    style?: "fill" | "thick",

    /**
     * The shape of the checkbox or radio component.
     */
    shape?: "round" | "curve",

    /**
     * Render a custom font icon in the checkbox or radio.
     */
    icon?: React.Node,

    /**
     * Render a custom `.svg` in the checkbox or radio.
     */
    svg?: React.Element<'svg'>,

    /**
     * Render a custom `img` in the checkbox or radio.
     */
    image?: React.Element<'img'>,

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
    animation?: "smooth" | "jelly" | "tada" | "rotate" | "pulse",

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
    bigger?: boolean,

    /**
     * Style the checkbox or radio as plain.
     */
    plain?: boolean
};

const fillClassNameForIcons = (component: React.Component<any>, className: string): React.Node => {
    if (!component) {
        return null;
    }

    return React.cloneElement(component, {
        ...component.props,
        className: classNames(className, component.props.className)
    });
};

/**
 * Handles custom or default rendering of the pretty-checkbox `div.state` class.
 */
const PrettyInputState = ({ children, render, id, color, icon, svg, image }: InputProps): React.Node => {
    if (typeof children === 'function') {
        return children();
    }

    if (typeof render === 'function') {
        return render();
    }

    return (
        <div className={classNames('state', color ? PREFIX + color : null)}>
            {fillClassNameForIcons(icon, 'icon') || fillClassNameForIcons(svg, 'svg') || fillClassNameForIcons(image, 'image') || null}
            {children ? <label htmlFor={id}>{children}</label> : null}
        </div>
    );
};

function Input(props: InputProps) {
    const {
        className,
        value,
        onChange,
        id,
        type,
        inputProps,
        animation,
        checked,
        disabled,
        locked,
        bigger,
        shape,
        style,
        image,
        svg,
        icon,
        plain
    } = props;

    if ((icon && svg) || (icon && image) || (svg && image)) {
        throw new Error('icon, svg, and image are mutually exclusive props; choose one');
    }

    return (
        <div
            className={classNames(
                'pretty',
                animation ? PREFIX + animation : null,
                className,
                shape ? PREFIX + shape : null,
                style ? PREFIX + style : null,
                locked ? `${PREFIX}locked` : null,
                bigger ? `${PREFIX}bigger` : null,
                plain ? `${PREFIX}plain` : null
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
            <PrettyInputState {...props} />
        </div>
    );
}

export default Input;
