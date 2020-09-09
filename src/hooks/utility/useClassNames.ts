import { PCRCheckboxRadioProps } from '../../typings/PCRCheckboxRadioProps';
import { PCRSwitchProps } from '../../typings/PCRSwitchProps';

type Props = Omit<PCRCheckboxRadioProps, 'shape' | 'variant'> & {
    shape?: PCRCheckboxRadioProps['shape'] | PCRSwitchProps['shape'];
    variant?: string;
};

const isDefault = (
    animation: PCRCheckboxRadioProps['animation'],
    type: PCRCheckboxRadioProps['iconType']
) => {
    if (type) {
        return false;
    }

    return !animation || animation === 'smooth' || animation === 'pulse';
};

/**
 * Responsible for returning an object used by classnames
 * to properly add the className values to the .pretty element.
 */
export const useClassNames = (props: Props, isSwitch?: boolean) => {
    const { animation, bigger, locked, plain, shape, variant, iconType, hasFocus } = props;

    return {
        'p-default': !isSwitch && isDefault(animation, iconType),
        'p-bigger': bigger,
        'p-locked': locked,
        'p-plain': plain,
        'p-has-focus': hasFocus,
        [`p-${animation}`]: animation,
        [`p-${shape}`]: shape,
        [`p-${variant}`]: variant,
        [`p-${iconType}`]: iconType,
    };
};
