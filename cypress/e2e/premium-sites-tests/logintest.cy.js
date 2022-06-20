describe('Opening the Karmicare', ()=> {
    before(()=>{
        cy.visit('https://studio.sandbox.legalfit.io/')
    })

    it('Opening the cart',()=> {
        cy.get('b-form').invoke('show')
    })
})