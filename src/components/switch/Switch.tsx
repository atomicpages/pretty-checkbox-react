import clsx from 'clsx';

import { useClassNames } from '../../hooks/utility/useClassNames';
import { useControlled } from '../../hooks/utility/useControlled';
import { useLocked } from '../../hooks/utility/useLocked';
import { State } from '../state/State';

import { PCRSwitchProps } from '../../typings/PCRSwitchProps';
import { useCommonProps } from '../../hooks/utility/useCommonProps';
import mergeRefs from 'react-merge-refs';
import { useAriaChecked } from './useAriaChecked';
import { forwardRef } from 'react';

import type { UseRadioStateOptions } from '../radio/useRadioState';
import type { UseCheckboxStateOptions } from '../checkbox/useCheckboxState';

export type SwitchProps<
  S = UseRadioStateOptions['state'] | UseCheckboxStateOptions['state']
> = PCRSwitchProps<S>;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const { checked, value, state, ...rest } = useControlled<
      UseRadioStateOptions['state'] | UseCheckboxStateOptions['state'],
      SwitchProps
    >(props);

    const { children, locked, color, id, className, style, htmlProps } =
      useCommonProps(rest);
    const styles = useLocked({ locked, style });

    const htmlRef = useAriaChecked({ setState: props.setState, checked });

    return (
      <div
        style={styles}
        className={clsx(
          'pretty',
          'p-switch',
          useClassNames(props, true),
          className
        )}
      >
        <input
          ref={mergeRefs([ref, htmlRef])}
          type="checkbox"
          role="switch"
          value={value}
          id={id}
          // required for role="switch"
          // @see https://www.w3.org/TR/wai-aria-1.1/#switch
          aria-checked={checked}
          checked={checked}
          {...htmlProps}
        />
        <State id={id} color={color}>
          {children}
        </State>
      </div>
    );
  }
);

Switch.displayName = 'Switch';
