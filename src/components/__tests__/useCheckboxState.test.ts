import { renderHook, act } from '@testing-library/react-hooks';
import { useCheckboxState } from '../Checkbox';

describe('useCheckboxState tests', () => {
    it('should update when change is called', () => {
        const { result } = renderHook(() => useCheckboxState());

        expect(result.current).toMatchObject({
            state: expect.any(Boolean),
            setState: expect.any(Function),
            onChange: expect.any(Function),
        });

        act(() => {
            result.current.onChange({ currentTarget: { value: '' } } as any);
        });

        expect(result.current.state).toBe(true);

        act(() => {
            result.current.onChange({ currentTarget: { value: '' } } as any);
        });

        expect(result.current.state).toBe(false);
    });

    it('should handle arrays of items', () => {
        const { result } = renderHook(() => useCheckboxState({ state: [] }));

        act(() => {
            result.current.onChange({ currentTarget: { value: 'oranges' } } as any);
        });

        expect(result.current.state).toBeInstanceOf(Array);
        expect(result.current.state).toEqual(['oranges']);

        act(() => {
            result.current.onChange({ currentTarget: { value: 'apples' } } as any);
        });

        expect(result.current.state).toEqual(['oranges', 'apples']);

        act(() => {
            result.current.onChange({ currentTarget: { value: 'oranges' } } as any);
        });

        expect(result.current.state).toEqual(['apples']);
    });
});
