module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'jsx-quotes': [2, 'prefer-single'],
    semi: ['error', 'never'],
    quotes: [2, 'single', { avoidEscape: true }],
    indent: 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
