import { Given, Then, When, And, But } from "cypress-cucumber-preprocessor/steps";
import LeadEmails from "../../../e2e/pageObjects/contactform.po"

const leadEmails = new LeadEmails()

Given('a bot navigates to the Homepage and fills out the Lead Email form', (datatable) => {
    cy.visit('http://legal:fit@a-dominguez.local.legalfit.io:8000')
    datatable.hashes().forEach((element) => {
        leadEmails.footerContactFormName().scrollIntoView({ force: true })
        leadEmails.footerContactFormName().type(element.name, { force: true })
        leadEmails.footerContactFormEmail().type(element.email, { force: true })
        leadEmails.footerContactFormPhone().type(element.phone, { force: true })
        leadEmails.footerContactFormInquiry().type(element.case, { force: true })
    })
})

And('fills out the “subject” field', () => {
    leadEmails.subject().type('Automation Text', { force: true })
})

When('they submit the form', () => {
    leadEmails.footerContactSubmitButton().click({ force: true })
})

Then('it will appear to go through', () => {
    cy.url().should('contain', '/leads/send_inquiry/')
    cy.contains('Your inquiry has been sent').should('be.visible')
}) 
