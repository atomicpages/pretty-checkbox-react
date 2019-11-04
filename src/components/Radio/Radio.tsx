import * as React from 'react';
import { BaseProps } from '../../typings/BaseProps';
import { BaseInput } from '../BaseInput/BaseInput';
import { useGenericChange, ChangeArgs } from '../../hooks/useGenericChange';
import { useGenericState } from '../../hooks/useGenericState';

export type RadioState = boolean | string | undefined;

export type RadioProps = BaseProps<RadioState> & {
    /**
     * The name of the input field.
     */
    name: string;
};

export const useRadioState = (initialState: RadioState = false) =>
    useGenericState<RadioState>(initialState);

const handleChange = ({ value, setState }: ChangeArgs<RadioState>) => {
    setState(value);
};

export const Radio = React.forwardRef(
    (
        {
            variant = 'round',
            state,
            setState,
            value,
            disabled,
            locked,
            onChange,
            ...props
        }: RadioProps,
        htmlRef: React.Ref<HTMLInputElement>
    ) => {
        const defaultOnChange = useGenericChange<RadioState>({
            setState,
            value,
            disabled,
            locked,
            onChange: handleChange,
        });

        return (
            <BaseInput
                type="radio"
                state={state === value}
                setState={setState}
                variant={variant}
                value={value}
                disabled={disabled}
                locked={locked}
                onChange={onChange || defaultOnChange}
                ref={htmlRef}
                {...props}
            />
        );
    }
);

Radio.displayName = 'Radio';
