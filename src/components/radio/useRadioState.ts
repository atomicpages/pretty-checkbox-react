import { useState, useCallback } from 'react';

export type UseRadioStateOptions = {
  state?: boolean | string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
};

export const useRadioState = ({
  state: initialState = false,
  onChange,
}: UseRadioStateOptions = {}) => {
  const [state, setState] = useState(initialState);

  return {
    state,
    setState,
    onChange: useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;

        setState((current) => {
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
