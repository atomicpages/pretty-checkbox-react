import * as React from 'react';
import { render } from '@testing-library/react';
import { Pretty } from '../Pretty';

describe('PrettyComponent tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Pretty onChange={jest.fn()} state={false} />).container;
        }).not.toThrow();
    });
});
