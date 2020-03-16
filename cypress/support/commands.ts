/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

const PSEUDO_CONFIG: Cypress.CommandOptions = { prevSubject: 'element' };

function pseudo(elements: unknown[], property: string, selector: string) {
    return cy.window().then(win => {
        const styles = [];

        for (let i = 0; i < elements.length; i++) {
            // @ts-ignore
            styles.push(win.getComputedStyle(elements[i], selector)[property]);
        }

        return styles;
    });
}

Cypress.Commands.add('pseudo', PSEUDO_CONFIG, pseudo);
Cypress.Commands.add('before', PSEUDO_CONFIG, (e, p) => pseudo(e, p, 'before'));
Cypress.Commands.add('after', PSEUDO_CONFIG, (e, p) => pseudo(e, p, 'after'));
