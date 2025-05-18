describe('Покупательский поток', () => {
    it('логин → каталог → корзина', () => {
      cy.visit('/login');
  
      cy.get('[data-testid="username"]').type('user');
      cy.get('[data-testid="password"]').type('pass');
      cy.get('[data-testid="login-btn"]').click();
  
      cy.url().should('include', '/search');
      cy.get('[data-testid="add-to-basket"]').first().click();
  
      cy.visit('/basket');
      cy.get('[data-testid="basket-page"]').should('exist');
    });
  });
  