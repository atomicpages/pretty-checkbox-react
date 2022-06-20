import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from '../Checkbox';
import { useCheckboxState } from '../useCheckboxState';

import { createSmokeTests, getByValue } from '../../../tests/testingUtils';

describe('Checkbox tests', () => {
  createSmokeTests(Checkbox, useCheckboxState);

  it('should work with an array of items', () => {
    const cloneState: string[] = [];

    const Wrapper = () => {
      const checkbox: any = useCheckboxState({ state: [] });

      cloneState.length = 0;
      Array.prototype.push.apply(cloneState, checkbox.state);

      return (
        <>
          <Checkbox {...checkbox} value="apples">
            Apples
          </Checkbox>
          <Checkbox {...checkbox} value="oranges">
            Oranges
          </Checkbox>
          <Checkbox {...checkbox} value="bananas">
            Bananas
          </Checkbox>
        </>
      );
    };

    const { container } = render(<Wrapper />);
    fireEvent.click(getByValue(container as HTMLElement, 'apples'));

    expect(cloneState).toEqual(['apples']);

    fireEvent.click(getByValue(container as HTMLElement, 'bananas'));
    expect(cloneState).toEqual(['apples', 'bananas']);

    fireEvent.click(getByValue(container as HTMLElement, 'apples'));
    expect(cloneState).toEqual(['bananas']);

    fireEvent.click(screen.getByLabelText('Apples'));
    expect(cloneState).toEqual(['bananas', 'apples']);
  });

  it('should support indeterminate state via state hook', () => {
    const Wrapper = () => {
      const checkbox: any = useCheckboxState({ state: 'indeterminate' });

      return (
        <Checkbox {...checkbox} data-testid="pretty">
          Apples
        </Checkbox>
      );
    };

    render(<Wrapper />);
    expect(screen.getByTestId('pretty').getAttribute('aria-checked')).toBe(
      'mixed'
    );
  });
});
