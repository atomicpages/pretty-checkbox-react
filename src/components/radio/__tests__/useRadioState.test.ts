import { renderHook, act } from '@testing-library/react-hooks';
import { useRadioState } from '../useRadioState';

describe('useRadioState tests', () => {
  it('should toggle state values when a change occurs', () => {
    const { result } = renderHook(() => useRadioState());

    expect(result.current.state).toBe(false);

    act(() => {
      result.current.onChange({ currentTarget: { value: '' } } as any);
    });

    expect(result.current.state).toBe(true);
  });

  it('should select the value when a change occurs', () => {
    const { result } = renderHook(() => useRadioState());

    act(() => {
      result.current.onChange({ currentTarget: { value: 'apples' } } as any);
    });

    expect(result.current.state).toBe('apples');
  });

  it('should call a user-provided onChange handler', () => {
    const args = { currentTarget: { value: '' } };
    const onChange = jest.fn();

    const { result } = renderHook(() => useRadioState({ onChange }));

    act(() => {
      result.current.onChange(args as any);
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(args);
  });
});
