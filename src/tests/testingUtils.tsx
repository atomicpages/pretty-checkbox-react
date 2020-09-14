import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

export const getByValue = (container: HTMLElement, value: string) => {
    const res = container.querySelector(`[value=${value}]`);

    if (!res) {
        throw new Error(`No element found with value: ${value}`);
    }

    return res;
};

const createComponent = (component: any, hook: Function, args: Record<string, any> = {}) => (
    p = {}
) => {
    const props = hook(args);

    return React.createElement(component, {
        ...p,
        ...props,
        'data-testid': 'pretty',
    });
};

/**
 * A generic smoke test creation function which checks:
 * 1. That it (i.e. our component) renders and doesn't throw an error
 * 2. It can be used as an uncontrolled component with refs properly attached
 * 3. It can be used as a controlled component
 * 4. It connects with state hooks as expected
 */
export const createSmokeTests = (component: any, hook?: Function) => {
    it('should render without errors', () => {
        expect(() => {
            render(React.createElement(component));
        }).not.toThrow();
    });

    it('should forward refs', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(React.createElement(component, { ref }));
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });

    it('should work as a controlled component', () => {
        const onChange = jest.fn();

        const { getByTestId } = render(
            React.createElement(component, { onChange, 'data-testid': 'pretty' })
        );

        fireEvent.click(getByTestId('pretty'), { currentTarget: { value: '' } });
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should integrate with state hooks', () => {
        expect(hook).toBeInstanceOf(Function);

        // if to make tsc happy
        if (hook) {
            const onChange = jest.fn();

            const Wrapper = createComponent(component, hook, { onChange });

            const { getByTestId } = render(<Wrapper />);
            fireEvent.click(getByTestId('pretty'));

            expect(onChange).toHaveBeenCalledTimes(1);
        }
    });
};
