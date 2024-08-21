module.exports = {
  parser: 'babel-eslint',
  extends: [
  '@webex/eslint-config-react',
  'eslint:recommended'
  ],
  plugins: [
    'import'
  ],
  env: {
    jest: true,
    browser: true
  },
  root: true,
  rules: {
    'operator-linebreak': ['error', 'before', {
      overrides: {
        '&&': 'ignore' // Used for conditional render in React components
      }
    }],
    'require-jsdoc': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always-and-inside-groups'
    }],
    'react/jsx-no-bind': 'warn',
    'import/no-cycle': [2, { "maxDepth": Infinity }]
  }
}
