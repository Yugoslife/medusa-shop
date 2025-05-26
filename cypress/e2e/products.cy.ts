/// <reference types="cypress" />

describe('Catalog page', () => {
    it('loads products from real API and shows at least one', () => {
      // 1) Переходим на страницу каталога
      cy.visit('/catalog');
  
      // 2) Ждём, пока React сделает GET /products
      //    (если хотим, можно пропустить cy.wait и просто подождать элемент)
      // 3) Проверяем, что на странице есть хотя бы одна карточка
      cy.get('[data-testid="product-card"]')
        .its('length')
        .should('be.gte', 1);
    });
  });
  