import classNames from 'classnames';
import { CommonControlledProps, CommonCheckboxRadioProps } from '../../types/CommonProps';

export const isBoolean = (value?: any) => typeof value === 'undefined';

export const getChecked = (
    args: Pick<CommonControlledProps<any>, 'disabled' | 'locked' | 'state' | 'value' | 'type'>
) => {
    const { disabled, locked, state, value, type } = args;

    if (disabled || locked) {
        return false;
    }

    if (Array.isArray(state)) {
        return state.indexOf(value) !== -1;
    }

    if (isBoolean(value)) {
        return !!state;
    }

    if (type === 'radio') {
        return state === value;
    }

    return state;
};

export const isDefaultStyle = (animation: CommonCheckboxRadioProps['animation'], icon?: any) => {
    if (
        animation === 'tada' ||
        animation === 'jelly' ||
        animation === 'rotate' ||
        animation === 'pulse'
    ) {
        return false;
    }

    return !icon;
};

export const getClassNames = ({
    animation,
    icon,
    locked,
    bigger,
    plain,
    shape,
    fill,
    className,
    readOnly,
    isSwitch,
    iconType,
}: CommonCheckboxRadioProps & { isSwitch?: boolean }) =>
    classNames(
        'pretty',
        {
            'p-switch': isSwitch,
            'p-default': !isSwitch && isDefaultStyle(animation, icon),
            'p-locked': locked || readOnly,
            'p-bigger': bigger,
            'p-plain': plain,
            [`p-${shape}`]: shape,
            [`p-${fill}`]: fill,
            [`p-${animation}`]: animation,
            [`p-${iconType}`]: iconType,
        },
        className
    );
