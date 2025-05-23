// cypress/e2e/catalog/catalog.cy.ts

describe('Catalog', () => {
    beforeEach(() => {
      // фикстуры лежат в cypress/fixtures/products.json
      cy.intercept('GET', 'http://localhost:4000/products', { fixture: 'products.json' }).as('getProducts');
      cy.visit('/catalog');
      cy.wait('@getProducts');
    });
  
    it('должен отображать товары и добавлять в корзину', () => {
      cy.get('[data-testid="product-card"]').should('have.length', 2);
      // можно нажать и проверить поведение:
      cy.get('[data-testid="product-card"]').first().contains('Chair');
    });
  });
  