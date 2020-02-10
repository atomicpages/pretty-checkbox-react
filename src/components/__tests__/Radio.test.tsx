import * as React from 'react';
import { render } from '@testing-library/react';
import { Radio } from '../Radio';

describe('Radio tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Radio value="test" state={false} onChange={jest.fn()} />).container;
        }).not.toThrow();
    });
});
