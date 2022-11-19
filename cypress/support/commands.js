/// <reference types="cypress" />

import Director from "../e2e/pageObjects/director-ps.po"
import Login from "../e2e/pageObjects/login.po"
import 'cypress-file-upload';
import { EditorFeatures } from "../e2e/pageObjects/editor-ps.po";



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
const editorFeatures = new EditorFeatures()

Cypress.Commands.add('visitPremiumSite', ()=> {
    
})

Cypress.Commands.add('login', () => { 
    cy.visit(Cypress.env('localbaseUrl'))
    cy.fixture('../fixtures/login-data').then(data =>{
        login.email().type(data.local.email)
        login.password().type(data.local.password,{log: false})
        login.submitButton().click()
        cy.visit(Cypress.env('localbaseUrl'))
        director.tableList().should('have.lengthOf.lte', 30)
    })
})

Cypress.Commands.add('openEditorSite', () => {
    cy.visit(Cypress.env('builderUrl'))
    login.email().type('turing')
    login.password().type('h2B2oxKI74JVzjpWQW8rRlQkZ', {log: false})
    login.editorLogin().click()
})

Cypress.Commands.add('openlocalBuilderSite', () => {
    cy.visit(Cypress.env('openlocalBuilderUrl'))
    cy.fixture('../fixtures/login-data').then(data =>{
        login.email().type(data.local.email)
        login.password().type(data.local.password,{log: false})
        login.submitButton().click()
        cy.visit(Cypress.env('openlocalBuilderUrl'))
    })
})

Cypress.Commands.add('openRenderSite', () => {
    cy.visit('https://legal:fit@automation-test.builder.sandbox.legalfit.io/')
})

Cypress.Commands.add('openLocalRenderSite', () => {
    cy.visit('http://legal:fit@automation-test.local.legalfit.io:8000')
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

Cypress.Commands.add('openLocalSiteMap', () => {
    cy.visit('http://legal:fit@automation-test.local.legalfit.io:8000/sitemap')
})

Cypress.Commands.add('builderPublish', ()=>{
    editorFeatures.publishButton().should('have.css', 'background-color').and('be.colored', '#6A529A')
    editorFeatures.publishButton().click()
    editorFeatures.toast().should('be.visible').and('contain.text', 'Published')
    editorFeatures.publishedBadge().should('be.visible')
    editorFeatures.publishedBadge().then(($badge)=>{
        if($badge.length === 0) {
            editorFeatures.publishButton().click()
        }
    })
})