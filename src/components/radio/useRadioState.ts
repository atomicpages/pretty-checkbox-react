import * as React from 'react';

export type UseRadioState = {
    state?: boolean | string;
    onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
};

export const useRadioState = ({ state: initialState = false, onChange }: UseRadioState = {}) => {
    const [state, setState] = React.useState(initialState);

    return {
        state,
        setState,
        onChange: React.useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.currentTarget;

                setState(current => {
                    if (value !== '') {
                        return value;
                    }

                    return !current;
                });

                if (typeof onChange === 'function') {
                    onChange(e);
                }
            },
            [onChange]
        ),
    };
};
