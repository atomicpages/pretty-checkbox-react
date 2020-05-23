import * as React from 'react';
import { render } from '@testing-library/react';
import { Group } from '../Group';

describe('Group tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Group baseId="test">Hello</Group>).container;
        }).not.toThrow();
    });

    it('should render as a different element', () => {
        const { getByTestId } = render(
            <Group baseId="test" as="section" data-testid="test_section">
                Hello
            </Group>
        );

        expect(getByTestId('test_section').tagName).toEqual('SECTION');
    });
});
