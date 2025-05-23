/// <reference types="cypress" />

describe('Search', () => {
  beforeEach(() => {
    // 1) Перехват всех GET-запросов на /products и подмена ответа на fixture/products.json
    cy.intercept('GET', 'http://localhost:4000/products*', {
      fixture: 'products.json'
    }).as('getProducts');

    // 2) Переходим на страницу поиска
    cy.visit('/search');

    // 3) Ждём, пока приложение сделает первый запрос к API и получит список товаров
    cy.wait('@getProducts');
  });

  it('отображает все товары, а затем ищет по названию', () => {
    // ⇨ Arrange: на этом этапе в DOM уже отрисованы карточки из fixture (должно быть 2)
    cy.get('[data-testid="product-card"]')
      .should('have.length', 2);

    // ⇨ Act: вводим текст в поле и имитируем нажатие Enter
    cy.get('[data-testid="search-input"]')
      .type('Chair{enter}');

    // 4) Если вы делаете новый fetch после Enter, опять ждём его:
    //    cy.wait('@getProducts');

    // ⇨ Assert: проверяем, что после фильтрации в DOM осталась ровно одна карточка,
    //     и что она содержит текст “Chair”
    cy.get('[data-testid="product-card"]')
      .should('have.length', 1)
      .and('contain', 'Chair');
  });
});
