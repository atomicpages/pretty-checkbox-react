import * as React from 'react';

export type UseCheckboxState = {
  /**
   * The state object of the checkbox. This can be a boolean or
   * an array of items.
   * @default false
   */
  state?: boolean | string | any[];

  /**
   * Your change handlers to run _after_ the default dispatch
   * has occurred.
   */
  onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
};

const INDETERMINATE_STATE = 'indeterminate';

const dispatch = (value: string) => (state: UseCheckboxState['state']) => {
  if (Array.isArray(state)) {
    const index = state.indexOf(value);

    if (index === -1) {
      state.push(value);
    } else {
      state.splice(index, 1);
    }

    return [...state];
  } else if (value !== '') {
    return [value];
  }

  return !state;
};

export const useCheckboxState = ({
  state: initialState = false,
  onChange,
}: UseCheckboxState = {}) => {
  const [state, setState] = React.useState(() => {
    if (
      typeof initialState === 'string' &&
      initialState !== INDETERMINATE_STATE
    ) {
      return [initialState];
    }

    return initialState;
  });

  return {
    state,
    setState,
    onChange: React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;

        setState(dispatch(value));

        if (typeof onChange === 'function') {
          onChange(e);
        }
      },
      [onChange]
    ),
  };
};
