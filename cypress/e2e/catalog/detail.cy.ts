/// <reference types="cypress" />

describe('Catalog → Product Detail', () => {
    beforeEach(() => {
      // ■ ARRANGE ■
  
      // 1) Очищаем всё, что могло сохраниться в куках / localStorage
      cy.clearCookies()
      cy.clearLocalStorage()
  
      // 2) Подменяем сетевые вызовы «список товаров» и «деталь товара» фикстурами
      cy.intercept(
        'GET',
        'http://localhost:4000/products',
        { fixture: 'products.json' }
      ).as('getProducts')
      
      // Это должно ловить `/products/prod_1`, `/products/prod_2` и т.п.
      cy.intercept(
        'GET',
        /\/products\/prod_\d+/,
        { fixture: 'products.json' }
      ).as('getProduct')
  
      // 3) Открываем страницу каталога
      cy.visit('/catalog')
  
      // 4) Ждём, пока приложение сделает первый запрос за списком
      cy.wait('@getProducts')
    })
  
    it('clicks first product and navigates to detail page', () => {
      // ■ ACT ■
      cy.get('[data-testid="product-card"]').first().click()

      // ждём, что ваш компонент уедет за деталями
      cy.wait('@getProduct')
      
      // и проверяем саму кнопку
      cy.get('[data-testid="add-to-cart"]').should('be.visible')
      
      // 1) Кликаем на первую карточку из списка
      cy.get('[data-testid="product-card"]').first().click()
  
      // 2) Ждём, что уйдёт запрос за деталями конкретного товара...
      cy.wait('@getProduct').then(({ request, response }) => {
        // ...и проверяем, что запрос действительно пошёл на URL с нужным ID
        expect(request.url).to.include('/products/prod_1')
        // тело ответа — тот же массив из фикстуры
        expect(response?.body).to.have.length(2)
      })
  
      // ■ ASSERT ■
  
      // 3) UI-путь стал /catalog/prod_1
      cy.url().should('match', /\/catalog\/prod_1$/)
  
      // 4) На экране появился элемент детали
      cy.get('[data-testid="product-detail"]').should('be.visible')
    })
  })
  