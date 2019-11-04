import * as React from 'react';
import { render, fireEvent, getByRole, cleanup } from '@testing-library/react';
import { Checkbox, CheckboxState } from '../Checkbox';
import { act } from 'react-dom/test-utils';

const mockUseCheckboxState = (initialState?: CheckboxState) => {
    let state = initialState;

    return {
        state,
        setState: jest.fn(args => {
            if (Array.isArray(state)) {
                state.length = 0;
                Array.prototype.push.apply(state, args);
            } else {
                state = args;
            }
        }),
    };
};

afterEach(cleanup);

describe('Checkbox tests', () => {
    describe('Checkbox smoke tests', () => {
        it('should render without errors', () => {
            expect(() => {
                render(<Checkbox {...mockUseCheckboxState()}>Hello, World</Checkbox>);
            }).not.toThrow();
        });

        it('should match the basic snapshot', () => {
            expect(
                render(<Checkbox {...mockUseCheckboxState()}>Hello, World</Checkbox>).container
            ).toMatchSnapshot();
        });
    });

    describe('Checkbox normal, locked, and disabled states', () => {
        it('should be checked when clicked', () => {
            const checkbox = mockUseCheckboxState();
            const { container } = render(<Checkbox {...checkbox}></Checkbox>);

            act(() => {
                fireEvent.click(getByRole(container, 'checkbox'));
            });

            expect(checkbox.setState).toHaveBeenCalled();
        });

        it('should ignore click events when disabled or locked', () => {
            const checkbox = mockUseCheckboxState();

            const disabledCheckbox = render(<Checkbox {...checkbox} disabled></Checkbox>);
            const lockedCheckbox = render(<Checkbox {...checkbox} locked></Checkbox>);

            act(() => {
                fireEvent.click(getByRole(disabledCheckbox.container, 'checkbox'));
                fireEvent.click(getByRole(lockedCheckbox.container, 'checkbox'));
            });

            expect(checkbox.setState).not.toHaveBeenCalled();

            expect(disabledCheckbox.container).toMatchSnapshot();
            expect(lockedCheckbox.container).toMatchSnapshot();
        });
    });

    describe('Indeterminate Checkbox', () => {
        it('indeterminate attribute should be set properly', () => {
            const ref = React.createRef<HTMLInputElement>();
            const checkbox = mockUseCheckboxState();

            const { container, rerender } = render(<Checkbox ref={ref} {...checkbox}></Checkbox>);

            act(() => {
                fireEvent.click(getByRole(container, 'checkbox'));
            });

            expect(ref.current).toBeInstanceOf(HTMLInputElement);

            if (ref.current) {
                expect(ref.current.indeterminate).toBe(false);

                rerender(<Checkbox ref={ref} {...checkbox} state="indeterminate"></Checkbox>);

                expect(ref.current.indeterminate).toBe(true);
                rerender(<Checkbox ref={ref} {...checkbox} state={false}></Checkbox>);

                expect(ref.current.indeterminate).toBe(false);
            }
        });
    });
});
