import { useCommonProps } from "./useCommonProps";
import type { PCRCheckboxRadioProps } from "../../typings/PCRCheckboxRadioProps";

/**
 * Responsible for extracting common props for radio and checkbox
 * controls.
 */
export const useCheckboxRadioProps = <S, P extends PCRCheckboxRadioProps<S>>(
  props: P,
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { shape, plain, icon, indeterminate, hasFocus, ...rest } = props;

  return { shape, plain, icon, indeterminate, ...useCommonProps(rest) };
};
