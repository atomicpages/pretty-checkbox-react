import * as React from "react";
import mergeRefs from "react-merge-refs";

import clsx from "clsx";

import { useAriaChecked } from "./useAriaChecked";
import type { UseRadioState } from "../..";
import { useClassNames } from "../../hooks/utility/useClassNames";
import { useCommonProps } from "../../hooks/utility/useCommonProps";
import { useControlled } from "../../hooks/utility/useControlled";
import { useLocked } from "../../hooks/utility/useLocked";
import type { PCRSwitchProps } from "../../typings/PCRSwitchProps";
import type { UseCheckboxState } from "../checkbox/Checkbox";
import { State } from "../state/State";

export type SwitchProps<
  S = UseRadioState["state"] | UseCheckboxState["state"],
> = PCRSwitchProps<S>;

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { checked, value, state, ...rest } = useControlled<
      UseRadioState["state"] | UseCheckboxState["state"],
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
          "pretty",
          "p-switch",
          useClassNames(props, true),
          className,
        )}>
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
  },
);

Switch.displayName = "Switch";
