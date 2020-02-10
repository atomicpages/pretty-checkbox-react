import * as React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Checkbox state={false} onChange={jest.fn()} />).container;
        }).not.toThrow();
    });
});
