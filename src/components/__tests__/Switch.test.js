import React from 'react';

import { render, cleanup, getByLabelText, getByTestId, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Switch from '../Switch';

afterEach(cleanup);

describe('Switch tests', function () {
    describe('Switch usage as a checkbox (default behavior)', function () {
        it('should work with basic usage', function () {
            const handleChange = jest.fn();
            const { container } = render(<Switch id="demo" onChange={handleChange}>hello there</Switch>);

            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('p-outline');
            expect(getByTestId(container, 'pcr-input')).toHaveAttribute('id', 'demo');
            expect(getByLabelText(container, 'hello there')).toBeDefined();

            fireEvent.click(getByTestId(container, 'pcr-input'));

            expect(handleChange).toHaveBeenCalled();
            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(getByTestId(container, 'pcr-input').checked).toBe(true);
        });
    });

    describe('Switch usage as a radio', function () {
        it('should behave as a radio', function () {
            const handleChange = jest.fn();
            const { container } = render(<Switch id="foo" shape="slim" type="radio" onChange={handleChange} />);

            expect(getByTestId(container, 'pcr-input')).toHaveAttribute('type', 'radio');

            fireEvent.click(getByTestId(container, 'pcr-input'));

            expect(handleChange).toHaveBeenCalled();
            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(getByTestId(container, 'pcr-input').checked).toBe(true);

            fireEvent.click(getByTestId(container, 'pcr-input'));

            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(getByTestId(container, 'pcr-input').checked).toBe(true);
            expect(container).toMatchSnapshot();
        });

        it('should behave as a radio group', function () {
            const handleChange = jest.fn();

            const { container } = render(
                <>
                    <Switch id="demo" type="radio" name="radio-1" value="r1" onChange={handleChange}>Hello there.</Switch>
                    <Switch id="demo" type="radio" name="radio-1" value="r2" onChange={handleChange}>General Kenobi. You are a bold one.</Switch>
                    <Switch id="demo" type="radio" name="radio-1" value="r3" onChange={handleChange}>Your move.</Switch>
                </>
            );

            const r1 = container.firstChild.firstChild;
            const r2 = container.firstChild.nextSibling.firstChild;
            const r3 = container.firstChild.nextSibling.nextSibling.firstChild;

            fireEvent.click(r1);

            expect(handleChange).toHaveBeenCalled();
            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(r1.checked).toBe(true);

            fireEvent.click(r2);

            expect(handleChange).toHaveBeenCalledTimes(2);
            expect(r1.checked).toBe(false);
            expect(r2.checked).toBe(true);

            fireEvent.click(r3);

            expect(handleChange).toHaveBeenCalledTimes(3);
            expect(r1.checked).toBe(false);
            expect(r2.checked).toBe(false);
            expect(r3.checked).toBe(true);
            expect(container).toMatchSnapshot();
        });
    });

    describe('Switch errors', function () {
        it('should throw when type is not defined', function () {
            expect(() => render(<Switch id="demo" type={null}>hello there</Switch>)).toThrow();
        });

        it('should throw when shape is undefined', function () {
            expect(() => render(<Switch id="demo" shape={null}>hello there</Switch>)).toThrow();
        });

        it('should throw when an incorrect shape is used', function () {
            expect(() => render(<Switch id="demo" shape="curve">hello there</Switch>)).toThrow();
        });

        it('should throw when an incorrect animation is used', function () {
            expect(() => render(<Switch id="demo" animation="pulse" >hello there</Switch>)).toThrow();
        });
    });

    describe('Switch ref tests', function() {
        it('should accept custom refs', function () {
            const ref = React.createRef();

            render(<Switch ref={ref} />);
            expect(ref.current).toBeDefined();
            expect(ref.current).toBeInstanceOf(HTMLInputElement);
        });
    });
});
