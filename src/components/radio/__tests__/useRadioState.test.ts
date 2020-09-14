import { renderHook, act } from '@testing-library/react-hooks';
import { useRadioState } from '../useRadioState';

describe('useRadioState tests', () => {
    it('should toggle state values when a change occurs', () => {
        const { result } = renderHook(() => useRadioState());

        expect(result.current.state).toBe(false);

        act(() => {
            // @ts-ignore
            result.current.onChange({ currentTarget: { value: '' } });
        });

        expect(result.current.state).toBe(true);
    });

    it('should select the value when a change occurs', () => {
        const { result } = renderHook(() => useRadioState());

        act(() => {
            // @ts-ignore
            result.current.onChange({ currentTarget: { value: 'apples' } });
        });

        expect(result.current.state).toBe('apples');
    });

    it('should call a user-provided onChange handler', () => {
        const args = { currentTarget: { value: '' } };
        const onChange = jest.fn();

        const { result } = renderHook(() => useRadioState({ onChange }));

        act(() => {
            // @ts-ignore
            result.current.onChange(args);
        });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(args);
    });
});
