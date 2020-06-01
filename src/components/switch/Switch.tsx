import * as React from 'react';
import classNames from 'classnames';

import { useClassNames } from '../../hooks/utility/useClassNames';
import { useControlled } from '../../hooks/utility/useControlled';
import { UseRadioState } from '../..';
import { useLocked } from '../../hooks/utility/useLocked';
import { State } from '../state/State';

import { PCRSwitchProps } from '../../typings/PCRSwitchProps';
import { useCommonProps } from '../../hooks/utility/useCommonProps';
import { UseCheckboxState } from '../checkbox/Checkbox';

export const Switch = React.forwardRef<HTMLInputElement, PCRSwitchProps>((props, ref) => {
    const { checked, value, ...rest } = useControlled<
        PCRSwitchProps<UseRadioState['state'] | UseCheckboxState['state']>
    >(props);

    const { children, locked, color, id, className, style, htmlProps } = useCommonProps(rest);
    const styles = useLocked({ locked, style });

    return (
        <div
            style={styles}
            className={classNames('pretty', 'p-switch', useClassNames(props, true), className)}>
            <input
                ref={ref}
                type="checkbox"
                value={value}
                id={id}
                checked={checked}
                {...htmlProps}
            />
            <State id={id} color={color}>
                {children}
            </State>
        </div>
    );
});

Switch.displayName = 'Switch';
