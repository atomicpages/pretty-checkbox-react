import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../Icon';

import 'jest-dom/extend-expect';

describe('Icon tests', function() {
    it('should render an icon', function() {
        const { container, getByTestId } = render(
            <Icon type="icon" icon={<i data-testid="icon" className="mdi mdi-check" />} />
        );

        expect(getByTestId('icon')).toHaveClass('icon');
        expect(container).toMatchSnapshot();
    });

    it('should work with icon is null', function() {
        expect(() => {
            render(<Icon type="icon" icon={null} />);
        }).not.toThrow();
    });

    it('should show an error when icon type is invalid', function () {
        global.console.error = jest.fn();

        const { container } = render(
            <Icon type="dummy" icon={<i data-testid="icon" className="mdi mdi-check" />} />
        );

        expect(global.console.error).toHaveBeenCalled();
    });
});
