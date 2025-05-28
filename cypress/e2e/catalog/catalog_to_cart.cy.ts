// cypress/e2e/catalog_to_cart.cy.ts
describe('Каталог → Страница товара → Корзина', () => {
  const API = Cypress.env('apiUrl') // http://localhost:4000

  beforeEach(() => {
    cy.intercept('GET',  `${API}/products`,            { fixture: 'products.json' }).as('getProducts')
    cy.intercept('GET',  `${API}/products/prod_1`,     { fixture: 'product.json'  }).as('getProduct')
    cy.intercept('POST', `${API}/basket`,              { statusCode: 201, fixture: 'cart.json' }).as('postCart')
    cy.intercept('GET',  `${API}/basket`,              { fixture: 'cart.json' }).as('getCart')

    cy.visit('/catalog')
    cy.wait('@getProducts')
  })

  it('должен добавить товар в корзину', () => {
    cy.getByTestId('product-card').first().click()
    cy.wait('@getProduct')

    cy.getByTestId('add-to-cart').click()
    cy.wait('@postCart')

    cy.wait('@getCart')
    cy.url().should('include', '/basket')
    cy.getByTestId('cart-item').should('have.length', 1)
  })
})
