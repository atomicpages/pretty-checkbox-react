import { useCommonProps } from './useCommonProps';
import { PCRCheckboxRadioProps } from '../../typings/PCRCheckboxRadioProps';

/**
 * Responsible for extracting common props for radio and checkbox
 * controls.
 */
export const useCheckboxRadioProps = <S, P extends PCRCheckboxRadioProps<S>>(props: P) => {
    const { shape, plain, icon, indeterminate, ...rest } = props;

    return { shape, plain, icon, indeterminate, ...useCommonProps(rest) };
};
