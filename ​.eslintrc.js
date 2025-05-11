module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,                     // последние возможности JS
      sourceType: 'module',                  // import/export
      ecmaFeatures: { jsx: true }            // JSX
    },
    settings: {
      react: {
        version: 'detect'                    // найдет версию React из package.json
      }
    },
    env: {
      browser: true,
      es6:     true,
      node:    true
    },
    extends: [
      'react-app',                           // базовые правила от CRA
      'plugin:react/recommended',            // рекомендуемые правила React
      'plugin:react-hooks/recommended',      // hooks
      'plugin:@typescript-eslint/recommended', // TS-правила
      'prettier'                             // отключает все конфликтующие правила ESLint
    ],
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint'
    ],
    rules: {
      // здесь можно тонко настроить «острые» правила:
      // пример: 
      // '@typescript-eslint/no-explicit-any': 'warn',
      // 'react/prop-types': 'off',
    }
  }
  