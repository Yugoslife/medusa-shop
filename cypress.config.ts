// cypress.config.ts
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    env: {
      apiUrl: 'http://localhost:4000',
    },
    setupNodeEvents(on, config) { /* if needed */ },
  },
})
