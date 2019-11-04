import * as React from 'react';
import { isBoolean } from '../utils/utils';

export type ChangeArgs<S> = {
    setState: React.Dispatch<React.SetStateAction<S>>;
    onChange?: (args: any) => void;
    locked?: boolean;
    disabled?: boolean;
    value?: string;
};

/**
 * Super generic change handlers for toggling the input
 * controls.
 */
function baseChangeHandler(args: ChangeArgs<any>) {
    const { setState, value, locked, disabled, onChange } = args;

    if (locked || disabled) {
        return;
    }

    if (typeof onChange === 'function') {
        onChange(args);
    }

    if (isBoolean(value)) {
        setState((currentState: boolean) => !currentState);
    }
}

/**
 * Internal hook to generalize checkbox onChange behavior. Used by
 * Checkbox and Switch. Since state will change every onChange, we don't
 * need to memozie this.
 */
export function useGenericChange<S>(args: ChangeArgs<S>) {
    const handleChange = React.useCallback(() => {
        baseChangeHandler(args);
    }, [args]);

    return handleChange;
}
