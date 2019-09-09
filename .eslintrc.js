let config = {
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  'env': {
    "es6": true,
    'node': true,
    browser: true
  },
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single', {'allowTemplateLiterals': true}],
    semi: ['error', 'always'],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'no-undef': 'error'
  },
  globals: {
    describe: true,
    before: true,
    beforeEach: true,
    after: true,
    afterEach: true,
    it: true
  }
}

module.exports = config;