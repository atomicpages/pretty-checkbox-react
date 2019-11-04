import * as React from 'react';
import { render, act, fireEvent, getByRole } from '@testing-library/react';
import { Radio, RadioState } from '../Radio';

const mockUseRadioState = (initialState?: RadioState) => {
    let state = initialState;

    return {
        state,
        setState: jest.fn(args => {
            state = args;
        }),
    };
};

describe('Radio tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(
                <Radio name="demo" {...mockUseRadioState()}>
                    Hello
                </Radio>
            );
        }).not.toThrow();
    });

    it.skip('should update the state when clicked', () => {
        const radioState = mockUseRadioState();

        const { container } = render(
            <Radio name="demo" {...radioState}>
                Hello
            </Radio>
        );

        act(() => {
            fireEvent.click(getByRole(container, 'radio'));
        });

        expect(radioState.setState).toHaveBeenCalled();
    });

    it.skip('should call consumer provided change', () => {
        const onChange = jest.fn();

        const { container } = render(
            <Radio name="demo" onChange={onChange} {...mockUseRadioState()}>
                Hello
            </Radio>
        );

        act(() => {
            fireEvent.click(getByRole(container, 'radio'));
        });

        expect(onChange).toHaveBeenCalled();
    });
});
