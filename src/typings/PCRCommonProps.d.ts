import * as React from 'react';

type Colors = 'primary' | 'success' | 'info' | 'warning' | 'danger';
type ColorsOutline = 'primary-o' | 'success-o' | 'info-o' | 'warning-o' | 'danger-o';

export type CommonProps<S> = React.InputHTMLAttributes<HTMLInputElement> & {
    /**
     * Set true to enable locked mode.
     */
    locked?: boolean;

    /**
     * Choose a color (solid or outline) to apply to the control.
     */
    color?: Colors | ColorsOutline;
    shape?: string;
    animation?: string;
    variant?: string;

    /**
     * Set true to enable focus styling.
     */
    hasFocus?: boolean;

    /**
     * The state of the control. Typically a boolean, string, or string array.
     */
    state?: S;

    /**
     * Set true to make the control a little bit larger. For more control,
     * use `font-size` in CSS on `.pretty`.
     */
    bigger?: boolean;

    /**
     * Set `true` to enable plain styles when to checkbox or radio is selected.
     */
    plain?: boolean;

    /**
     * The state dispatch function either from the `setState` hook or a reference
     * to `this.setState`.
     */
    setState?: React.Dispatch<React.SetStateAction<S>>;
};
