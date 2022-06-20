import { useState, useRef, useEffect } from 'react';
import { UseCheckboxStateOptions } from './useCheckboxState';

export type UseIndeterminateOptions = {
  checked?: boolean;
  state?: UseCheckboxStateOptions['state'];
  indeterminate?: boolean;
};

export const useIndeterminate = ({
  checked,
  state,
  indeterminate: indeterminateFromProps,
}: UseIndeterminateOptions): {
  ref: React.MutableRefObject<HTMLInputElement>;
  'aria-checked': React.AriaAttributes['aria-checked'];
} => {
  const [indeterminate, setStatus] = useState(false);
  const ref = useRef<HTMLInputElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (state !== undefined && ref.current) {
      setStatus(state === 'indeterminate');
    }
  }, [state]);

  // if a prop is passed mark the indeterminate state
  // we should check to ensure state isn't set to indeterminate
  // since we don't want ot clobber the state value if
  // it is defined.
  useEffect(() => {
    if (
      state !== 'indeterminate' &&
      ref.current &&
      typeof indeterminateFromProps !== 'undefined'
    ) {
      ref.current.checked = indeterminateFromProps;

      // fix needs to come from pretty-checkbox
      // ref.current.indeterminate = indeterminateFromProps;

      setStatus(indeterminateFromProps);
    }
  }, [indeterminateFromProps, state]);

  return {
    ref,
    'aria-checked': indeterminate ? 'mixed' : checked,
  };
};
