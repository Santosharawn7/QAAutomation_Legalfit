/// <reference types="cypress" />


describe('Testing the functionality of RTE', ()=> {
    beforeEach(()=>{
        cy.login()
    })

    it('Typing some text for display of pages',()=> {
        cy.get('#sidebar-pages').click()
        cy.get('#sidebar-pages').should('have.class','active')
        cy.request('/pages/').then((pages) => {
            expect(pages.status).to.eq(200)
        })
    })


})