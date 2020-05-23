import * as React from 'react';
import { render } from '@testing-library/react';
import { PrettyLabel } from '../PrettyLabel';

describe('PrettyLabel tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<PrettyLabel />).container;
        }).not.toThrow();
    });

    it('should render children inside the label', () => {
        const { getByText, container } = render(<PrettyLabel baseId="abc">Testing</PrettyLabel>);
        getByText('Testing');
        expect(container).toMatchSnapshot();
    });

    it('should append colors to the root div', () => {
        expect(
            render(<PrettyLabel color="danger">Testing</PrettyLabel>).container
        ).toMatchSnapshot();
    });
});
