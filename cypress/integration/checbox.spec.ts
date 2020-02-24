describe('Checkbox spec', () => {
    it('Successfully loads', () => {
        cy.visit('http://localhost:9000/');
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

    it('should supports colors', () => {
        cy.queryByText('Colors')
            .parent()
            .find('.pretty')
            .click({ multiple: true })
            .find('label::before');
    });
});
