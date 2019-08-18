import React from 'react';

import { render, cleanup, getByTestId, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Checkbox from '../Checkbox';

afterEach(cleanup);

describe('Checkbox tests', function () {
    describe('Basic Checkbox usage', function () {
        it('should behave as a checkbox', function () {
            const handleChange = jest.fn();
            const { container } = render(<Checkbox className="dummy-selector" id="foo" onChange={handleChange} />);

            expect(getByTestId(container, 'pcr-input')).toHaveAttribute('type', 'checkbox');
            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('dummy-selector');

            fireEvent.click(getByTestId(container, 'pcr-input'));

            expect(handleChange).toHaveBeenCalled();
            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(getByTestId(container, 'pcr-input').checked).toBe(true);

            fireEvent.click(getByTestId(container, 'pcr-input'));

            expect(handleChange).toHaveBeenCalledTimes(2);
            expect(getByTestId(container, 'pcr-input').checked).toBe(false);
            expect(container).toMatchSnapshot();
        });

        it('should render icons with the correct classNames', function () {
            let c1 = render(<Checkbox icon={<i className="mdi mdi-check" />}>Hello there.</Checkbox>).container;
            let c2 = render(<Checkbox svg={<i className="mdi mdi-check" />}>Hello there.</Checkbox>).container;
            let c3 = render(<Checkbox image={<i className="mdi mdi-check" />}>Hello there.</Checkbox>).container;

            expect(getByTestId(c1, 'pcr-wrapper')).toHaveClass('p-icon');
            expect(getByTestId(c2, 'pcr-wrapper')).toHaveClass('p-svg');
            expect(getByTestId(c3, 'pcr-wrapper')).toHaveClass('p-image');
        });
    });

    describe('Checkbox errors', function () {
        it('should throw when using an unsupported animation', function () {
            expect(() => render(<Checkbox animation="tada">Hello there.</Checkbox>)).toThrow();
        });
    });

    describe('Checkbox supports animations', function () {
        it('should have the correct smooth className', function () {
            const { container } = render(<Checkbox shape="round" color="primary" animation="smooth">Monday</Checkbox>);
            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('p-smooth');
        });

        it('should have the correct jelly className', function () {
            const { container } = render(<Checkbox shape="round" color="primary" icon={<i className="mdi mdi-check" />} animation="jelly">Interested</Checkbox>);
            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('p-jelly');
        });

        it('should have the correct tada className', function () {
            const { container } = render(<Checkbox shape="round" color="primary-o" icon={<i className="mdi mdi-heart" />} animation="tada">Good</Checkbox>);
            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('p-tada');
        });

        it('should have the correct rotate className', function () {
            const { container } = render(<Checkbox color="success" icon={<i className="mdi mdi-check" />} animation="rotate">Friends</Checkbox>);
            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('p-rotate');
        });

        it('should have the correct pulse className', function () {
            const { container } = render(<Checkbox color="warning-o" animation="pulse">Family</Checkbox>);
            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('p-pulse');
        });
    });

    describe('Checkbox indeterminate', function () {
        it('should provide style hooks when checkbox is an indeterminate', function () {
            const { container } = render(<Checkbox indeterminate>Hello there.</Checkbox>);

            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('p-has-indeterminate');
        });
    });

    describe('Checkbox ref tests', function() {
        it('should accept custom refs', function () {
            const ref = React.createRef();

            render(<Checkbox ref={ref} />);
            expect(ref.current).toBeDefined();
            expect(ref.current).toBeInstanceOf(HTMLInputElement);
        });
    });
});
