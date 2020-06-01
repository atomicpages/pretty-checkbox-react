import * as React from 'react';
import classNames from 'classnames';

import { State } from '../state/State';

import { useLocked } from '../../hooks/utility/useLocked';
import { useIcon } from '../../hooks/useIcon';
import { useClassNames } from '../../hooks/utility/useClassNames';
import { useControlled } from '../../hooks/utility/useControlled';

import { useCheckboxRadioProps } from '../../hooks/utility/useCheckboxRadioProps';
import { PCRCheckboxRadioProps } from '../../typings/PCRCheckboxRadioProps';
import { UseRadioState, useRadioState } from './useRadioState';

export const Radio = React.forwardRef<
    HTMLInputElement,
    PCRCheckboxRadioProps<UseRadioState['state']>
>((props, ref) => {
    const { checked, value, ...rest } = useControlled<
        PCRCheckboxRadioProps<UseRadioState['state']>
    >(props);

    const {
        shape = 'round',
        children,
        locked,
        color,
        id,
        className,
        style,
        icon: propsIcon,
        htmlProps,
    } = useCheckboxRadioProps(rest);

    const styles = useLocked({ locked, style });
    const { icon, iconType } = useIcon(propsIcon);

    return (
        <div
            style={styles}
            className={classNames(
                'pretty',
                useClassNames({
                    ...props,
                    shape,
                    iconType,
                }),
                className
            )}>
            <input ref={ref} value={value} type="radio" id={id} checked={checked} {...htmlProps} />
            <State id={id} icon={icon} color={color}>
                {children}
            </State>
        </div>
    );
});

Radio.displayName = 'Radio';

export { UseRadioState, useRadioState };
