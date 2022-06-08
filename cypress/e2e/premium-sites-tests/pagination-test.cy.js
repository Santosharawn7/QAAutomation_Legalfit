/// <reference types="cypress" />


describe('Testing the functionality of RTE', ()=> {
    beforeEach(()=>{
        cy.login()
    })

    it('Typing some text for display of premium sites',()=> {
        cy.get('.table tbody tr').should('have.lengthOf.lte', 30)
        cy.get('#filter').type('everest')
        cy.get('.page-item').contains('1').should('be.visible').and('have.attr','aria-checked','true')
        cy.get('.page-item').contains('2').should('have.attr','aria-checked','false')
        cy.get('select').select('Live')
        cy.get('.table .text-capitalize').eq(0).should('contain.text','live')
        cy.get('.table .text-capitalize').each(($sites) => {
            cy.wrap($sites).invoke('text').then(text => {
                const siteStatus = text.trim()
                cy.wrap($sites).should('contain.text', siteStatus).and('not.contain.text','in progress').and('not.contain.text','canceled')
            })
        })
        cy.get('.page-item').contains('1').should('be.visible').and('have.attr','aria-checked','true')
    })

    it('Checking on the Create new premium sites page', ()=> {
        cy.get('#websites-create-new').click()
        cy.request('api/premium-website/types/').then((types) => {
            expect(types.status).to.eq(200)
        })
        cy.get('#filter').type('everest')
        cy.get('.page-item').contains('1').should('be.visible').and('have.attr','aria-checked','true')
        cy.get('.page-item').contains('2').should('not.exist')
        
    })

    it('Typing some text for display of Layouts',()=> {
        cy.get('#sidebar-templates').click()
        cy.request('/templates').then((layouts) => {
            expect(layouts.status).to.eq(200)
        })
        cy.get('#filter').type('everest')
        cy.get('#filter').clear()
        cy.get('.page-item').contains('1').should('be.visible').should('have.attr','aria-checked','true')
        cy.get('select').select('Refined')
        cy.get('.table .template-style').eq(0).should('contain.text','refined')
        cy.get('.table .template-style').each(($sites) => {
            cy.wrap($sites).should('contain.text', 'refined').and('not.contain.text','bold').and('not.contain.text','clean')
     
        })
        cy.get('.page-item').contains('1').should('be.visible').and('have.attr','aria-checked','true')
    })

    it('Typing some text for display of blocks',()=> {
        cy.get('#sidebar-blocks').click()
        cy.request('/blocks').then((blocks) => {
            expect(blocks.status).to.eq(200)
        })
        cy.get('#filter').type('everest')
     //   cy.get('.page-item').contains('1').should('be.visible').should('have.attr','aria-checked','true')

     
    })

    
    it.only('Typing some text for display of Buttons',()=> {
        cy.get('#sidebar-buttons').click()
        cy.get('#sidebar-buttons').should('have.class','active')
        cy.request('/buttons/').then((buttons) => {
            expect(buttons.status).to.eq(200)
        })
        cy.get('.table tbody tr').should('have.lengthOf.lte', 30)
        cy.get('#filter').type('everest')
      //  cy.get('.page-item').contains('1').should('be.visible').should('have.attr','aria-checked','true')

    })

    it('Typing some text for display of pages',()=> {
        cy.get('#sidebar-pages').click()
        cy.get('#sidebar-pages').should('have.class','active')
        cy.request('/pages/').then((pages) => {
            expect(pages.status).to.eq(200)
        })
        cy.get('#filter').type('everest')
       // cy.get('.page-item').contains('1').should('be.visible').should('have.attr','aria-checked','true')

    })

    it('Typing some text for display of page types',()=> {
        cy.get('#sidebar-page-types').click()
        cy.get('#sidebar-page-types').should('have.class','active')
        cy.request('/page-types/').then((pagestype) => {
            expect(pagestype.status).to.eq(200)
        })
        cy.get('#filter-search').type('Blog')
      //  cy.get('.page-item').contains('1').should('be.visible').should('have.attr','aria-checked','true')

    })

    it('Typing some text for display of page types',()=> {
        cy.get('#sidebar-apps').click()
        cy.get('#sidebar-apps').should('have.class','active')
        cy.request('/apps/').then((apps) => {
            expect(apps.status).to.eq(200)
        })
        cy.get('#filter-search').type('Live Chat')
        cy.get('.page-item').contains('1').should('be.visible').should('have.attr','aria-checked','true')
    })
})