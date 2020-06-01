const isBoolean = (e: unknown) => typeof e === 'boolean';
const isNullish = (e: unknown) => e === null || e === undefined;

/**
 * A generic way to setup controlled components by
 * removing  state hook return results, setting `checked`,
 * and `value` props too.
 */
export const useControlled = <P = any>(props: P) => {
    // remove state and state disaptch from the props
    // @ts-ignore
    // eslint-disable-next-line prefer-const
    let { checked, state, setState, value, defaultValue, ...rest } = props;

    // if a disaptcher is used, then we're good to run the rest
    // of the logic
    if (setState) {
        // if state is defined and vchecked is NOT defined
        // then use state to set the value of checked.
        if (isBoolean(state) && !isBoolean(checked) && isNullish(checked)) {
            checked = (state as unknown) as boolean;
        } else if (Array.isArray(state)) {
            // otherwise set checked true if the value is contained
            // within the state.
            checked = state.includes(value);
        } else {
            // The type is not a boolean and is probably a string.
            // If you're attempting to use this hook in a different
            // way, then you should considering controlling the component
            // yourself. Object.is used here just in case ;)
            checked = Object.is(state, value);
        }

        // preset the value prop in controlled mode to an empty
        // string to prevent 'on' values. Use the defaultValue
        // if provided
        if (isNullish(value)) {
            value = defaultValue || '';
        }
    }

    return { checked, value, ...rest };
};
