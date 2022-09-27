const { defineConfig } = require('cypress');

module.exports = defineConfig({
  pageLoadTimeout: 100000,
  chromeWebSecurity: false,
  sourceRewriting: true,
  defaultCommandTimeout: 200000,
  viewportHeight: 900,
  viewportWidth: 1414,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    supportFile:'cypress/support/e2e.js',
    specPattern:
      'cypress/e2e/feature/',
    env: {
      sandboxbaseUrl: 'https://studio.sandbox.legalfit.io/',
      localbaseUrl: 'http://standard.local.legalfit.io:3000/stencil/',
      preprodbaseUrl: 'https://studio.preprod.legalfit.io/',
      builderUrl: 'https://legal:fit@automation-test.builder.sandbox.legalfit.io/admin/edit/',
      openlocalBuilderUrl: 'http://legal:fit@automation-test.local.legalfit.io:8000/admin/edit/'
    },
    supportFile: 'cypress/support/e2e.js',
  },
})