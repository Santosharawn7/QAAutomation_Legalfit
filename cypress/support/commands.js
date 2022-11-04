/// <reference types="cypress" />

import Director from "../e2e/pageObjects/director-ps.po"
import Login from "../e2e/pageObjects/login.po"
import 'cypress-file-upload';



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
    cy.visit('/')
    cy.fixture('../fixtures/login-data').then(data =>{
        login.email().type(data.email)
        login.password().type(data.password,{log: false})
        login.submitButton().click()
        director.tableList().should('have.lengthOf.lte', 30)
    })
})

Cypress.Commands.add('openEditorSite', () => {
    cy.visit(Cypress.env('builderUrl'))
    login.email().type('turing')
    login.password().type('h2B2oxKI74JVzjpWQW8rRlQkZ', {log: false})
    login.editorLogin().click()
})

Cypress.Commands.add('openRenderSite', () => {
    cy.visit('https://legal:fit@automation-test.builder.sandbox.legalfit.io/')
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

Cypress.Commands.add('openSiteMap', () => {
    cy.visit('https://legal:fit@automation-test.builder.sandbox.legalfit.io/sitemap')
})


// Autotest Environment

Cypress.Commands.add('openBuilderSite', () => {
    cy.visit(Cypress.env('builderTestUrl'))
    login.email().type('turing')
    login.password().type('h2B2oxKI74JVzjpWQW8rRlQkZ', {log: false})
    login.editorLogin().click()
})

Cypress.Commands.add('openBuilderHomePage', () => {
    cy.visit(Cypress.env('builderTestUrl'))
})
Cypress.Commands.add('openTestRenderSite', () => {
    cy.visit('https://legal:fit@autotest.builder.sandbox.legalfit.io/')
})

Cypress.Commands.add('openTestSiteMap', () => {
    cy.visit('https://legal:fit@autotest.builder.sandbox.legalfit.io/sitemap')
})
