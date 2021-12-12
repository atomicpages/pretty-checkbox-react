import { renderHook, act } from '@testing-library/react-hooks';
import { useCheckboxState } from '../useCheckboxState';

describe('useCheckboxState tests', () => {
  it('should initialize state as false when no initial state is provided', () => {
    const { result } = renderHook(() => useCheckboxState());
    expect(result.current.state).toBe(false);
  });

  it('should call user-defined change handler when provided', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => useCheckboxState({ onChange }));

    act(() => {
      result.current.onChange({
        currentTarget: {
          value: 'abc',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(onChange).toBeCalledWith({
      currentTarget: {
        value: 'abc',
      },
    });
  });

  it('state should return a boolean when value is empty', () => {
    const { result } = renderHook(() => useCheckboxState());

    act(() => {
      result.current.onChange({
        currentTarget: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.state).toBe(true);
  });

  it('use an array as the main model for multiple checkboxes', () => {
    const { result } = renderHook(() => useCheckboxState({ state: 'oranges' }));
    expect(result.current.state).toEqual(['oranges']);

    act(() => {
      result.current.onChange({
        currentTarget: {
          value: 'apples',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.state).toEqual(['oranges', 'apples']);

    act(() => {
      result.current.onChange({
        currentTarget: {
          value: 'apples',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.state).toEqual(['oranges']);
  });
});
