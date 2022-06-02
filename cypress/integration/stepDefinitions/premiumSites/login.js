import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I login', () => {
  cy.login()
})

Then(`I click on the editor page`, () => {
    cy.get('#filter').type('1supriyatest')
  })