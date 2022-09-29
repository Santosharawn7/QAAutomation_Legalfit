/// <reference types="cypress" />

import './commands'
import "cypress-real-events/support";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

 
