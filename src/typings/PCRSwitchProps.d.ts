import { CommonProps } from './PCRCommonProps';

type Shape = 'fill' | 'slim';

export type PCRSwitchProps<S = any> = Omit<CommonProps<S>, 'variation' | 'animation'> & {
    /**
     * The shape of the Switch.
     */
    shape?: Shape;

    /**
     * Switch has built-in animations. Do not specify
     * an animation.
     */
    animation?: undefined;

    /**
     * @private
     */
    iconType?: undefined;
};
