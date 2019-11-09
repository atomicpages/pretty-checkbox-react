import * as React from 'react';

import { useCheckboxChange } from './hooks/useCheckboxChange';
import { mergeRefs, warn, getChecked } from '../../utils/utils';
import { BaseProps } from '../../types/BaseProps';
import { RadioCheckboxFillModes } from '../../types/types';
import { BaseInput } from '../BaseInput/BaseInput';
import { useGenericState } from '../../hooks/useGenericState';

export type CheckboxState = boolean | 'indeterminate' | any[] | undefined;

export type CheckboxProps = BaseProps<CheckboxState> & {
    /**
     * Specify one of the fill modes.
     */
    fill?: RadioCheckboxFillModes;
};

export const useCheckboxState = (initialState: CheckboxState = false) =>
    useGenericState<CheckboxState>(initialState);

export const Checkbox = React.forwardRef(
    (
        { state, setState, value, disabled, locked, onChange, ...rest }: CheckboxProps,
        htmlRef: React.Ref<HTMLInputElement>
    ) => {
        const ref = React.useRef<HTMLInputElement>(null);

        const defaultOnChange = useCheckboxChange({
            setState,
            value,
            disabled,
            locked,
        });

        React.useLayoutEffect(() => {
            if (!ref.current && state === 'indeterminate') {
                warn(
                    'Checkbox',
                    "Can't set indeterminate state because `ref` wasn't passed to component."
                );

                return;
            }

            if (ref.current) {
                if (state === 'indeterminate') {
                    ref.current.indeterminate = true;
                } else if (ref.current.indeterminate) {
                    ref.current.indeterminate = false;
                }
            }
        }, [state]);

        // TODO: need to add htmlFor generated ID by default
        // allow consumer to provide their own as an escape

        return (
            <BaseInput
                state={getChecked<CheckboxState>({ value, state, setState })}
                setState={setState}
                ref={mergeRefs(htmlRef, ref)}
                disabled={disabled}
                locked={locked}
                value={value}
                onChange={onChange || defaultOnChange}
                {...rest}
            />
        );
    }
);

Checkbox.displayName = 'Checkbox';
