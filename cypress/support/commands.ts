// cypress/support/commands.ts
Cypress.Commands.add('getByTestId', (id: string) => 
    cy.get(`[data-testid="${id}"]`)
  )
  