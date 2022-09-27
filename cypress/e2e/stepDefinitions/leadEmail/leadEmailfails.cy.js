import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import LeadEmails from "../../../e2e/pageObjects/contactform.po"

const leadEmails = new LeadEmails()

//Contact Form in the Hero Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site`, () => {
    cy.visit('http://legal:fit@a-dominguez.local.legalfit.io:8000')
})

When(`I fill every contents of form leaving name field empty`, (datatable) => {
    datatable.hashes().forEach((element) => {
        leadEmails.heroContactFormPhone().scrollIntoView({ force: true }).type(element.phone, { force: true })
        leadEmails.heroContactFormEmail().type(element.email, { force: true })
        leadEmails.heroContactFormInquiry().type(element.case, { force: true })
    })
})

And(`I press Hero Submit button`, () => {
    leadEmails.heroContactFormName().scrollIntoView({ force: true })
    leadEmails.heroContactSubmitButton().click({ force: true })
})

Then('I should see "Please fill out this field." message under Name field.', () => {
    leadEmails.heroInquiryForm().within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })
})

//Contact Form in the Footer Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site and scroll to Footer Contact Form`, () => {
    cy.visit('http://legal:fit@a-dominguez.local.legalfit.io:8000')
})

When(`I fill every contents of form leaving email field empty on Footer Contact Form`, (datatable) => {
    datatable.hashes().forEach((element) => {
        leadEmails.footerContactFormName().scrollIntoView({ force: true }).type(element.name, { force: true })
        leadEmails.footerContactFormEmail().clear({ force: true })
        leadEmails.footerContactFormPhone().type(element.phone, { force: true })
        leadEmails.footerContactFormInquiry().type(element.case, { force: true })
    })
})

And(`I press Footer Submit button`, () => {
    leadEmails.footerContactFormEmail().scrollIntoView({ force: true })
    leadEmails.footerContactSubmitButton().click({ force: true })
})

Then('I should see "Please fill out this field." alert message under Email field.', () => {
    leadEmails.footerInquiryForm().within(() => {
        cy.get('[name=email]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })
})

//IP Contact Form Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Interior page of Premium Site`, () => {
    cy.visit('http://legal:fit@a-dominguez.local.legalfit.io:8000/practice-areas/drug-violations/marijuana-charges/')
})

When(`I fill every contents of form leaving inquiry field empty on Interior Page`, (datatable) => {
    datatable.hashes().forEach((element) => {
        leadEmails.interiorPageContactFormName().scrollIntoView({ force: true }).type(element.name, { force: true })
        leadEmails.interiorPageContactFormEmail().type(element.email, { force: true })
        leadEmails.interiorPageContactFormPhone().type(element.phone, { force: true })
    })
})

And(`I press Submit button on Interior page contact form`, () => {
    leadEmails.interiorPageContactFormName().scrollIntoView({ force: true })
    leadEmails.ipContactFormSubmitButton().click({ force: true })
})

Then('I should see "Please fill out this field." message under Inquiry field of Interior page.', () => {
    leadEmails.footerInquiryForm().within(() => {
        cy.get('[name=inquiry]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })
})

//Contact Page Form Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site to test every fail scenario for contact form`, () => {
    cy.visit('http://legal:fit@a-dominguez.local.legalfit.io:8000')
})

When(`I fill every contents of form leaving name field empty to verify the case of Name`, (datatable) => {
    datatable.hashes().forEach((element) => {
        leadEmails.heroContactFormPhone().scrollIntoView({ force: true }).type(element.phone, { force: true })
        leadEmails.heroContactFormEmail().type(element.email, { force: true })
        leadEmails.heroContactFormInquiry().type(element.case, { force: true })
    })
})

And(`I press Hero Submit button of that form`, () => {
    leadEmails.heroContactFormName().scrollIntoView({ force: true })
    leadEmails.heroContactSubmitButton().click({ force: true })
})

Then('I should see "Please fill out this field." message under Name field of that form.', () => {
    // cy.get('input:invalid').should('have.length', 3)
    leadEmails.heroInquiryForm().within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })
})

When('I clear all the field and enter every details except email', (datatable) => {
    datatable.hashes().forEach((element) => {
        leadEmails.heroContactFormName().scrollIntoView({ force: true }).type(element.name, { force: true })
        leadEmails.heroContactFormPhone().clear({ force: true }).type(element.phone, { force: true })
        leadEmails.heroContactFormEmail().clear({ force: true })
        leadEmails.heroContactFormInquiry().clear({ force: true }).type(element.case, { force: true })
    })
})

And('I click the Submit button once again', () => {
    leadEmails.heroContactFormName().scrollIntoView({ force: true })
    leadEmails.heroContactSubmitButton().click({ force: true })
})

Then('I should see another alert Message.', () => {
    leadEmails.heroInquiryForm().within(() => {
        cy.get('[name=email]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })
})

When('I clear all the field and enter every details except Description', (datatable) => {
    datatable.hashes().forEach((element) => {
        leadEmails.heroContactFormName().scrollIntoView({ force: true }).clear({ force: true }).type(element.name, { force: true })
        leadEmails.heroContactFormPhone().clear({ force: true }).type(element.phone, { force: true })
        leadEmails.heroContactFormEmail().clear({ force: true }).type(element.email, { force: true })
        leadEmails.heroContactFormInquiry().clear({ force: true })
    })
})

And('I click the Submit Button again', () => {
    leadEmails.heroContactFormInquiry().scrollIntoView({ force: true })
    leadEmails.heroContactSubmitButton().click({ force: true })
})

Then('I should see another alert Message and form wont submit', () => {
    leadEmails.heroInquiryForm().within(() => {
        cy.get('[name=inquiry]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })
})

When('I clear all the field and click the submit button.', () => {
    leadEmails.heroContactFormName().scrollIntoView({ force: true }).clear({ force: true })
    leadEmails.heroContactFormPhone().clear({ force: true })
    leadEmails.heroContactFormEmail().clear({ force: true })
    leadEmails.heroContactFormInquiry().clear({ force: true })
    leadEmails.heroContactSubmitButton().click({ force: true })
})

Then('I will only see alert message', () => {
    leadEmails.heroInquiryForm().within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })
})

//PPC Hero Contact Form Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site having PPC Landing page and scroll to the Header contact form`, () => {
    cy.visit('http://legal:fit@a-price.local.legalfit.io:8000/family-law-attorney-tulsa/')
})

When(`I fill every contents of form leaving name field empty on the hero block PPC landing Header form`, (datatable) => {
    datatable.hashes().forEach((element) => {
        leadEmails.ppcLandingHeroContactFormPhone().scrollIntoView({ force: true }).type(element.phone, { force: true })
        leadEmails.ppcLandingHeroContactFormEmail().type(element.email, { force: true })
        leadEmails.ppcLandingHeroContactFormInquiry().type(element.case, { force: true })
    })
})

And(`I press Hero Submit button of the hero block PPC Landing page`, () => {
    leadEmails.ppcLandingHeroContactFormName().scrollIntoView({ force: true })
    leadEmails.ppcLandingHeroSubmitButton().click({ force: true })
})

Then('I should see "Please fill out this field." message under Name field of the Hero block of PPC landing page', () => {
    leadEmails.landingHeroInquiryForm().within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })
    When('I clear all the field and enter every details except email in Hero block of PPC Landing', (datatable) => {
        datatable.hashes().forEach((element) => {
            leadEmails.ppcLandingHeroContactFormName().scrollIntoView({ force: true }).type(element.name, { force: true })
            leadEmails.ppcLandingHeroContactFormPhone().clear({ force: true }).type(element.phone, { force: true })
            leadEmails.ppcLandingHeroContactFormEmail().clear({ force: true })
            leadEmails.ppcLandingHeroContactFormInquiry().clear({ force: true }).type(element.case, { force: true })
        })
    })

    And('I click the Submit button once again of Hero block in PPC Landing', () => {
        leadEmails.ppcLandingHeroContactFormEmail().scrollIntoView({ force: true })
        leadEmails.ppcLandingHeroSubmitButton().click({ force: true })
    })

    Then('I should see another alert Message in Hero block of PPC Landing page.', () => {
        leadEmails.landingHeroInquiryForm().within(() => {
            cy.get('[name=email]').invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
        })
    })

    When('I clear all the field and enter every details except Description in Hero block of PPC Landing page', (datatable) => {
        datatable.hashes().forEach((element) => {
            leadEmails.ppcLandingHeroContactFormName().scrollIntoView({ force: true }).clear({ force: true }).type(element.name, { force: true })
            leadEmails.ppcLandingHeroContactFormPhone().clear({ force: true }).type(element.phone, { force: true })
            leadEmails.ppcLandingHeroContactFormEmail().clear({ force: true }).type(element.email, { force: true })
            leadEmails.ppcLandingHeroContactFormInquiry().clear({ force: true })
        })
    })

    And('I click the Submit Button again in the Hero block of PPC Landing Page', () => {
        leadEmails.ppcLandingHeroContactFormInquiry().scrollIntoView({ force: true })
        leadEmails.ppcLandingHeroSubmitButton().click({ force: true })
    })

    Then('I should see another alert Message in the Hero block of PPC Landing Page', () => {
        leadEmails.landingHeroInquiryForm().within(() => {
            cy.get('[name=inquiry]').invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
        })
    })

    When('I clear all the field and click the submit button of the Hero block PPC Landing Page.', () => {
        leadEmails.ppcLandingHeroContactFormName().scrollIntoView({ force: true }).clear({ force: true })
        leadEmails.ppcLandingHeroContactFormPhone().clear({ force: true })
        leadEmails.ppcLandingHeroContactFormEmail().clear({ force: true })
        leadEmails.ppcLandingHeroContactFormInquiry().clear({ force: true })
        leadEmails.ppcLandingHeroSubmitButton().click({ force: true })
    })

    Then('I will only see alert message of the hero block of the PPC Landing Page', () => {
        leadEmails.landingHeroInquiryForm().within(() => {
            cy.get('[name=name]').invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
        })
    })
})

//PPC Footer Contact Form Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site of the PPC landing page and scroll to the footer contact form`, () => {
    cy.visit('http://legal:fit@a-price.local.legalfit.io:8000/family-law-attorney-tulsa/')
})

When(`I fill every contents of form leaving name field empty on PPC Landing Footer form`, (datatable) => {
    datatable.hashes().forEach((element) => {
        leadEmails.ppcLandingFooterContactFormPhone().scrollIntoView({ force: true }).type(element.phone, { force: true })
        leadEmails.ppcLandingFooterContactFormEmail().type(element.email, { force: true })
        leadEmails.ppcLandingFooterContactFormInquiry().type(element.case, { force: true })
    })
})

And(`I press Hero Submit button of the footer PPC landing form`, () => {
    leadEmails.ppcLandingFooterContactFormName().scrollIntoView({ force: true })
    leadEmails.ppcLandingFooterSubmitButton().click({ force: true })
})

Then('I should see "Please fill out this field." message under Name field of PPC landing footer form.', () => {
    // cy.get('input:invalid').should('have.length', 3)
    leadEmails.landingFooterInquiryForm().within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
    })

    When('I clear all the field and enter every details except email in the PPC Landing Page footer form', (datatable) => {
        datatable.hashes().forEach((element) => {
            leadEmails.ppcLandingFooterContactFormName().scrollIntoView({ force: true }).type(element.name, { force: true })
            leadEmails.ppcLandingFooterContactFormPhone().clear({ force: true }).type(element.phone, { force: true })
            leadEmails.ppcLandingFooterContactFormEmail().clear({ force: true })
            leadEmails.ppcLandingFooterContactFormInquiry().clear({ force: true }).type(element.case, { force: true })
        })
    })

    And('I click the Submit button once again on the footer of PPC landing page footer form', () => {
        leadEmails.ppcLandingFooterContactFormEmail().scrollIntoView({ force: true })
        leadEmails.ppcLandingFooterSubmitButton().click({ force: true })
    })

    Then('I should see another alert Message on the PPC Landing page footer form.', () => {
        leadEmails.landingFooterInquiryForm().within(() => {
            cy.get('[name=email]').invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
        })
    })

    When('I clear all the field and enter every details except Description in the PPC Landing footer form', (datatable) => {
        datatable.hashes().forEach((element) => {
            leadEmails.ppcLandingFooterContactFormName().scrollIntoView({ force: true }).clear({ force: true }).type(element.name, { force: true })
            leadEmails.ppcLandingFooterContactFormPhone().clear({ force: true }).type(element.phone, { force: true })
            leadEmails.ppcLandingFooterContactFormEmail().clear({ force: true }).type(element.email, { force: true })
            leadEmails.ppcLandingFooterContactFormInquiry().clear({ force: true })
        })
    })

    And('I click the Submit Button again of PPC Landing footer form', () => {
        leadEmails.ppcLandingFooterContactFormInquiry().scrollIntoView({ force: true })
        leadEmails.ppcLandingFooterSubmitButton().click({ force: true })
    })

    Then('I should see another alert Message and form wont submit on PPC Landing footer form', () => {
        leadEmails.landingFooterInquiryForm().within(() => {
            cy.get('[name=inquiry]').invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
        })
    })

    When('I clear all the field and click the submit button on PPC Landing footer form.', () => {
        leadEmails.ppcLandingFooterContactFormName().scrollIntoView({ force: true }).clear({ force: true })
        leadEmails.ppcLandingFooterContactFormPhone().clear({ force: true })
        leadEmails.ppcLandingFooterContactFormEmail().clear({ force: true })
        leadEmails.ppcLandingFooterContactFormInquiry().clear({ force: true })
        leadEmails.ppcLandingFooterSubmitButton().click({ force: true })
    })

    Then('I will only see alert message on PPC landing footer form', () => {
        leadEmails.landingFooterInquiryForm().within(() => {
            cy.get('[name=name]').invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
        })
    })
})