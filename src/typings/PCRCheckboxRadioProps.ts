import { CommonProps } from './PCRCommonProps';

type Shape = 'curve' | 'round';
type Fill = 'thick' | 'fill';
type Animation = 'smooth' | 'jelly' | 'tada' | 'rotate' | 'pulse';

export type PCRCheckboxRadioProps<S = any> = Omit<CommonProps<S>, 'type'> & {
  /**
   * The shape of the checkbox or radio.
   */
  shape?: Shape;

  /**
   * The fill, or variant of the checkbox or radio.
   */
  variant?: Fill;

  /**
   * Tne kind of animation to apply to the checkbox or radio.
   */
  animation?: Animation;

  /**
   * Set `true` to enable plain styles when to checkbox or radio is selected.
   */
  plain?: boolean;

  /**
   * Unique to checkbox, set `true` when the checkbox is in `indeterminate` state.
   * If you're using a controlled checkbox, use the state hook instead.
   */
  indeterminate?: boolean;

  /**
   * The icon to pass (as JSX) to the checkbox or radio.
   */
  icon?: React.ReactElement<any, 'svg' | 'i' | 'em' | 'img'>;

  /**
   * @private
   */
  iconType?: 'svg' | 'icon' | 'image';
};
