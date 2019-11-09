import * as React from 'react';

import {
    PCRColors,
    PCRColorsOutline,
    RadioCheckboxVariants,
    RadioCheckboxFillModes,
    RadioCheckboxAnimations,
    SwitchFillModes,
} from './types';

export type BaseProps<S> = React.HTMLAttributes<HTMLInputElement> & {
    /**
     * The current checkbox state.
     */
    state: S;

    /**
     * Dispatch method from React.useState or `this.setState` from class component.
     */
    setState: React.Dispatch<React.SetStateAction<S>>;

    /**
     * A label to show in the Checkbox. This can be any JSX node or string.
     */
    children?: React.ReactNode;

    /**
     * Specify one of the colors.
     */
    color?: PCRColors | PCRColorsOutline;

    /**
     * Specify one of the variants.
     */
    variant?: RadioCheckboxVariants;

    /**
     * Specify one of the fill modes.
     */
    fill?: RadioCheckboxFillModes | SwitchFillModes;

    /**
     * Specify one of the animations.
     */
    animation?: RadioCheckboxAnimations;

    /**
     * Pass an icon to render.
     */
    icon?: React.ReactComponentElement<any, HTMLElement>;

    /**
     * Runs inside the default onChange handler for the Checkbox.
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Set the checkbox as disabled.
     */
    disabled?: boolean;

    /**
     * Set the checkbox as locked. This will also set the
     * `aria-disabled` attribute to `true`.
     */
    locked?: boolean;

    /**
     * Pass additional class names to the `.pretty` div.
     */
    className?: string;

    /**
     * Set the value of the input field.
     */
    value?: string;

    /**
     * Make the checkbox, radio, or switcher bigger.
     */
    bigger?: boolean;
};
