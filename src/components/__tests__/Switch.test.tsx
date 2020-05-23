import * as React from 'react';
import { render } from '@testing-library/react';
import { Switch } from '../Switch';

describe('Switch tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Switch state={false} onChange={jest.fn()} />).container;
        }).not.toThrow();
    });
});
