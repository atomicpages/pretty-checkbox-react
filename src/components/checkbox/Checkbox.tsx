import * as React from 'react';
import classNames from 'classnames';
import mergeRefs from 'react-merge-refs';

import { useCheckboxState, UseCheckboxState } from './useCheckboxState';
import { useLocked } from '../../hooks/utility/useLocked';
import { useIcon } from '../../hooks/useIcon';
import { useClassNames } from '../../hooks/utility/useClassNames';
import { useControlled } from '../../hooks/utility/useControlled';

import { useCheckboxRadioProps } from '../../hooks/utility/useCheckboxRadioProps';
import { PCRCheckboxRadioProps } from '../../typings/PCRCheckboxRadioProps';
import { State } from '../state/State';
import { useIndeterminate } from './useIndeterminate';

export const Checkbox = React.forwardRef<
    HTMLInputElement,
    PCRCheckboxRadioProps<UseCheckboxState['state']>
>((props, ref) => {
    const { checked, value, state, ...rest } = useControlled<
        UseCheckboxState['state'],
        PCRCheckboxRadioProps<UseCheckboxState['state']>
    >(props);

    const { ref: intRef, ...aria } = useIndeterminate({ state, checked });

    const {
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
                    iconType,
                }),
                className
            )}>
            <input
                ref={mergeRefs([ref, intRef])}
                value={value}
                type="checkbox"
                id={id}
                checked={checked}
                {...aria}
                {...htmlProps}
            />
            <State id={id} icon={icon} color={color}>
                {children}
            </State>
        </div>
    );
});

Checkbox.displayName = 'Checkbox';

export { useCheckboxState, UseCheckboxState };
