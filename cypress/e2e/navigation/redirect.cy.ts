/// <reference types="cypress" />

describe('Routing', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('redirects from / to /login and shows login form', () => {
    // 1) Проверяем, что URL действительно /login
      cy.url().should('include', '/login');
       // 2) Проверяем, что на странице логина отрисовалась форма
       cy.get('[data-testid="username"]').should('exist');
       cy.get('[data-testid="password"]').should('exist');
       cy.get('[data-testid="login-btn"]').should('contain', 'Enter');
    });
  });
  