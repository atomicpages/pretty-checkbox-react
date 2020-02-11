import * as React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Checkbox state={false} onChange={jest.fn()} />).container;
        }).not.toThrow();
    });

    it('should allow users to supply custom values', () => {
        const { container } = render(
            <Checkbox state={false} onChange={jest.fn()} value="apples" />
        );

        // @ts-ignore
        expect(container.querySelector('input').getAttribute('value')).toEqual('apples');
    });

    it('should match the snapshot', () => {
        expect(
            render(<Checkbox state={false} onChange={jest.fn()} value="apples" />).container
        ).toMatchSnapshot();
    });
});
