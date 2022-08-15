import { Given, Then, When, And, But } from "cypress-cucumber-preprocessor/steps";
import LeadEmails from "../../../e2e/pageObjects/contactform.po"


const leadEmails = new LeadEmails()



Given('a bot navigates to the Homepage and fills out the Lead Email form',(datatable)=>{
    cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io')
    datatable.hashes().forEach((element) => {
        leadEmails.footerContactFormName().scrollIntoView({force: true})
        leadEmails.footerContactFormName().type(element.name,{force: true})
        leadEmails.footerContactFormEmail().type(element.email, {force: true})
        leadEmails.footerContactFormPhone().type(element.phone, {force: true})
        leadEmails.footerContactFormInquiry().type(element.case, {force: true})
      }) 
})

And('fills out the “subject” field', ()=>{
    cy.get('.footer_inquiry .subject input[type=text]').type('Automation Text',{force: true})
})

When('they submit the form',()=>{
    leadEmails.footerContactSubmitButton().click({force: true})
}) 

Then('it will appear to go through',()=>{
    cy.url().should('contain','/leads/send_inquiry/')
    cy.contains('Your inquiry has been sent').should('be.visible')
}) 
