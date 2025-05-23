/// <reference types="cypress" />

describe('Basket', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.setCookie('session_id', 'fake-session');
      cy.visit('/basket');
    });
  
    afterEach(function () {
      if (this.currentTest.state === 'failed') {
        const name = this.currentTest.title.replace(/\s+/g, '_');
        cy.screenshot(`failed_basket_${name}`);
      }
    });
  
    it('отображает содержимое корзины', () => {
      cy.get('[data-testid="basket-page"]').should('exist');
    });
  });
  