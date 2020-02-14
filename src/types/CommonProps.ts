import { InputHTMLAttributes } from 'react';

type Colors = 'primary' | 'success' | 'warning' | 'info' | 'danger';
type ColorsOutline = 'primary-o' | 'success-o' | 'warning-o' | 'info-o' | 'danger-o';

type CheckboxRadioProps = {
    icon?: React.ReactElement<any, 'img' | 'svg' | 'i'>;
    iconType?: 'icon' | 'svg' | 'image';
    fill?: 'fill' | 'thick';
    shape?: 'square' | 'curve' | 'round';
    animation?: 'smooth' | 'jelly' | 'tada' | 'rotate' | 'pulse';
    plain?: boolean;
};

export type SwitchShape = 'fill' | 'outline' | 'slim';

export type CommonProps<S> = InputHTMLAttributes<HTMLInputElement> & {
    state: S;
    setState?: React.Dispatch<React.SetStateAction<S>>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>, value?: any) => void;
    color?: Colors | ColorsOutline;
    locked?: boolean;
    bigger?: boolean;
    className?: string;
    type?: 'checkbox' | 'radio';
    baseId?: string;
};

export type CommonCheckboxRadioProps<S = any> = CommonProps<S> & CheckboxRadioProps;
