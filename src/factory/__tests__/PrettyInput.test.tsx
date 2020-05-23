import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PrettyInput } from '../PrettyInput';

const createComponent = (props: any = {}) => {
    const onChange = jest.fn();

    return {
        onChange,
        component: render(<PrettyInput type="checkbox" onChange={onChange} {...props} />),
    };
};

describe('PrettyInput tests', () => {
    it('should render without errors', () => {
        expect(() => {
            createComponent().component;
        }).not.toThrow();
    });

    it('should call onChange', () => {
        const {
            component: { container },
            onChange,
        } = createComponent();

        // @ts-ignore
        fireEvent.click(container.querySelector('input'));

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
