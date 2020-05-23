import * as React from 'react';
import { render } from '@testing-library/react';
import { RadioGroup } from '../Radio';

describe('RadioGroup tests', () => {
    it('render without errors', () => {
        expect(() => {
            render(<RadioGroup baseId="abc">abc</RadioGroup>).container;
        }).not.toThrow();
    });
});
