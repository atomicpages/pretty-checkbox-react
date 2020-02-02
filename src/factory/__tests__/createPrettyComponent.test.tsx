import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createPrettyComponent } from '../createPrettyComponent';

const createComponent = (
    userProps: any = {}
): {
    container: HTMLElement;
    props: {
        onChange: jest.Mock;
        state: any;
    };
} => {
    const props = {
        state: false,
        onChange: jest.fn(),
        role: 'checkbox',
        type: 'checkbox',
        ...userProps,
    };

    const { container } = render(createPrettyComponent(props));

    return {
        container,
        props,
    };
};

describe('createPrettyComponent tests', () => {
    it('should render without errors', () => {
        expect(() => {
            createComponent().container;
        }).not.toThrow();
    });

    it('it should match the base snapshot', () => {
        expect(createComponent().container).toMatchSnapshot();
    });

    it.skip('should trigger onChange when input is changed', () => {
        const { container, props } = createComponent();
        const input = container.querySelector('input');

        if (input) {
            fireEvent.change(input, { target: { value: '' } });
        }

        expect(props.onChange).toHaveBeenCalledTimes(1);
    });
});
