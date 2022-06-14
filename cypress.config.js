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
    specPattern:
      'cypress/e2e/feature/',
    baseUrl: 'http://sites.local.legalfit.io:8000/admin/login',
    supportFile: false,
  },
});
