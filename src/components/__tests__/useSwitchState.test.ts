import { renderHook } from '@testing-library/react-hooks';
import { useSwitchState } from '../Switch';
import { sharedCheckboxAssertions } from './useCheckboxState.test';
import { sharedRadioAssertions } from './useRadioState.test';

describe('useRadioState tests', () => {
    it('should work as a checkbox', () => {
        const { result } = renderHook(() => useSwitchState());
        expect(result.current.type).toBe('checkbox');
        sharedCheckboxAssertions(result);
    });

    it('should work as a radio', () => {
        const { result } = renderHook(() => useSwitchState({ type: 'radio' }));
        expect(result.current.type).toBe('radio');
        sharedRadioAssertions(result);
    });
});
