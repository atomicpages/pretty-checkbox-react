import { useCommonProps } from './useCommonProps';
import { PCRCheckboxRadioProps } from '../../typings/PCRCheckboxRadioProps';

/**
 * Responsible for extracting common props for radio and checkbox
 * controls.
 */
export const useCheckboxRadioProps = <S>(props: PCRCheckboxRadioProps<S>) => {
    const { shape, plain, icon, ...rest } = props;

    return { shape, plain, icon, ...useCommonProps(rest) };
};
