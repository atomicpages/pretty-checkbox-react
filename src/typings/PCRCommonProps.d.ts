import * as React from 'react';

type Colors = 'primary' | 'success' | 'info' | 'warning' | 'danger';
type ColorsOutline = 'primary-o' | 'success-o' | 'info-o' | 'warning-o' | 'danger-o';

export type CommonProps<S> = React.InputHTMLAttributes<HTMLInputElement> & {
    locked?: boolean;
    color?: Colors | ColorsOutline;
    shape?: string;
    animation?: string;
    variant?: string;
    state?: S;
    bigger?: boolean;
    plain?: boolean;
    setState?: React.Dispatch<React.SetStateAction<S>>;
};
