import * as React from 'react';
import { render, act, fireEvent, getByRole } from '@testing-library/react';
import { Switch, SwitchState } from '../Switch';

const mockUseSwitchState = (initialState?: SwitchState) => {
    let state = initialState;

    return {
        state,
        setState: jest.fn(args => {
            state = args;
        }),
    };
};

describe('Switch tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(
                <Switch name="demo" {...mockUseSwitchState()}>
                    Hello
                </Switch>
            );
        }).not.toThrow();
    });

    it.skip('should update the state when clicked', () => {
        const radioState = mockUseSwitchState();

        const { container } = render(
            <Switch name="demo" {...radioState}>
                Hello
            </Switch>
        );

        act(() => {
            fireEvent.click(getByRole(container, 'radio'));
        });

        expect(radioState.setState).toHaveBeenCalled();
    });

    it.skip('should call consumer provided change', () => {
        const onChange = jest.fn();

        const { container } = render(
            <Switch name="demo" onChange={onChange} {...mockUseSwitchState()}>
                Hello
            </Switch>
        );

        act(() => {
            fireEvent.click(getByRole(container, 'radio'));
        });

        expect(onChange).toHaveBeenCalled();
    });
});
