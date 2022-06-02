import { And, Given,  Then,  When } from "cypress-cucumber-preprocessor/steps"

//Contact Form in the Hero Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site`,() => {
    cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io')
})

When(`I fill every contents of form leaving name field empty`, (datatable) => {
datatable.hashes().forEach((element)=>{
  cy.get('.hero-container [name=phone].form-control').scrollIntoView({force: true}).type(element.phone, {force: true})
  cy.get('.hero-container [name=email].form-control').type(element.email, {force: true})
  cy.get('.hero-container [name=inquiry].form-control').type(element.case, {force: true})
  })
})

And(`I press Hero Submit button`, () => {
    cy.get('.hero-container .f-inquiry-form [name=name].form-control').scrollIntoView({force: true})
    cy.get('.hero-container [element=button]').click({force: true})
})

Then('I should see "Please fill out this field." message under Name field.',() => {
   // cy.get('input:invalid').should('have.length', 3)
    cy.get('.hero-container .f-inquiry-form').within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })
})

//Contact Form in the Footer Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site and scroll to Footer Contact Form`,() => {
    cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io')
})

When(`I fill every contents of form leaving email field empty on Footer Contact Form`, (datatable) => {
datatable.hashes().forEach((element)=>{
  cy.get('.footer [name=name].form-control').scrollIntoView({force: true}).type(element.name, {force: true})
  cy.get('.footer [name=email].form-control').clear({force: true})
  cy.get('.footer [name=phone].form-control').type(element.phone, {force: true})
  cy.get('.footer [name=inquiry].form-control').type(element.case, {force: true})
  })
})

And(`I press Footer Submit button`, () => {
    cy.get('.footer .f-inquiry-form [name=email].form-control').scrollIntoView({force: true})
    cy.get('.footer [element=button]').click({force: true})
})

Then('I should see "Please fill out this field." alert message under Email field.',() => {
    cy.get('.footer .f-inquiry-form').within(() => {
        cy.get('[name=email]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })
})

//IP Contact Form Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Interior page of Premium Site`,() => {
    cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io/practice-areas/drug-violations/marijuana-charges/')
})

When(`I fill every contents of form leaving inquiry field empty on Interior Page`, (datatable) => {
    datatable.hashes().forEach((element)=>{
    cy.get('.footer [name=name].form-control').scrollIntoView({force: true}).type(element.name, {force: true})
    cy.get('.footer [name=email].form-control').type(element.email, {force: true})
    cy.get('.footer [name=phone].form-control').type(element.phone, {force: true})
    cy.get('.footer [name=phone].form-control').clear({force: true})
    })
})

And(`I press Submit button on Interior page contact form`, () => {
    cy.get('.footer .f-inquiry-form [name=name].form-control').scrollIntoView({force: true})
    cy.get('.footer [element=button]').click({force: true})
})

Then('I should see "Please fill out this field." message under Inquiry field of Interior page.',() => {
   // cy.get('input:invalid').should('have.length', 3)
    cy.get('.footer .f-inquiry-form').within(() => {
        cy.get('[name=inquiry]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })
})

//Contact Page Form Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site to test every fail scenario for contact form`,() => {
    cy.visit('https://legal:fit@a-dominguez.builder.sandbox.legalfit.io')
})

When(`I fill every contents of form leaving name field empty to verify the case of Name`, (datatable) => {
datatable.hashes().forEach((element)=>{
  cy.get('.hero-container [name=phone].form-control').scrollIntoView({force: true}).type(element.phone, {force: true})
  cy.get('.hero-container [name=email].form-control').type(element.email, {force: true})
  cy.get('.hero-container [name=inquiry].form-control').type(element.case, {force: true})
  })
})

And(`I press Hero Submit button of that form`, () => {
    cy.get('.hero-container .f-inquiry-form [name=name].form-control').scrollIntoView({force: true})
    cy.get('.hero-container [element=button]').click({force: true})
})

Then('I should see "Please fill out this field." message under Name field of that form.',() => {
   // cy.get('input:invalid').should('have.length', 3)
    cy.get('.hero-container .f-inquiry-form').within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })
})

When('I clear all the field and enter every details except email',(datatable)=>{
    datatable.hashes().forEach((element)=>{
        cy.get('.hero-container [name=name].form-control').scrollIntoView({force: true}).type(element.name, {force: true})
        cy.get('.hero-container [name=phone].form-control').clear({force: true}).type(element.phone, {force: true})
        cy.get('.hero-container [name=email].form-control').clear({force: true})
        cy.get('.hero-container [name=inquiry].form-control').clear({force: true}).type(element.case, {force: true})
    })
})

And('I click the Submit button once again', ()=> {
    cy.get('.hero-container .f-inquiry-form [name=email].form-control').scrollIntoView({force: true})
    cy.get('.hero-container [element=button]').click({force: true})
})

Then('I should see another alert Message.', ()=> {
    cy.get('.hero-container .f-inquiry-form').within(() => {
        cy.get('[name=email]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })
})

When('I clear all the field and enter every details except Description', (datatable)=> {
    datatable.hashes().forEach((element)=>{
        cy.get('.hero-container [name=name].form-control').scrollIntoView({force: true}).clear({force: true}).type(element.name, {force: true})
        cy.get('.hero-container [name=phone].form-control').clear({force: true}).type(element.phone, {force: true})
        cy.get('.hero-container [name=email].form-control').clear({force: true}).type(element.email, {force: true})
        cy.get('.hero-container [name=inquiry].form-control').clear({force: true})
    })
})

And('I click the Submit Button again', () => {
    cy.get('.hero-container .f-inquiry-form [name=inquiry].form-control').scrollIntoView({force: true})
    cy.get('.hero-container [element=button]').click({force: true})
})

Then('I should see another alert Message and form wont submit', ()=> {
    cy.get('.hero-container .f-inquiry-form').within(() => {
        cy.get('[name=inquiry]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })
})

When('I clear all the field and click the submit button.', ()=> {
        cy.get('.hero-container [name=name].form-control').scrollIntoView({force: true}).clear({force: true})
        cy.get('.hero-container [name=phone].form-control').clear({force: true})
        cy.get('.hero-container [name=email].form-control').clear({force: true})
        cy.get('.hero-container [name=inquiry].form-control').clear({force: true})
        cy.get('.hero-container [element=button]').click({force: true})
})

Then('I will only see alert message', ()=> {
    cy.get('.hero-container .f-inquiry-form').within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })
})

//PPC Hero Contact Form Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site having PPC Landing page and scroll to the Header contact form`,() => {
    cy.visit('https://legal:fit@a-price.builder.sandbox.legalfit.io/family-law-attorney-tulsa/')
})

When(`I fill every contents of form leaving name field empty on the hero block PPC landing Header form`, (datatable) => {
datatable.hashes().forEach((element)=>{
  cy.get('.landing-hero [name=phone].form-control').scrollIntoView({force: true}).type(element.phone, {force: true})
  cy.get('.landing-hero [name=email].form-control').type(element.email, {force: true})
  cy.get('.landing-hero [name=inquiry].form-control').type(element.case, {force: true})
  })
})

And(`I press Hero Submit button of the hero block PPC Landing page`, () => {
    cy.get('.landing-hero .f-inquiry-form [name=name].form-control').scrollIntoView({force: true})
    cy.get('.landing-hero [element=button]').click({force: true})
})

Then('I should see "Please fill out this field." message under Name field of the Hero block of PPC landing page',() => {
   // cy.get('input:invalid').should('have.length', 3)
    cy.get('.landing-hero .f-inquiry-form').within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })
When('I clear all the field and enter every details except email in Hero block of PPC Landing',(datatable)=>{
    datatable.hashes().forEach((element)=>{
        cy.get('.landing-hero [name=name].form-control').scrollIntoView({force: true}).type(element.name, {force: true})
        cy.get('.landing-hero [name=phone].form-control').clear({force: true}).type(element.phone, {force: true})
        cy.get('.landing-hero [name=email].form-control').clear({force: true})
        cy.get('.landing-hero [name=inquiry].form-control').clear({force: true}).type(element.case, {force: true})
        })
    })
    
And('I click the Submit button once again of Hero block in PPC Landing', ()=> {
    cy.get('.landing-hero .f-inquiry-form [name=email].form-control').scrollIntoView({force: true})
    cy.get('.landing-hero [element=button]').click({force: true})
})
    
Then('I should see another alert Message in Hero block of PPC Landing page.', ()=> {
    cy.get('.landing-hero .f-inquiry-form').within(() => {
        cy.get('[name=email]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        })
    })
    
When('I clear all the field and enter every details except Description in Hero block of PPC Landing page', (datatable)=> {
    datatable.hashes().forEach((element)=>{
        cy.get('.landing-hero [name=name].form-control').scrollIntoView({force: true}).clear({force: true}).type(element.name, {force: true})
        cy.get('.landing-hero [name=phone].form-control').clear({force: true}).type(element.phone, {force: true})
        cy.get('.landing-hero [name=email].form-control').clear({force: true}).type(element.email, {force: true})
        cy.get('.landing-hero [name=inquiry].form-control').clear({force: true})
        })
    })
    
And('I click the Submit Button again in the Hero block of PPC Landing Page', () => {
    cy.get('.landing-hero .f-inquiry-form [name=inquiry].form-control').scrollIntoView({force: true})
    cy.get('.landing-hero [element=button]').click({force: true})
    })
    
Then('I should see another alert Message in the Hero block of PPC Landing Page', ()=> {
    cy.get('.landing-hero .f-inquiry-form').within(() => {
        cy.get('[name=inquiry]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        })
    })
    
When('I clear all the field and click the submit button of the Hero block PPC Landing Page.', ()=> {
    cy.get('.landing-hero [name=name].form-control').scrollIntoView({force: true}).clear({force: true})
    cy.get('.landing-hero [name=phone].form-control').clear({force: true})
    cy.get('.landing-hero [name=email].form-control').clear({force: true})
    cy.get('.landing-hero [name=inquiry].form-control').clear({force: true})
    cy.get('.landing-hero [element=button]').click({force: true})
    })
    
Then('I will only see alert message of the hero block of the PPC Landing Page', ()=> {
    cy.get('.landing-hero .f-inquiry-form').within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        })
    })
})

//PPC Footer Contact Form Won't Submit If The Name, Email, or Description Is Missing
Given(`I logged in on the Render version of the Premium Site of the PPC landing page and scroll to the footer contact form`,() => {
    cy.visit('https://legal:fit@a-price.builder.sandbox.legalfit.io/family-law-attorney-tulsa/')
})

When(`I fill every contents of form leaving name field empty on PPC Landing Footer form`, (datatable) => {
datatable.hashes().forEach((element)=>{
  cy.get('.landing-footer [name=phone].form-control').scrollIntoView({force: true}).type(element.phone, {force: true})
  cy.get('.landing-footer [name=email].form-control').type(element.email, {force: true})
  cy.get('.landing-footer [name=inquiry].form-control').type(element.case, {force: true})
  })
})

And(`I press Hero Submit button of the footer PPC landing form`, () => {
    cy.get('.landing-footer .f-inquiry-form [name=name].form-control').scrollIntoView({force: true})
    cy.get('.landing-footer [element=button]').click({force: true})
})

Then('I should see "Please fill out this field." message under Name field of PPC landing footer form.',() => {
   // cy.get('input:invalid').should('have.length', 3)
    cy.get('.landing-footer .f-inquiry-form').within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
          .should('equal', 'Please fill out this field.')
    })

When('I clear all the field and enter every details except email in the PPC Landing Page footer form',(datatable)=>{
    datatable.hashes().forEach((element)=>{
        cy.get('.landing-footer [name=name].form-control').scrollIntoView({force: true}).type(element.name, {force: true})
        cy.get('.landing-footer [name=phone].form-control').clear({force: true}).type(element.phone, {force: true})
        cy.get('.landing-footer [name=email].form-control').clear({force: true})
        cy.get('.landing-footer [name=inquiry].form-control').clear({force: true}).type(element.case, {force: true})
        })
    })
    
And('I click the Submit button once again on the footer of PPC landing page footer form', ()=> {
    cy.get('.landing-footer .f-inquiry-form [name=email].form-control').scrollIntoView({force: true})
    cy.get('.landing-footer [element=button]').click({force: true})
    })
    
Then('I should see another alert Message on the PPC Landing page footer form.', ()=> {
    cy.get('.landing-footer .f-inquiry-form').within(() => {
        cy.get('[name=email]').invoke('prop', 'validationMessage')
              .should('equal', 'Please fill out this field.')
        })
    })
    
When('I clear all the field and enter every details except Description in the PPC Landing footer form', (datatable)=> {
    datatable.hashes().forEach((element)=>{
        cy.get('.landing-footer [name=name].form-control').scrollIntoView({force: true}).clear({force: true}).type(element.name, {force: true})
        cy.get('.landing-footer [name=phone].form-control').clear({force: true}).type(element.phone, {force: true})
        cy.get('.landing-footer [name=email].form-control').clear({force: true}).type(element.email, {force: true})
        cy.get('.landing-footer [name=inquiry].form-control').clear({force: true})
        })
    })
    
And('I click the Submit Button again of PPC Landing footer form', () => {
    cy.get('.landing-footer .f-inquiry-form [name=inquiry].form-control').scrollIntoView({force: true})
    cy.get('.landing-footer [element=button]').click({force: true})
    })
    
Then('I should see another alert Message and form wont submit on PPC Landing footer form', ()=> {
    cy.get('.landing-footer .f-inquiry-form').within(() => {
        cy.get('[name=inquiry]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        })
    })
    
When('I clear all the field and click the submit button on PPC Landing footer form.', ()=> {
    cy.get('.landing-footer [name=name].form-control').scrollIntoView({force: true}).clear({force: true})
    cy.get('.landing-footer [name=phone].form-control').clear({force: true})
    cy.get('.landing-footer [name=email].form-control').clear({force: true})
    cy.get('.landing-footer [name=inquiry].form-control').clear({force: true})
    cy.get('.landing-footer [element=button]').click({force: true})
    })
    
Then('I will only see alert message on PPC landing footer form', ()=> {
    cy.get('.landing-footer .f-inquiry-form').within(() => {
        cy.get('[name=name]').invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        })
    })
})