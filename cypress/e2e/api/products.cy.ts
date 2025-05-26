// cypress/e2e/api/products.cy.ts
/// <reference types="cypress" />

describe('API — Products', () => {
    it('GET /products returns a non-empty list', () => {
      cy.request('GET', 'http://localhost:4000/products')
        .its('body')
        .should('be.an', 'array')
        .and('have.length.greaterThan', 0);
    });
  });
  