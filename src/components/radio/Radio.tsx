import * as React from "react";

import clsx from "clsx";

import { UseRadioState, useRadioState } from "./useRadioState";
import { useIcon } from "../../hooks/useIcon";
import { useCheckboxRadioProps } from "../../hooks/utility/useCheckboxRadioProps";
import { useClassNames } from "../../hooks/utility/useClassNames";
import { useControlled } from "../../hooks/utility/useControlled";
import { useLocked } from "../../hooks/utility/useLocked";
import type { PCRCheckboxRadioProps } from "../../typings/PCRCheckboxRadioProps";
import { State } from "../state/State";

export type RadioProps = Omit<
  PCRCheckboxRadioProps<UseRadioState["state"]>,
  "indeterminate"
>;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { checked, value, state, ...rest } = useControlled<
      UseRadioState["state"],
      RadioProps
    >(props);

    const {
      shape = "round",
      children,
      locked,
      color,
      id,
      className,
      style,
      icon: propsIcon,
      htmlProps,
    } = useCheckboxRadioProps<UseRadioState["state"], RadioProps>(rest);

    const styles = useLocked({ locked, style });
    const { icon, iconType } = useIcon(propsIcon);

    return (
      <div
        style={styles}
        className={clsx(
          "pretty",
          useClassNames({
            ...props,
            shape,
            iconType,
          }),
          className,
        )}>
        <input
          ref={ref}
          value={value}
          type="radio"
          id={id}
          checked={checked}
          {...htmlProps}
        />
        <State id={id} icon={icon} color={color}>
          {children}
        </State>
      </div>
    );
  },
);

Radio.displayName = "Radio";

export { UseRadioState, useRadioState };
