import { CommonProps, Colors } from './PCRCommonProps';

type Shape = 'fill' | 'slim';

export type PCRSwitchProps<S = any> = Omit<
  CommonProps<S>,
  'variation' | 'animation' | 'color' | 'type'
> & {
  /**
   * The shape of the Switch.
   */
  shape?: Shape;

  /**
   * Choose a color. Note: solid colors only for switch.
   */
  color?: Colors;

  /**
   * Switch has built-in animations. Do not specify
   * an animation.
   */
  animation?: undefined;

  /**
   * Override the kind of switch. Defaults to checkbox.
   */
  type?: 'checkbox' | 'radio';

  /**
   * @private
   */
  iconType?: undefined;
};
