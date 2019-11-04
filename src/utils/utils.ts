import { ReactComponentElement } from '../../playground/node_modules/@types/react';
import { BaseProps } from '../typings/BaseProps';

const __DEV__ = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
const alreadyWarned: { [key: string]: Date } = {};

/**
 * Undefined `value` attributes is a boolean.
 */
export const isBoolean = (value?: string) => typeof value === 'undefined';

/**
 * Small warn wrapper.
 * @see https://github.com/i18next/react-i18next/blob/master/src/utils.js
 */
export function warn(...args: string[]) {
    if (console && console.warn && __DEV__) {
        if (typeof args[0] === 'string') {
            args[0] = `pcr:: ${args[0]}`;
        }

        console.warn(...args);
    }
}

/**
 * Warn about issues only once.
 * @see https://github.com/i18next/react-i18next/blob/master/src/utils.js
 */
export function warnOnce(...args: string[]) {
    if (__DEV__) {
        if (typeof args[0] === 'string' && alreadyWarned[args[0]]) {
            return;
        }

        if (typeof args[0] === 'string') {
            alreadyWarned[args[0]] = new Date();
        }

        warn(...args);
    }
}

export const isChecked = (checked: boolean | undefined, state: any, value?: string) => {
    if (typeof checked !== 'undefined') {
        return checked;
    }

    if (isBoolean(value)) {
        return Boolean(state);
    }

    return (state || []).indexOf(value) !== -1;
};

/**
 * Merges consumer-provided refs with internal refs. This allows us to control the logic
 * that needs to be controlled while still providing refs to the consumer.
 */
export function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
    const filteredRefs: React.Ref<T>[] = refs.filter(Boolean) as React.Ref<T>[];

    if (!filteredRefs.length) {
        return null;
    }

    if (filteredRefs.length === 1) {
        return filteredRefs[0];
    }

    return (instance: T) => {
        let ref;

        for (let i = 0; i < filteredRefs.length; i++) {
            ref = filteredRefs[i];

            if (typeof ref === 'function') {
                ref(instance);
            } else if (ref) {
                (ref as React.MutableRefObject<T>).current = instance;
            }
        }
    };
}

export function isDefaultStyle({
    icon,
    animation,
    isSwitch,
}: {
    icon?: ReactComponentElement<any, HTMLElement>;
    animation?: string;
    isSwitch?: boolean;
}) {
    if (
        animation === 'tada' ||
        animation === 'jelly' ||
        animation === 'rotate' ||
        animation === 'pulse'
    ) {
        return false;
    }

    return !(icon || isSwitch);
}

export function getChecked<S>(options: BaseProps<S>) {
    if (typeof options.value === 'undefined') {
        return Boolean(options.state);
    }

    const state: any[] = Array.isArray(options.state) ? options.state : [];

    return state.indexOf(options.value) !== -1;
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
