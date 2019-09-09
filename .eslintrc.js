let config = {
  extends: 'eslint:recommended',
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single', {'allowTemplateLiterals': true}],
    semi: ['error', 'always'],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'no-undef': 'error'
  },
  globals: {}
}

if (process.env.NODE_ENV === 'test') {
  config.globals.describe = true;
  config.globals.before = true;
  config.globals.beforeEach = true;
  config.globals.after = true;
  config.globals.afterEach = true;
  config.globals.it = true;
}

module.exports = config;