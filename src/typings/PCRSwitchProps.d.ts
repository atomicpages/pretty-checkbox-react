import { CommonProps, Colors } from './PCRCommonProps';

type Shape = 'fill' | 'slim';

export type PCRSwitchProps<S = any> = Omit<CommonProps<S>, 'variation' | 'animation' | 'color'> & {
    /**
     * The shape of the Switch.
     */
    shape?: Shape;

    /**
     * Choose a color. Note: solid colors only for switch.
     */
    color: Colors;

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
