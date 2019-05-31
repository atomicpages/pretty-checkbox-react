// @flow

import * as React from 'react';
import classNames from 'classnames';

/**
 * The base prefix for all pretty-checkbox class names.
 */
export const PREFIX: string = 'p-';

type SVG = {|
    /**
     * Render a custom `.svg` in the checkbox or radio.
     */
    svg: React.Element<'svg'>,
|};

type Image = {|
    /**
     * Render a custom `img` in the checkbox or radio.
     */
    image: React.Element<'img'>,
|};

type Icon = {|
    /**
     * Render a custom font icon in the checkbox or radio.
     */
    icon: React.Element<any>,
|};

type Node = {|
    className: string,
    node: any,
|} | null;

type BaseProps = {
    /**
     * Select the type if component: checkbox or radio.
     */
    type: 'checkbox' | 'radio',

    /**
     * Customize the rendering of the checkbox, radio,
     * or switch.
     *
     * **Note:** You are responsible for providing
     * the details of pretty-checkbox's `div.state`.
     */
    children?: React.Node | (Node => React.Node),

    /**
     * Customize the rendering of the checkbox, radio,
     * or switch.
     *
     * **Note:** You are responsible for providing
     * the details of pretty-checkbox's `div.state`.
     */
    render?: Node => React.Node,

    /**
     * The style of the checkbox or radio.
     */
    style?: 'fill' | 'thick',

    /**
     * The shape of the checkbox or radio component.
     */
    shape?: 'round' | 'curve' | 'outline' | 'fill' | 'slim',

    /**
     * Additional class selectors to pass to the `pretty` element.
     */
    className?: string,

    /**
     * Set this to your custom value for `$pretty--class-name`. If you have not changed
     * this in `.scss` then _do not modify this prop_.
     */
    prettySelector?: string,

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
    animation?: 'smooth' | 'jelly' | 'tada' | 'rotate' | 'pulse',

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
    plain?: boolean,
};

export type InputProps =
    | {
          ...BaseProps,
          ...SVG,
      }
    | {
          ...BaseProps,
          ...Image,
      }
    | {
          ...BaseProps,
          ...Icon,
      };

/**
 * Automatically append the className for icon component. This will automatically add
 * `icon` to icon prop components, `svg` to prop svg components, and `image` to
 * image prop components.
 * @param {React.Element<*>} component The component to add the className to.
 * @param {string} className The className to fill on the element.
 */
const fillClassNameForIcons = (
    component: React.Element<any> | void,
    className: string
): React.Node => {
    if (!component) {
        return null;
    }

    return React.cloneElement(component, {
        ...component.props,
        className: classNames(className, component.props.className),
    });
};

/**
 * Handles custom or default rendering of the pretty-checkbox `div.state` class.
 */
const PrettyInputState = (props: InputProps): React.Node => {
    let node: Node = null;

    const { children, render, id, color } = props;

    // yuck, needed for type refinement :(
    if (props.svg) {
        node = {
            className: 'svg',
            node: props.svg,
        };
    } else if (props.icon) {
        node = {
            className: 'icon',
            node: props.icon,
        };
    } else if (props.image) {
        node = {
            className: 'image',
            node: props.image,
        };
    }

    if (typeof children === 'function') {
        return children(node);
    }

    if (typeof render === 'function') {
        return render(node);
    }

    return (
        <div
            className={classNames('state', color ? PREFIX + color : null)}
            data-testid="pcr-state"
        >
            {node ? fillClassNameForIcons(node.node, node.className) : null}
            <label htmlFor={id}>{children}</label>
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
        plain,
    } = props;

    if (
        (props.icon && props.svg) ||
        (props.icon && props.image) ||
        (props.svg && props.image)
    ) {
        throw new Error(
            'icon, svg, and image are mutually exclusive props; choose one'
        );
    }

    return (
        <div
            data-testid="pcr-wrapper"
            className={classNames(
                props.prettySelector,
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
                data-testid="pcr-input"
                {...inputProps}
            />
            {
                // $ExpectError
                <PrettyInputState {...props} />
            }
        </div>
    );
}

Input.defaultProps = { prettySelector: 'pretty' };

export default Input;
