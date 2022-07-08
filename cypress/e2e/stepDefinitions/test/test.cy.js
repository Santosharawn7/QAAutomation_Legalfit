import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Given('I am doing this',()=>{
    cy.openEditorSite()
  
})

When('I make that',()=>{
    cy.get('.nav-item.dropdown').then(($el)=>{
        cy.wrap($el).children('.dropdown-menu').scrollIntoView()('mouseover')
    })
    // cy.get('.nav-item').contains('Service Index').then(($el) =>{
    //     cy.wrap($el).invoke('show')
    // })
    // cy.get('.nav-item.dropdown').contains('Service Index').scrollIntoView().then($el=>{
    //     cy.wrap($el).children('dropdown-menu').trigger('mousedown').invoke('show')
    // })
//     cy.get('.interior-hero .edit-button').then(button =>{
//       cy.wrap(button).invoke('text').then(text => {
//            const firstText = text.trim()
//             cy.wrap(button).should('contain.text', firstText)
//             cy.wrap(button).click().clear().type('TEST1', {delay: 100})
//             cy.wrap(button).should('not.contain.text', firstText).and('contain.text', 'TEST1')  
//         })
        
//    })
})

