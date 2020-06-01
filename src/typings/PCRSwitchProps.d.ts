import { CommonProps } from './PCRCommonProps';

type Shape = 'fill' | 'slim';

export type PCRSwitchProps<S = any> = Omit<CommonProps<S>, 'variation' | 'animation'> & {
    shape?: Shape;
    animation?: undefined;
    iconType?: undefined;
};
