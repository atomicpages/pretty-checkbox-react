import * as React from 'react';
import { render } from '@testing-library/react';
import { PrettyComponent } from '../PrettyComponent';

describe('PrettyComponent tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<PrettyComponent onChange={jest.fn()} state={false} />).container;
        }).not.toThrow();
    });
});
