// cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Путь указывает на ваш локальный Vite-сервер
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
});
