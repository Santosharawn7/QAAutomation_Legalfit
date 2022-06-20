/// <reference types="cypress" />

describe('Opening the Karmicare', ()=> {
    before(()=>{
        cy.visit('https://voltaic-nebula-308020.web.app/en')
    })

    it('Opening the cart',()=> {
        cy.get('.cart-pill').click()
    })

    it('Adding to cart',()=> {
        cy.get('.upsell-products').eq(0).click()
    })

    it('Verifying item on cart',()=> {
        cy.get('.cart-item').should('be.visible')
    })

    it('Verifying the amount',()=> {
        cy.get('.sub-total-wrapper .sub-total-amount').invoke('text').then(text =>{
            const amount = text.trim()
            cy.log(amount)
        })
    })

})