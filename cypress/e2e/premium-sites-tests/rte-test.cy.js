
describe('Testing the functionality of RTE', ()=> {
    beforeEach(()=>{
        cy.login()
        cy.openEditorSite()
        cy.showSettings()
        cy.showBadges()
        cy.showInsertBlocks()
    })

    it.only('Testing on Homepage RTE', ()=> {
        cy.get('.btn').contains('Insert body Block').click()
        cy.get('.category-row').contains('Seo').click()
        cy.get('.drawer-body .block-preview').each((bname) => {
            cy.wrap(bname).trigger('mouseover')
            cy.wrap(bname).children('.block-name').invoke('text').then((text) => {
                cy.log(text.trim())
                if (text.trim() == 'Maniatis SEO'){
                    cy.wrap(bname).click()
                }
            })
        })
        cy.get('.btn').contains('Confirm Insert Block').click()
        cy.get('.btn').contains('Confirm Insert Block').should('not.exist') 
        cy.showSettings()
        cy.showBadges() 
        cy.get('.body-container .position-relative .home').each($block => {
            cy.wrap($block).children('.badge').invoke('text').then(text => { 
                if(text.trim() == 'Maniatis SEO'){
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).clear().type('Some test')
                    cy.get('.rte-menubar').should('be.visible')

                    cy.get('.rte-menubar .menubar__button').contains('H2').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('contain.html', 'h2')
                    cy.get('.rte-menubar .menubar__button').contains('H2').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('not.contain.html', 'h2')

                    cy.get('.rte-menubar .menubar__button').contains('H3').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('contain.html', 'h3')
                    cy.get('.rte-menubar .menubar__button').contains('H3').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('not.contain.html', 'h3')

                    cy.get('.rte-menubar .menubar__button').contains('H4').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('contain.html', 'h4')
                    cy.get('.rte-menubar .menubar__button').contains('H4').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('not.contain.html', 'h4')

                    cy.get('.rte-menubar .menubar__button .format-list-bulleted-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('contain.html', 'ul')
                    cy.get('.rte-menubar .menubar__button .format-list-bulleted-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('not.contain.html', 'ul')

                    cy.get('.rte-menubar .menubar__button .format-list-numbered-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('contain.html', 'ol')
                    cy.get('.rte-menubar .menubar__button .format-list-numbered-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('not.contain.html', 'ol')

                    cy.contains('Some test').click({force:true}).type('{ctrl+a}')
                    cy.get('.rte-menubar .format-bold-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('contain.html', 'strong')
                    cy.get('.rte-menubar .format-bold-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('not.contain.html', 'strong')

                    cy.get('.rte-menubar .format-italic-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('contain.html', 'em')
                    cy.get('.rte-menubar .format-italic-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror').eq(2).should('not.contain.html', 'em')

                    cy.get('.maniatis-seo .editor .ProseMirror p').then(text => {
                        expect(text).to.have.have.class('text-left')
                    })
                    cy.get('.rte-menubar .format-align-center-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror p').then(text => {
                        expect(text).to.have.have.class('text-center')
                    })
                    cy.get('.rte-menubar .format-align-right-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror p').then(text => {
                        expect(text).to.have.have.class('text-right')
                    })
                    cy.get('.rte-menubar .format-align-justify-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror p').then(text => {
                        expect(text).to.have.have.class('text-justify')
                    })
                    cy.get('.rte-menubar .format-align-left-icon').click()
                    cy.get('.maniatis-seo .editor .ProseMirror p').then(text => {
                        expect(text).to.have.have.class('text-left')
                    })

                    cy.get('.rte-menubar .menubar__button .image-area-icon').click()
                    cy.get('.image-list-container .single-image-container').eq(0).click()
                    cy.get('.settings-footer button').contains('Insert').click()
                    cy.get(' .maniatis-seo .editor img').should('be.visible')
                    
                    cy.get('.seo-container .btn .editable-field').click()
                    cy.get('.rte-menubar').should('not.be.visible')       
                    }
                })
        })

        cy.get('.settings-container > .settings-icons > .settings-icon-container').eq(2).click({force: true})
        cy.get('.settings-footer button').contains('Remove Block').click({force:true})
        cy.get('.settings-footer button').contains('Continue').click({force: true})
        cy.get('.maniatis-seo').should('not.exist')
    })

    it('Opening the RTE on the interior pages', ()=> {
        cy.get('.nav-link').contains('Gotham Team Detail').click()
        cy.get('.container .order-first .editor .ProseMirror').eq(1).click()
        cy.scrollTo('top')
        cy.get('.order-first .rte-menubar').should('be.visible')
    } )
})