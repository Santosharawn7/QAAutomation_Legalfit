import { And, Given,  Then,  When } from "cypress-cucumber-preprocessor/steps"

Given(`I logged in on the Render of the Premium Site`,() => {
  cy.openEditorSite()
  cy.openRenderSite()
})

When(`I Enter the Name, Phone number, Email and Case`, () => {
  cy.get('[name=name]').type('John Test')
  cy.get('[name=phone]').type('816-111-1111')
  cy.get('[name=email]').type('testersgonnatest@gmail.com')
  cy.get('[name=inquiry]').type('This is a test of the HP Hero Contact Form.')
})

And(`I press Submit button`, () => {
  cy.get('.zane-footer-inquiry-form .btn').click()
})

Then('I should be navigated to lead inquiry page',() => {
  cy.url().should('contain','/leads/send_inquiry/')
})

And(`I should see "Your inquiry has been sent." message`, () => {
  cy.get('.main-page-block-inquiry p').should('contain.text','Your inquiry has been sent.')
})