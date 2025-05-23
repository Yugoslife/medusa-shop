/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('/login');
    });
  
    afterEach(function () {
      if (this.currentTest.state === 'failed') {
        const name = this.currentTest.title.replace(/\s+/g, '_');
        cy.screenshot(`failed_login_${name}`);
      }
    });
  
    it('успешный вход', () => {
      cy.get('[data-testid="username"]').type('user');
      cy.get('[data-testid="password"]').type('pass');
      cy.get('[data-testid="login-btn"]').click();
      cy.url().should('include', '/search');
    });
  });
  