import { renderHook } from '@testing-library/react-hooks';
import { useCommonProps } from '../useCommonProps';

describe('useCommonProps', () => {
    it('should filter out non-html props', () => {
        const { result } = renderHook(() =>
            useCommonProps({
                locked: true,
                color: 'success',
                variant: 'thick',
                type: 'radio',
                readOnly: true,
            })
        );

        expect(result.current).toMatchObject({
            locked: true,
            color: 'success',
            variant: 'thick',
            htmlProps: {
                type: 'radio',
                readOnly: true,
            },
        });
    });

    it('should use a provided id prop instead of the generated one', () => {
        const { result } = renderHook(() =>
            useCommonProps({
                id: 'hello',
            })
        );

        expect(result.current).toMatchObject({
            id: 'hello',
            htmlProps: {},
        });
    });
});
