import { CheckboxState } from '../Checkbox';
import { removeIndexFromArray } from '../../../utils/utils';
import { useGenericChange } from '../../../hooks/useGenericChange';

export type CheckboxChangeArgs = {
    setState: React.Dispatch<React.SetStateAction<CheckboxState>>;
    value?: string;
    locked?: boolean;
    disabled?: boolean;
};

/**
 * Specific change handling for checkboxes that contain
 * an array of values. This is passed to and called by
 * `useGenericChange`.
 */
function onChange({ setState, value }: CheckboxChangeArgs) {
    setState(state => {
        if (Array.isArray(state)) {
            const array = Array.isArray(state) ? state : [];
            const index = array.indexOf(value);

            if (index === -1) {
                setState([...array, value]);
            } else {
                setState([...removeIndexFromArray(array, index)]);
            }
        }

        return state;
    });
}

/**
 * Internal hook to generalize checkbox onChange behavior. Used by
 * Checkbox and Switch.
 */
export const useCheckboxChange = (args: CheckboxChangeArgs) => {
    return useGenericChange<CheckboxState>({
        ...args,
        onChange,
    });
};
