import { renderHook } from '@testing-library/react-hooks';
import { useCheckboxRadioProps } from '../useCheckboxRadioProps';

describe('useCheckboxRadioProps tests', () => {
  it('should remove checkbox and radio props and filter out common props', () => {
    const { result } = renderHook(() =>
      useCheckboxRadioProps({
        shape: 'curve',
      })
    );

    expect(result.current).toMatchObject({
      shape: 'curve',
      htmlProps: expect.any(Object),
    });
  });
});
