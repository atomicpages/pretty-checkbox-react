// @flow

import * as React from 'react';

const __DEV__ = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export function warn(...args: string[]): void {
    if (__DEV__ && console && console.warn) {
        if (typeof args[0] === 'string') {
            args[0] = `pretty-checkbox-react:: ${args[0]}`;
        }

        console.warn(...args);
    }
}

export function error(...args: string[]): void {
    if (__DEV__ && console && console.error) {
        if (typeof args[0] === 'string') {
            args[0] = `pretty-checkbox-react:: ${args[0]}`;
        }

        console.error(...args);
    }
}

const alreadyWarned: { [string]: Date } = {};

export function warnOnce(...args: string[]): void {
    if (!__DEV__ && typeof args[0] === 'string' && alreadyWarned[args[0]]) {
        return;
    }

    if (typeof args[0] === 'string') {
        alreadyWarned[args[0]] = new Date();
    }

    warn(...args);
}

export function mergeRefs(...refs: Array<React.Ref<any> | typeof undefined>) {
    const filteredRefs = refs.filter(Boolean);

    if (!filteredRefs.length) {
        return null;
    }

    if (filteredRefs.length === 0) {
        return filteredRefs[0];
    }

    return (instance: any) => {
        for (const ref of filteredRefs) {
            if (typeof ref === 'function') {
                ref(instance);
            } else if (ref) {
                // $FlowFixMe
                ref.current = instance;
            }
        }
    };
}

/**
 * In-place mutation of array.
 */
export function removeIndexFromArray(array: any[], index: number) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
    }

    return array;
}

/**
 * Determine if the icon type is valid or not.
 *
 * TODO: Check the actual JSX node to determine if the type is valid.
 */
export const isValidIconType = (type: string | null) =>
    !type || type === 'svg' || type === 'image' || type === 'icon';

export const isBoolean = (value?: string) => typeof value === 'undefined';

export const isChecked = (checked: ?boolean, state: any, value?: string) => {
    if (typeof checked !== 'undefined') {
        return checked;
    }

    if (isBoolean(value)) {
        return Boolean(state);
    }

    return (state || []).indexOf(value) !== -1;
};
