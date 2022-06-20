import { forwardRef } from 'react';
import clsx from 'clsx';
import mergeRefs from 'react-merge-refs';

import { useLocked } from '../../hooks/utility/useLocked';
import { useIcon } from '../../hooks/useIcon';
import { useClassNames } from '../../hooks/utility/useClassNames';
import { useControlled } from '../../hooks/utility/useControlled';

import { useCheckboxRadioProps } from '../../hooks/utility/useCheckboxRadioProps';
import { PCRCheckboxRadioProps } from '../../typings/PCRCheckboxRadioProps';
import { State } from '../state/State';
import { useIndeterminate } from './useIndeterminate';

import type { UseCheckboxStateOptions } from './useCheckboxState';

export type CheckboxProps = PCRCheckboxRadioProps<
  UseCheckboxStateOptions['state']
> & {
  /**
   * Mark the underlying HTML input checkbox as `indeterminate`. This prop doesn't change
   * icons for you, it just ensures we have the correct `aria-checked` value
   * and the checkbox has indeterminate status.
   */
  indeterminate?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { checked, value, state, ...rest } = useControlled<
      UseCheckboxStateOptions['state'],
      CheckboxProps
    >(props);

    const {
      children,
      locked,
      color,
      id,
      className,
      style,
      indeterminate,
      icon: propsIcon,
      htmlProps,
    } = useCheckboxRadioProps<UseCheckboxStateOptions['state'], CheckboxProps>(
      rest
    );

    const { ref: intRef, ...aria } = useIndeterminate({
      state,
      checked,
      indeterminate,
    });

    const styles = useLocked({ locked, style });
    const { icon, iconType } = useIcon(propsIcon);

    return (
      <div
        style={styles}
        className={clsx(
          'pretty',
          useClassNames({
            ...props,
            iconType,
          }),
          className
        )}
      >
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
  }
);

Checkbox.displayName = 'Checkbox';
