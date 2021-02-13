import { renderHook, act } from '@testing-library/react-hooks';
import { useAriaChecked } from '../useAriaChecked';

describe('useAriaChecked tests', () => {
    it('should set the correct aria checked status for uncontrolled components', () => {
        const setAttribute = jest.fn();
        const addEventListener = jest.fn();

        const { result, rerender } = renderHook(args => useAriaChecked(args), {
            initialProps: {
                checked: undefined as any,
            },
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        result.current.current = {
            checked: true,
            setAttribute,
            addEventListener,
            removeEventListener: () => null,
        } as any;

        rerender({ checked: false });

        expect(setAttribute).toHaveBeenCalledWith('aria-checked', 'true');
        expect(addEventListener).toHaveBeenCalledWith('change', expect.any(Function));

        act(() => {
            const [, handler] = addEventListener.mock.calls[0];
            handler({ currentTarget: result.current.current });
        });
    });
});
