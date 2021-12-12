import { CommonProps } from '../../typings/PCRCommonProps';

const isBoolean = (e: unknown) => typeof e === 'boolean';
const isNullish = (e: unknown) => e === null || e === undefined;
const isIndeterminate = (e: unknown) => e === 'indeterminate';

/**
 * A generic way to setup controlled components by
 * removing  state hook return results, setting `checked`,
 * and `value` props too.
 */
export const useControlled = <S, P extends CommonProps<S>>(props: P) => {
  // remove state and state dispatch from the props
  // eslint-disable-next-line prefer-const
  let { checked, state, setState, value, defaultValue, ...rest } = props;

  // if a dispatcher is used, then we're good to run the rest
  // of the logic
  if (setState) {
    // if state is defined and checked is NOT defined
    // then use state to set the value of checked.
    if (
      (isBoolean(state) || isIndeterminate(state)) &&
      !isBoolean(checked) &&
      isNullish(checked)
    ) {
      checked = !!state;
    } else if (Array.isArray(state)) {
      // otherwise set checked true if the value is contained
      // within the state.
      checked = state.includes(value);
    } else if (isNullish(checked)) {
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

  return { checked, value, state, ...rest };
};
