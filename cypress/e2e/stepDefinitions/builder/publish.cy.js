import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import Director from "../../pageObjects/director-ps.po";
import Login from "../../pageObjects/login.po";

const login = new Login()
const director = new Director()

//Homepage
Given('I am logged in on builder',()=>{
    cy.openEditorSite()
})

When('I make any changes on the builder on the Hero Block',()=>{
    cy.get('.hero-container .edit-button ').then(content =>{
      cy.wrap(content).invoke('text').then(text => {
           const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('TEST', { delay: 300})
            cy.wrap(content).should('not.contain.text', firstText).and('contain.text', 'TEST')  
        })
        
   })
})

Then('I see "Has Changes" badge at the top left of the page',()=>{
    cy.get('.text-published').should('be.visible')
    cy.get('.text-changes').should('be.visible')
    cy.get('.text-changes').should('contain.text','Has Changes')
})

When('I click the Publish button',()=>{
    cy.get('button').contains('Publish Page').click()
})

Then('I can no longer see the "Has Changes" badge',()=>{
    cy.get('.toast-body').should('be.visible').and('contain.text','Published')
    cy.request('https://atestsite.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal',200)
 //   cy.get('.text-changes').contains('Has Changes').should('not.exist')
})

When('I go to the render version of the site',()=>{
    cy.visit('https://legal:fit@atestsite.builder.sandbox.legalfit.io/')
})

Then('I can see the published changes',()=>{
    cy.get('.hero-container .btn').should('contain.text','TEST')
    cy.go('back')
    cy.get('.hero-container .edit-button ').click().clear()
    cy.get('.hero-container .edit-button ').type('CONTACT ME')
    cy.get('button').contains('Publish Page').click()
    cy.go('forward')
})

//Interior page
Given('I am logged in on the interior page',()=>{
    cy.openEditorSite()
    cy.get('.nav-item').eq(1).click()
})

When('I make changes on the interior page',()=>{
    cy.get('.interior-hero .edit-button').then(button =>{
      cy.wrap(button).invoke('text').then(text => {
           const firstText = text.trim()
            cy.wrap(button).should('contain.text', firstText)
            cy.wrap(button).click().clear().type('TEST1', {delay: 300})
            cy.wrap(button).should('not.contain.text', firstText).and('contain.text', 'TEST1')  
        })
        
   })
})

Then('I can see "Has Changes" badge at the top left of the page of the interior page',()=>{
    cy.get('.text-published').should('be.visible')
    cy.get('.text-changes').should('be.visible')
    cy.get('.text-changes').should('contain.text','Has Changes')
})

When('I click the Publish button on the interior page',()=>{
    cy.get('button').contains('Publish Page').click()
})

Then('I can no longer see the "Has Changes" badge on the interior page',()=>{
    cy.get('.toast-body').should('be.visible').and('contain.text','Published')
    cy.request('https://atestsite.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal',200)
 //   cy.get('.text-changes').contains('Has Changes').should('not.exist')
})

When('I navigate to the render version of interior page',()=>{
    cy.visit('https://legal:fit@atestsite.builder.sandbox.legalfit.io/service-index')
})

Then('I can see the published changes on that interior page',()=>{
    cy.get('.interior-hero .btn').should('contain.text','TEST1')
    cy.go('back')
    cy.get('.interior-hero .edit-button').click().clear()
    cy.get('.interior-hero .edit-button').type('SCHEDULE A FREE CONSULTATION', {delay: 100})
    cy.get('button').contains('Publish Page').click()
    cy.go('forward')
})

//PPC Landing page
Given('I am logged in on the PPC Landing page',()=>{
    cy.openEditorSite()
    cy.get('.nav-item').contains('PPC Landing').click()
})

When('I make changes on the PPC Landing page',()=>{
    cy.get('.landing-hero .edit-button').then(content =>{
      cy.wrap(content).invoke('text').then(text => {
           const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('TEST1', {delay: 300})
            cy.wrap(content).should('not.contain.text', firstText).and('contain.text', 'TEST1')  
        })
        
   })
})

Then('I can see "Has Changes" badge at the top left of the page of the PPC Landing page',()=>{
    cy.get('.text-published').should('be.visible')
    cy.get('.text-changes').should('be.visible')
    cy.get('.text-changes').should('contain.text','Has Changes')
})

When('I click the Publish button on the PPC Lading page',()=>{
    cy.get('button').contains('Publish Page').click()
})

Then('I can no longer see the "Has Changes" badge on the PPC Landing page',()=>{
    cy.get('.toast-body').should('be.visible').and('contain.text','Published')
    cy.request('https://atestsite.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal',200)
 //   cy.get('.text-changes').contains('Has Changes').should('not.exist')
})

When('I navigate to the render version of PPC Landing page',()=>{
    cy.visit('https://legal:fit@atestsite.builder.sandbox.legalfit.io/ppc-landing')
})

Then('I can see the published changes on that PPC Landing page',()=>{
    cy.get('.landing-hero .btn').should('contain.text','TEST1')
    cy.go('back')
    cy.get('.landing-hero .edit-button').click().clear()
    cy.get('.landing-hero .edit-button').type('Submit')
    cy.get('button').contains('Publish Page').click()
    cy.go('forward')
})

When('I send lead emails',(datatable)=>{
    cy.visit('https://legal:fit@atestsite.builder.sandbox.legalfit.io/ppc-landing')
    datatable.hashes().forEach((element) => {
        cy.get('.landing-hero [name=name].form-control').type(element.name,{force: true})
        cy.get('.landing-hero [name=email].form-control').type(element.email, {force: true})
        cy.get('.landing-hero [name=inquiry].form-control').type(element.case, {force: true})
      }) 
      cy.get('.landing-hero [element=button]').click({force: true})
})

Then('I can see the "The inquiry has been sent" message on the page.',()=>{
    cy.url().should('contain','/leads/send_inquiry/')
    cy.contains('Your inquiry has been sent').should('be.visible')
})

//Child page
Given('I am logged in on the child page',()=>{
    cy.openEditorSite()
})

When('I make changes on the child page',()=>{
    cy.get('.interior-hero .edit-button').then(content =>{
      cy.wrap(content).invoke('text').then(text => {
           const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('TEST1', {delay: 100})
            cy.wrap(content).should('not.contain.text', firstText).and('contain.text', 'TEST1')  
        })
        
   })
})

Then('I can see "Has Changes" badge at the top left of the page of the child page',()=>{
    cy.get('.text-published').should('be.visible')
    cy.get('.text-changes').should('be.visible')
    cy.get('.text-changes').should('contain.text','Has Changes')
})

When('I click the Publish button on the child page',()=>{
    cy.get('button').contains('Publish Page').click()
})

Then('I can no longer see the "Has Changes" badge on the child page',()=>{
    cy.get('.toast-body').should('be.visible').and('contain.text','Published')
    cy.request('https://atestsite.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal',200)
 //   cy.get('.text-changes').contains('Has Changes').should('not.exist')
})

When('I navigate to the render version of child page',()=>{
    cy.visit('https://legal:fit@atestsite.builder.sandbox.legalfit.io/testpage/gothamtd/')
})

Then('I can see the published changes on that child page',()=>{
    cy.get('.interior-hero .btn').should('contain.text','TEST1')
    cy.go('back')
    cy.get('.interior-hero .edit-button').click().clear()
    cy.get('.interior-hero .edit-button').type('TEST')
    cy.get('button').contains('Publish Page').click()
    cy.go('forward')
})

//Grandchild page
Given('I am logged in on the grandchild page',()=>{
  cy.openEditorSite()
})

When('I make changes on the grandchild page',()=>{
    cy.get('.interior-hero-text').then(content =>{
      cy.wrap(content).invoke('text').then(text => {
           const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('TEST1', {delay: 100})
            cy.wrap(content).should('not.contain.text', firstText).and('contain.text', 'TEST1')  
        })
        
   })
})

Then('I can see "Has Changes" badge at the top left of the page of the grandchild page',()=>{
    cy.get('.text-published').should('be.visible')
    cy.get('.text-changes').should('be.visible')
    cy.get('.text-changes').should('contain.text','Has Changes')
})

When('I click the Publish button on the grandchild page',()=>{
    cy.get('button').contains('Publish Page').click()
})

Then('I can no longer see the "Has Changes" badge on the grandchild page',()=>{
    cy.get('.toast-body').should('be.visible').and('contain.text','Published')
    cy.request('https://contest.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal',200)
 //   cy.get('.text-changes').contains('Has Changes').should('not.exist')
})

When('I navigate to the render version of grandchild page',()=>{
    cy.visit('https://legal:fit@contest.builder.sandbox.legalfit.io/testpage/gothamtd/')
})

Then('I can see the published changes on that grandchild page',()=>{
    cy.get('.interior-hero-text').should('contain.text','TEST1')
    cy.go('back')
    cy.get('.interior-hero-text').click().clear()
    cy.get('.interior-hero-text').type('TEST')
    cy.get('button').contains('Publish Page').click()
    cy.go('forward')
})

//Great Grandchild page
Given('I am logged in on the great grandchild page',()=>{
    cy.openEditorSite()
})

When('I make changes on the great grandchild page',()=>{
    cy.get('.interior-hero-text').then(content =>{
      cy.wrap(content).invoke('text').then(text => {
           const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('TEST1', {delay: 100})
            cy.wrap(content).should('not.contain.text', firstText).and('contain.text', 'TEST1')  
        })
        
   })
})

Then('I can see "Has Changes" badge at the top left of the page of the great grandchild page',()=>{
    cy.get('.text-published').should('be.visible')
    cy.get('.text-changes').should('be.visible')
    cy.get('.text-changes').should('contain.text','Has Changes')
})

When('I click the Publish button on the great grandchild page',()=>{
    cy.get('button').contains('Publish Page').click()
})

Then('I can no longer see the "Has Changes" badge on the great grandchild page',()=>{
    cy.get('.toast-body').should('be.visible').and('contain.text','Published')
    cy.request('https://contest.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal',200)
 //   cy.get('.text-changes').contains('Has Changes').should('not.exist')
})

When('I navigate to the render version of great grandchild page',()=>{
    cy.visit('https://legal:fit@contest.builder.sandbox.legalfit.io/testpage/gothamtd/')
})

Then('I can see the published changes on that great grandchild page',()=>{
    cy.get('.interior-hero-text').should('contain.text','TEST1')
    cy.go('back')
    cy.get('.interior-hero-text').click().clear()
    cy.get('.interior-hero-text').type('TEST')
    cy.get('button').contains('Publish Page').click()
    cy.go('forward')
})