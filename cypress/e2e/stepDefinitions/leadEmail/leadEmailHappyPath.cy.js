import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import LeadEmails from "../../../e2e/pageObjects/contactform.po"

const leadEmails = new LeadEmails()

//Hero Contact Form on a HP Submits Lead Email
Given(`I logged in on the Render mode of the Premium Site having Hero Contact form`, () => {
  cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io')
})

When(`I fill every details of form`, (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.heroContactFormName().type(element.name, { force: true })
    leadEmails.heroContactFormEmail().type(element.email, { force: true })
    leadEmails.heroContactFormPhone().type(element.phone, { force: true })
    leadEmails.heroContactFormInquiry().type(element.case, { force: true })
  })
})

And(`I press Submit button on that hero block`, () => {
  leadEmails.heroContactSubmitButton().click({ force: true })
})

Then('I should be navigated to lead inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And(`I should see "Your inquiry has been sent." message`, () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})

//HP Footer Contact Form Submits Lead Email When Client Has Form in The Hero
Given('You are on a render page of the home page with Hero contact form and footer contact form', () => {
  cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io')
})

When('You fill every details on the Footer contact form after scrolling down', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.footerContactFormName().scrollIntoView({ force: true })
    leadEmails.footerContactFormName().type(element.name, { force: true })
    leadEmails.footerContactFormEmail().type(element.email, { force: true })
    leadEmails.footerContactFormPhone().type(element.phone, { force: true })
    leadEmails.footerContactFormInquiry().type(element.case, { force: true })
  })
})

And('You click on submit button of a HP footer contact form with Hero Contact from', () => {
  leadEmails.footerContactSubmitButton().click({ force: true })
})

Then('You are navigated to leads inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And('You will see the sent inquiry message', () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})

//PPC Hero Contact Form Submits Lead Email

Given('You are on a PPC landing render page and on Hero contact form', () => {
  cy.visit('https://legal:fit@a-price.builder.sandbox.legalfit.io/family-law-attorney-tulsa/')
})

When('I fill every contents on the Header of PPC landing contact form', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.ppcLandingHeroContactFormName().type(element.name, { force: true })
    leadEmails.ppcLandingHeroContactFormEmail().type(element.email, { force: true })
    leadEmails.ppcLandingHeroContactFormPhone().type(element.phone, { force: true })
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

//PPC Footer Contact Form Submits Lead Email

Given('You are on a PPC Landing page render page and footer contact form', () => {
  cy.visit('https://legal:fit@a-price.builder.sandbox.legalfit.io/family-law-attorney-tulsa/')
})

When('You scroll and fill every contents on the footer PPC Landing contact form', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.ppcLandingFooterContactFormName().scrollIntoView({ force: true })
    leadEmails.ppcLandingFooterContactFormName().type(element.name, { force: true })
    leadEmails.ppcLandingFooterContactFormEmail().type(element.email, { force: true })
    leadEmails.ppcLandingFooterContactFormPhone().type(element.phone, { force: true })
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

//HP Footer Contact Form Submits Lead Email When Client Doesn't Have A Form in The Hero
Given(`I logged in on the Render mode of the Premium Site that doesn't have a Hero Contact form`, () => {
  cy.openRenderSite()
})

When(`I fill every details of form on the contact form`, (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.footerContactFormName().type(element.name, { force: true })
    leadEmails.footerContactFormEmail().type(element.email, { force: true })
    leadEmails.footerContactFormPhone().type(element.phone, { force: true })
    leadEmails.footerContactFormInquiry().type(element.case, { force: true })
  })
})

And(`I press Submit button to submit all the details`, () => {
  cy.get('.f-inquiry-form [element=button]').click({ force: true })
})

Then('I should be navigated to lead inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And(`I should see "Your inquiry has been sent." message`, () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})

//IP Contact Footer Submits Email When Client Doesnt Have A Form in The Hero
Given('You are on a interior page render page that doesnt have a form in hero', () => {
  cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io/practice-areas/drug-violations/marijuana-charges/')
})

When('You scroll and fill every contents without phone number on the footer IP contact form', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.interiorPageContactFormName().type(element.name, { force: true })
    leadEmails.interiorPageContactFormEmail().type(element.email, { force: true })
    leadEmails.interiorPageContactFormPhone().type(element.phone, { force: true })
    leadEmails.interiorPageContactFormInquiry().type(element.case, { force: true })
  })
})

And('You click on submit button of a IP footer contact form', () => {
  leadEmails.footerContactSubmitButton().click({ force: true })
})

Then('You are navigated to the leads inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And('You will see the sent inquiry message', () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})

//Contact Page Form Submits Email Lead When Client Doesn't Have A Form in The Hero
Given('You are on a contact page without a Hero contact form', () => {
  cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io/contact/')
})

When('I fill every contents on the contact form of contact page', (datatable) => {
  datatable.hashes().forEach((element) => {
    leadEmails.contactPageContactFormName().type(element.name, { force: true })
    leadEmails.contactPageContactFormEmail().type(element.email, { force: true })
    leadEmails.contactPageContactFormPhone().type(element.phone, { force: true })
    leadEmails.contactPageContactFormInquiry().type(element.case, { force: true })
  })
})

And('You click on submit button on a contact page without Hero contact form', () => {
  leadEmails.contactSubmitButton().click({ force: true })
})

Then('You are navigated to the leads inquiry page', () => {
  cy.url().should('contain', '/leads/send_inquiry/')
})

And('You will see the sent inquiry message', () => {
  cy.contains('Your inquiry has been sent').should('be.visible')
})