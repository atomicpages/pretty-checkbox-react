import * as React from 'react';
import { UseCheckboxState } from './useCheckboxState';

export type UseIndeterminateOptions = {
    checked?: boolean;
    state?: UseCheckboxState['state'];
};

export const useIndeterminate = ({
    checked,
    state,
}: UseIndeterminateOptions): {
    ref: React.RefObject<HTMLInputElement>;
    'aria-checked': React.AriaAttributes['aria-checked'];
} => {
    const [indeterminate, setStatus] = React.useState(false);
    const ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (state !== undefined && ref.current) {
            const status = state === 'indeterminate';

            setStatus(status);
            ref.current.indeterminate = status;
        }
    }, [state]);

    return {
        ref,
        'aria-checked': indeterminate ? 'mixed' : checked,
    };
};
