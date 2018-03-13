const { resolve } = require

module.exports = {
  parser: resolve('babel-eslint'),
  plugins: ['react', 'prettier'],
  extends: [
    resolve('eslint-config-standard'),
    'plugin:react/recommended',
    resolve('eslint-config-prettier'),
    resolve('eslint-config-prettier/standard'),
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        // Use a style roughly the same as `standard`.
        semi: false,
        singleQuote: true,

        trailingComma: 'all',
      },
    ],
  },
}
