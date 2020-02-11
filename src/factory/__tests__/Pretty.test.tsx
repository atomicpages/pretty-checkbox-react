import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Pretty } from '../Pretty';

describe('PrettyComponent tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Pretty onChange={jest.fn()} state={false} />).container;
        }).not.toThrow();
    });

    it('should be keyboard interactive', () => {
        const mockChange = jest.fn();
        const { getByTestId } = render(
            <Pretty onChange={mockChange} state={false} data-testid="pretty" />
        );

        const pretty = getByTestId('pretty');

        act(() => {
            fireEvent.keyUp(pretty, { keyCode: 14 });
        });

        expect(mockChange).not.toHaveBeenCalled();

        act(() => {
            fireEvent.keyUp(pretty, { keyCode: 13 });
            fireEvent.keyUp(pretty, { keyCode: 32 });
        });

        expect(mockChange).toHaveBeenCalledTimes(2);
    });

    it('should be mixed when checkbox is indeterminate', () => {
        const { getByTestId } = render(
            <Pretty
                onChange={jest.fn()}
                state="indeterminate"
                data-testid="pretty"
                type="checkbox"
            />
        );

        expect(getByTestId('pretty').getAttribute('aria-checked')).toBe('mixed');
    });
});
