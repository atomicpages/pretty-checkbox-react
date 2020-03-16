// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        pseudo(selector: string, property: string): Chainable<Element>;
        before(property: string): Chainable<string[]>;
        after(property: string): Chainable<string[]>;
    }
}
