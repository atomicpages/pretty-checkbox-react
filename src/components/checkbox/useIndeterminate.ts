import * as React from 'react';
import { UseCheckboxState } from './useCheckboxState';

export type UseIndeterminateOptions = {
    checked?: boolean;
    state?: UseCheckboxState['state'];
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
    const [indeterminate, setStatus] = React.useState(false);
    const ref = React.useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        if (state !== undefined && ref.current) {
            setStatus(state === 'indeterminate');
        }
    }, [state]);

    // if a prop is passed mark the indeterminate state
    // we should check to ensure state isn't set to indeterminate
    // since we don't want ot clobber the state value if
    // it is defined.
    React.useEffect(() => {
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
