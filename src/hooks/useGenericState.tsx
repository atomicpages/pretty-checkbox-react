import * as React from 'react';

export function useGenericState<T>(initialState: T) {
    const [state, setState] = React.useState<T>(initialState);

    return {
        state,
        setState,
    };
}
