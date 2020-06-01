import { CommonProps } from './PCRCommonProps';

type Shape = 'curve' | 'round';
type Fill = 'thick' | 'fill';
type Animation = 'smooth' | 'jelly' | 'tada' | 'rotate' | 'pulse';

export type PCRCheckboxRadioProps<S = any> = Omit<CommonProps<S>, 'type'> & {
    shape?: Shape;
    variant?: Fill;
    animation?: Animation;
    plain?: boolean;
    icon?: React.ReactElement<any, 'svg' | 'i' | 'em' | 'img'>;
    iconType?: 'svg' | 'icon' | 'image';
};
