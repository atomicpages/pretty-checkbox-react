import React from 'react';

import { render, cleanup, getByTestId, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Radio from '../Radio';

afterEach(cleanup);

describe('Radio tests', function () {
    describe('Radio usage as a radio', function () {
        it('should behave as a radio', function () {
            const handleChange = jest.fn();
            const { container } = render(<Radio id="foo" onChange={handleChange} />);

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
                    <Radio id="demo" name="radio-1" value="r1" onChange={handleChange}>Hello there.</Radio>
                    <Radio id="demo" name="radio-1" value="r2" onChange={handleChange}>General Kenobi. You are a bold one.</Radio>
                    <Radio id="demo" name="radio-1" value="r3" onChange={handleChange}>Your move.</Radio>
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

        it('should render icons with the correct classNames', function () {
            let r1 = render(<Radio icon={<i className="mdi mdi-check" />}>Hello there.</Radio>).container;
            let r2 = render(<Radio svg={<i className="mdi mdi-check" />}>Hello there.</Radio>).container;
            let r3 = render(<Radio image={<i className="mdi mdi-check" />}>Hello there.</Radio>).container;

            expect(getByTestId(r1, 'pcr-wrapper')).toHaveClass('p-icon');
            expect(getByTestId(r2, 'pcr-wrapper')).toHaveClass('p-svg');
            expect(getByTestId(r3, 'pcr-wrapper')).toHaveClass('p-image');
        });
    });

    describe('Radio ref tests', function() {
        it('should accept custom refs', function () {
            const ref = React.createRef();

            render(<Radio ref={ref} />);
            expect(ref.current).toBeDefined();
            expect(ref.current).toBeInstanceOf(HTMLInputElement);
        });
    });
});
