import { isBoolean } from '../utils/utils';

export type ChangeArgs<S> = {
    setState: (state: S) => void;
    state?: S | string;
    value?: string;
    locked?: boolean;
    disabled?: boolean;
    onChange?: (args: any) => void;
};

/**
 * Super generic change handlers for toggling the input
 * controls.
 */
function onChange(args: ChangeArgs<any>) {
    const { setState, state, value, locked, disabled, onChange } = args;

    if (locked || disabled) {
        return;
    }

    if (typeof onChange === 'function') {
        onChange(args);
    }

    if (isBoolean(value)) {
        setState(!state);
    }
}

/**
 * Internal hook to generalize checkbox onChange behavior. Used by
 * Checkbox and Switch. Since state will change every onChange, we don't
 * need to memozie this.
 */
export function useGenericChange<S>(args: ChangeArgs<S>) {
    return {
        onChange: () => onChange(args),
    };
}
