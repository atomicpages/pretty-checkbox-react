import { createInput, createLabel } from '../componentFactory';
import { CommonCheckboxRadioProps } from '../../types/CommonProps';

describe('componentFactory tests', () => {
    describe('createInput tests', () => {
        const props: CommonCheckboxRadioProps = {
            onChange: jest.fn(),
            disabled: false,
            locked: false,
            state: false,
            value: undefined,
            type: 'checkbox',
            name: undefined,
            checked: false,
        };

        it('should render without errors', () => {
            expect(() => {
                createInput(props);
            }).not.toThrow();
        });

        it('should match the snapshot', () => {
            expect(createInput(props)).toMatchSnapshot();
        });

        it('should be checked when rendered', () => {
            expect(
                createInput({
                    ...props,
                    state: 'abc',
                    checked: undefined,
                })
            ).toMatchSnapshot();
        });
    });

    describe('createLabel tests', () => {
        const props: CommonCheckboxRadioProps = {
            state: false,
            onChange: jest.fn(),
            icon: undefined,
            children: 'testing',
        };

        it('should render without errors', () => {
            expect(() => {
                createLabel(props);
            }).not.toThrow();
        });

        it('should match the snapshot', () => {
            expect(createLabel(props)).toMatchSnapshot();
        });
    });
});
