import { renderHook, act } from '@testing-library/react-hooks';
import { useGenericState } from '../useGenericState';
import { useGenericChange } from '../useGenericChange';

describe('useGenericChange hook tests', () => {
    it('should store state and return an object', () => {
        const onChange = jest.fn();

        const { result } = renderHook(() =>
            useGenericChange<any>({
                ...useGenericState(false),
                onChange,
            })
        );

        expect(result.current).toEqual(
            expect.objectContaining({
                onChange: expect.any(Function),
            })
        );

        act(() => {
            result.current.onChange();
        });

        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({
                setState: expect.any(Function),
                state: expect.any(Boolean),
            })
        );
    });
});
