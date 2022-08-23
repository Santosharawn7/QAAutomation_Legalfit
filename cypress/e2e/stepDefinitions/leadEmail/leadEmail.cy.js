import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import LeadEmails from "../../../e2e/pageObjects/contactform.po"

const leadEmails = new LeadEmails()

//HP Footer Contact Form Submits Lead Email When Client Doesn't Have A Form in The Hero
Given(`I logged in on the Render of the Premium Site`, () => {
  cy.openRenderSite()
})

When(`I fill every contents of form`, (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.footerContactFormName().type(element.name, { force: true })
    leadEmails.footerContactFormPhone().type(element.phone, { force: true })
    leadEmails.footerContactFormEmail().type(element.email, { force: true })
    leadEmails.footerContactFormInquiry().type(element.case, { force: true })
  })
})

And(`I press Submit button`, () => {
  leadEmails.footerContactSubmitButton().click({ force: true })
})

Then('I should be navigated to lead inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And(`I should see "Your inquiry has been sent." message`, () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})


//Automate Test when the phone number is missing from the HP hero Contact Form

Given('You are on a render page and HP hero contact form', () => {
  cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io')
})

When('You fill every contents without phone number on the Hero HP Contact form', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.heroContactFormName().type(element.name, { force: true })
    leadEmails.heroContactFormEmail().type(element.email, { force: true })
    leadEmails.heroContactFormInquiry().type(element.case, { force: true })
  })
})

And('You click on submit button of a HP hero contact form', () => {
  leadEmails.heroContactSubmitButton().click({ force: true })
})

Then('You are navigated to leads inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And('You will see the sent inquiry message', () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})

//When The Phone Number Is Missing The HP Footer Contact Form Still Submits Lead Email

Given('You are on a render page and footer contact form', () => {
  cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io')
})

When('You fill every contents without phone number on the footer HP contact form', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.footerContactFormName().type(element.name, { force: true })
    leadEmails.footerContactFormEmail().type(element.email, { force: true })
    leadEmails.footerContactFormInquiry().type(element.case, { force: true })
  })
})

And('You click on submit button of a HP footer contact form', () => {
  leadEmails.footerContactSubmitButton().click({ force: true })
})

Then('You are navigated to leads inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And('You will see the sent inquiry message', () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})

//When The Phone Number Is Missing The IP Footer Contact Form Still Submits Lead Email

Given('You are on a interior page render page and footer contact form', () => {
  cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io/practice-areas/drug-violations/marijuana-charges/')
})

When('You scroll and fill every contents without phone number on the footer IP contact form', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.interiorPageContactFormName().type(element.name, { force: true })
    leadEmails.interiorPageContactFormEmail().type(element.email, { force: true })
    leadEmails.interiorPageContactFormInquiry().type(element.case, { force: true })
  })
})

And('You click on submit button of a IP footer contact form', () => {
  leadEmails.ipContactFormSubmitButton().click({ force: true })
})

Then('You are navigated to the leads inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And('You will see the sent inquiry message', () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})

//When The Phone Number Is Missing The PPC Hero Contact Form Still Submits Lead Email

Given('You are on a PPC landing render page and on Hero contact form', () => {
  cy.visit('https://legal:fit@a-price.builder.sandbox.legalfit.io/family-law-attorney-tulsa/')
})

When('You scroll and fill every contents without phone number on the footer of PPC landing contact form', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.ppcLandingHeroContactFormName().type(element.name, { force: true })
    leadEmails.ppcLandingHeroContactFormEmail().type(element.email, { force: true })
    leadEmails.ppcLandingHeroContactFormInquiry().type(element.case, { force: true })
  })
})

And('You click on submit button of a PPC Landing Hero contact form', () => {
  leadEmails.ppcLandingHeroSubmitButton().click({ force: true })
})

Then('You are navigated to the leads inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And('You will see the sent inquiry message', () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})

//When The Phone Number Is Missing The PPC Footer Contact Form Still Submits Lead Email

Given('You are on a PPC Landing page render page and footer contact form', () => {
  cy.visit('https://legal:fit@a-price.builder.sandbox.legalfit.io/family-law-attorney-tulsa/')
})

When('You scroll and fill every contents without phone number on the footer PPC Landing contact form', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.ppcLandingFooterContactFormName().type(element.name, { force: true })
    leadEmails.ppcLandingFooterContactFormEmail().type(element.email, { force: true })
    leadEmails.ppcLandingFooterContactFormInquiry().type(element.case, { force: true })
  })
})

And('You click on submit button of a PPC landing footer contact form', () => {
  leadEmails.ppcLandingFooterSubmitButton().click({ force: true })
})

Then('You are navigated to the leads inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And('You will see the sent inquiry message', () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})