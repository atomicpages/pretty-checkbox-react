import { renderHook } from '@testing-library/react-hooks';
import { useIndeterminate } from '../useIndeterminate';

describe('useIndeterminate tests', () => {
    it("should set indeterminate when state is set to 'indeterminate'", () => {
        const { result, rerender } = renderHook(p => useIndeterminate(p), {
            initialProps: {
                state: false as any,
            },
        });

        // @ts-ignore
        result.current.ref.current = {};
        rerender({ state: 'indeterminate' });

        expect(result.current['aria-checked']).toBe('mixed');
    });

    it('should set indeterminate state when prop changes', () => {
        const { result, rerender } = renderHook(p => useIndeterminate(p), {
            initialProps: {
                state: undefined as any,
                indeterminate: false,
            },
        });

        // @ts-ignore
        result.current.ref.current = { checked: false };
        rerender({ indeterminate: true, state: undefined });

        expect(result.current['aria-checked']).toBe('mixed');
        expect(result.current.ref.current?.checked).toBe(true);
    });
});
