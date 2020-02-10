import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Pretty } from '../Pretty';

describe('PrettyComponent tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Pretty onChange={jest.fn()} state={false} />).container;
        }).not.toThrow();
    });

    it.skip('should be keyboard interactive', () => {
        const mockChange = jest.fn();
        const { container } = render(<Pretty onChange={mockChange} state={false} />);

        act(() => {
            fireEvent.keyUp(container, { keyCode: 14 });
        });

        expect(mockChange).not.toHaveBeenCalled();

        act(() => {
            fireEvent.keyUp(container, { keyCode: 13 });
            fireEvent.keyUp(container, { keyCode: 32 });
        });

        expect(mockChange).toHaveBeenCalledTimes(2);
    });
});
