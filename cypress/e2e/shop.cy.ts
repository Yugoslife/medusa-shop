// cypress/e2e/shop.cy.ts

// 1. Импортируем команды Cypress
/// <reference types="cypress" />

describe('Покупательский поток', () => {
  // Перед каждым тестом — сбрасываем куки/локалсторедж и переходим на страницу входа
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/login');
  });

  // После каждого теста — в случае падения сохраняем скриншот
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      const testName = this.currentTest.title.replace(/\s+/g, '_');
      cy.screenshot(`failed_${testName}`);
    }
  });

  it('логин → каталог → корзина', () => {
    // Логинимся
    cy.get('[data-testid="username"]').type('user');
    cy.get('[data-testid="password"]').type('pass');
    cy.get('[data-testid="login-btn"]').click();

    // Убедимся, что попали в каталог
    cy.url().should('include', '/search');
    cy.get('[data-testid="add-to-basket"]').first().click();

    // Переходим в корзину и проверяем
    cy.visit('/basket');
    cy.get('[data-testid="basket-page"]').should('exist');
  });
});
