import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import Editor from "../pageObjects/editor-ps.po";
import RTE from "../pageObjects/rte-menu.po";

const rte = new RTE()
const editor = new Editor()

Given('I login', () => {
  cy.login()
})

Then(`I open the Editor`, () => {
    cy.openEditorSite()
  })

Then(`I display all the settings, badges and Insert Block buttons`, () => {
    cy.showSettings()
    cy.showBadges()
    cy.showInsertBlocks()
  })

Then(`I insert the body block containing the RTE`, () => {
    editor.insertBodyBlock().click()
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
  })

Then(`I display the RTE menu`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                rte.textField().eq(2).clear().type('Some test')
                rte.menubar().should('be.visible')
            }
        })
    })
  })
  
Then(`I select the Text`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                cy.contains('Some test').click({force:true}).type('{ctrl+a}')
            }
        })
    })
  })  

  Then(`I show the H2 action`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                rte.headingMenu().contains('H2').click()
                rte.textField().eq(2).should('contain.html', 'h2')
                rte.headingMenu().contains('H2').click()
            }
        })
    })
  })

  Then(`I show the H3 action`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                rte.headingMenu().contains('H3').click()
                rte.textField().eq(2).should('contain.html', 'h3')
                rte.headingMenu().contains('H3').click()
            }
        })
    })
  })

  Then(`I show the H4 action`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                rte.headingMenu().contains('H4').click()
                rte.textField().eq(2).should('contain.html', 'h4')
                rte.headingMenu().contains('H4').click()
            }
        })
    })
  })

  Then(`I show the bold action`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                rte.boldMenu().click()
                rte.textField().eq(2).should('contain.html', 'strong')
                rte.boldMenu().click()
            }
        })
    })
  })

  Then(`I show the italic action`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                rte.italicMenu().click()
                rte.textField().eq(2).should('contain.html', 'em')
                rte.italicMenu().click()
            }
        })
    })
  })

  Then(`I insert the image`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                rte.imageMenu().click()
                rte.imageContainer().eq(0).click()
                cy.get('.settings-footer button').contains('Insert').click()
                cy.get(' .maniatis-seo .editor img').should('be.visible')
            }
        })
    })
  })

  Then(`I close the RTE Menubar`, () => {
    cy.get('.body-container .position-relative .home').each($block => {
        cy.wrap($block).children('.badge').invoke('text').then(text => { 
            if(text.trim() == 'Maniatis SEO'){
                cy.wrap($block).contains('Maniatis SEO').click()
                cy.get('.rte-menubar').should('not.be.visible')
            }
        })
    })
  })

  Then(`I remove the block`, () => {
    cy.get('.settings-container > .settings-icons > .settings-icon-container').eq(2).click({force: true})
    cy.get('.settings-footer button').contains('Remove Block').click({force:true})
    cy.get('.settings-footer button').contains('Continue').click({force: true})
    cy.get('.maniatis-seo').should('not.exist')
  })

  And(`I open RTE on interior page`, () => {
    cy.visit('https://atestsite.builder.sandbox.legalfit.io/service-index/gotham-team-detail/')
    cy.get('.container .order-first .editor .ProseMirror').eq(1).click()
    cy.scrollTo('top')
    cy.get('.order-first .rte-menubar').should('be.visible')
  })