/// <reference types="cypress" />

import Director from "../e2e/pageObjects/director-ps.po"
import Login from "../e2e/pageObjects/login.po"

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const login = new Login()
const director = new Director()

Cypress.Commands.add('visitPremiumSite', ()=> {
    
})

Cypress.Commands.add('login', () => { 
    cy.visit('http://sites.local.legalfit.io:8000/admin/login')
    cy.fixture('../fixtures/login-data').then(data =>{
        login.email().type(data.email)
        login.password().type(data.password,{log: false})
        login.submitButton().click()
        director.tableList().should('have.lengthOf.lte', 30)
    })
})

Cypress.Commands.add('openEditorSite', () => {
    cy.visit('https://legal:fit@aaronson.builder.sandbox.legalfit.io/admin/edit/')
    login.email().type('turing')
    login.password().type('h2B2oxKI74JVzjpWQW8rRlQkZ', {log: false})
    login.editorLogin().click()
})

Cypress.Commands.add('openRenderSite', () => {
    cy.visit('https://legal:fit@a-crane.builder.sandbox.legalfit.io/')
})


Cypress.Commands.add('showSettings', () => {
    cy.get('.settings-container').invoke('attr', 'style', 'display: block')
})

Cypress.Commands.add('showBadges', () => {
    cy.get('.section-badge').invoke('attr', 'style', 'display: block !important')
})

Cypress.Commands.add('showInsertBlocks', () => {
    cy.get('.add-block-container').invoke('attr', 'style', 'display: block')
})

Cypress.Commands.add('googleLogin', ()=>{
    cy.get('.google-login').click()
})
