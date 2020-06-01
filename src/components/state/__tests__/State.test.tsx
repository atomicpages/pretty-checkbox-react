import * as React from 'react';
import { render } from '@testing-library/react';

import { State } from '../State';

describe('State tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<State>Hello</State>);
        }).not.toThrow();
    });

    it('should render the label', () => {
        const { queryByText } = render(<State>Hello</State>);
        expect(queryByText('Hello')).not.toBeNull();
    });

    it('should add colors', () => {
        const { getByTestId } = render(
            <State data-testid="test" color="danger">
                Danger!
            </State>
        );

        expect(getByTestId('test').className.includes('danger')).toBe(true);
    });
});
