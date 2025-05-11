module.exports = {
    preset: 'ts-jest',              // говорит, что будем использовать ts-jest
    testEnvironment: 'jsdom',       // браузерная среда для React
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy' // чтобы импорт стилей не ломал тесты
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'] // файл, где подключаем jest-dom
  }
  