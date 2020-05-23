/// <reference path="../support/index.d.ts" />

describe('Checkbox spec', () => {
    it('Successfully loads', () => {
        cy.visit('http://localhost:5000/');
    });

    it('should work as a basic controlled component', () => {
        cy.queryByText('Hello, World')
            .closest('.pretty')
            .click()
            .find('input')
            .should('be.checked');
    });

    it('should not check a disabled or locked checkbox', () => {
        cy.queryByText('Disabled Checkbox')
            .closest('.pretty')
            .click()
            .find('input')
            .should('not.be.checked');

        cy.queryByText('Locked Checkbox')
            .closest('.pretty')
            .click()
            .find('input')
            .should('not.be.checked');
    });

    it('should work as an uncontrolled input', () => {
        cy.queryByText('Do you agree to the terms and conditions?')
            .closest('.pretty')
            .click()
            .find('input')
            .should('be.checked');
    });

    it('should support colors', () => {
        cy.queryByText('Colors')
            .parent()
            .find('.pretty')
            .click({ multiple: true });

        cy.queryByText('Colors', { exact: true })
            .parent()
            .find('.pretty label')
            .after('background-color')
            .then((colors: string[]) => {
                const c = [
                    'rgb(66, 139, 202)',
                    'rgb(92, 184, 92)',
                    'rgb(91, 192, 222)',
                    'rgb(240, 173, 78)',
                    'rgb(217, 83, 79)',
                    'rgb(66, 139, 202)',
                    'rgb(92, 184, 92)',
                    'rgb(91, 192, 222)',
                    'rgb(240, 173, 78)',
                    'rgb(217, 83, 79)',
                ];

                expect(colors.length).equal(c.length);
                expect(colors).to.deep.equal(c);
            });
    });
});
