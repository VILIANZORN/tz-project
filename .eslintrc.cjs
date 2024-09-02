module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:react/jsx-runtime',
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      semi: ['error', 'always'],
      'react/propp-types': 'off',
    },
  };
  