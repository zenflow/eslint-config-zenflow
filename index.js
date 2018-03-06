const { resolve } = require
const resolveConfig = name => resolve(`eslint-config-${name}`)

module.exports = {
  parser: resolve('babel-eslint'),
  plugins: ['react', 'prettier'],
  extends: [
    resolveConfig('standard'),
    'plugin:react/recommended',
    resolveConfig('prettier'),
    resolveConfig('prettier/standard'),
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
