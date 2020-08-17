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

export type RadioProps = Omit<PCRCheckboxRadioProps<UseRadioState['state']>, 'indeterminate'>;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
    const { checked, value, state, ...rest } = useControlled<UseRadioState['state'], RadioProps>(
        props
    );

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
    } = useCheckboxRadioProps<UseRadioState['state'], RadioProps>(rest);

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
