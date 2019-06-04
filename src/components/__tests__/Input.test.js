import React from 'react';

import { render, cleanup, getByTestId } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Input from '../Input';

afterEach(cleanup);

describe('Input tests', function() {
    describe('Input custom rendering', function() {
        it('should support custom rendering via render prop and children render function', function() {
            const { container, rerender } = render(
                <Input type="checkbox">
                    {() => <p data-testid="custom-test">Hello</p>}
                </Input>
            );
            expect(() => getByTestId(container, 'custom-test')).not.toThrow();

            rerender(
                <Input
                    type="checkbox"
                    render={() => <p data-testid="custom-test">Hello</p>}
                />
            );
            expect(() => getByTestId(container, 'custom-test')).not.toThrow();
            expect(container).toMatchSnapshot();
        });
    });

    describe('Input errors', function() {
        it('should throw when svg, image, and icon are used in combination', function() {
            console.error = jest.fn(); // sshhhhhh

            expect(() =>
                render(
                    <Input icon={<i />} svg={<svg />}>
                        Hello there.
                    </Input>
                )
            ).toThrow();
        });
    });

    describe('Input ref tests', function() {
        it('should accept custom refs', function () {
            const ref = React.createRef();

            render(<Input ref={ref} />);
            expect(ref.current).toBeDefined();
            expect(ref.current).toBeInstanceOf(HTMLInputElement);
        });
    });

    describe('Input className auto prefix', function() {
        it('should prefix colors', function() {
            const { container } = render(
                <Input color="primary">Hello there.</Input>
            );

            expect(getByTestId(container, 'pcr-state')).toHaveClass(
                'p-primary'
            );
        });

        it('should prefix animations', function() {
            const { container } = render(
                <Input animation="smooth">Hello there.</Input>
            );

            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass(
                'p-smooth'
            );
        });

        it('should prefix styles', function() {
            const { container } = render(
                <Input style="fill">Hello there.</Input>
            );

            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass('p-fill');
        });

        it('should prefix utilities', function() {
            const { container } = render(
                <Input bigger locked>
                    Hello there.
                </Input>
            );

            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass(
                'p-locked'
            );

            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass(
                'p-bigger'
            );
        });

        it('should prefix plain', function() {
            const { container } = render(<Input plain>Hello there.</Input>);

            expect(getByTestId(container, 'pcr-wrapper')).toHaveClass(
                'p-plain'
            );
        });
    });
});
