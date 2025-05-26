// cypress/e2e/api/carts.cy.ts
/// <reference types="cypress" />

describe('API — Carts', () => {
    it('POST /carts creates a new cart and GET /carts returns it', () => {
      // 1) создаём корзину
      cy.request('POST', 'http://localhost:4000/carts', {
        items: [{ productId: 'prod_1', quantity: 1 }],
      }).then((postResp) => {
        expect(postResp.status).to.equal(201);
        expect(postResp.body).to.include.keys(['id', 'items']);
        const cartId = postResp.body.id;
  
        // 2) проверяем, что GET /carts вернёт наш новый объект
        cy.request('GET', 'http://localhost:4000/carts').then((getResp) => {
          expect(getResp.status).to.equal(200);
          const found = getResp.body.find((c: any) => c.id === cartId);
          expect(found).to.exist;
          expect(found.items).to.deep.equal(postResp.body.items);
        });
      });
    });
  });
  