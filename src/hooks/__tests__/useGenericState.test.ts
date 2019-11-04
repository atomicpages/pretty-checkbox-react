import { renderHook } from '@testing-library/react-hooks';
import { useGenericState } from '../useGenericState';

describe('useGenericState hook tests', () => {
    it('should store state and return an object', () => {
        const { result } = renderHook(() => useGenericState<boolean>(false));

        expect(result.current).toEqual(
            expect.objectContaining({
                state: expect.any(Boolean),
                setState: expect.any(Function),
            })
        );
    });
});
