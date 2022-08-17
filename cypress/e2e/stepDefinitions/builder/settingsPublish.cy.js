import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import chaiColors from 'chai-colors'
import { EditorFeatures } from "../../pageObjects/editor-ps.po";
chai.use(chaiColors)

const firstBrandColor = "#1891F3"
const firstAccentColor = "#F1B636"
const changedBrandColor = "#AA2D48"
const changedAccentColor = "#36F163"
const oldDesktoplogo = 'Cypress1.png'
const newDesktoplogo = 'cypress.png'
const oldMobileLogo = 'cypress-logo-mobile.png'
const newMobilelogo = 'cypressMobileNew.png'
const editorFeatures = new EditorFeatures()


Given('I am in the builder',()=>{
    cy.openEditorSite()
})

When('I open the page settings drawer', ()=>{
    cy.get('[id=sidebar-design]').click()
})

Then('I should see the color settings',()=>{
    cy.get('.drawer-body').should('exist').and('contain.text','Brand Color')
}) 

When('I change the brand color',()=>{
    cy.get('.color-picker .color-picker-input').eq(0).click().clear().type(changedBrandColor)
}) 

Then('I should see changes on the builder',()=>{
    cy.get('header .nav-top').should('have.css','background-color').and('be.colored',changedBrandColor)
}) 

When('I close the drawer',()=>{
    cy.get('.close-icon').click()
})

Then('I should see the changes has been reverted',()=>{
    cy.get('header .nav-top').should('have.css','background-color').and('be.colored', firstBrandColor)
}) 

When('I open the drawer and make the changes again in both Brand and Accent color',()=>{
    cy.get('[id=sidebar-design]').click()
    cy.get('.color-picker .color-picker-input').eq(0).click().clear().type(changedBrandColor)
    cy.get('.color-picker .color-picker-input').eq(1).click().clear().type(changedAccentColor)
}) 

Then('I should see the changes on the builder',()=>{
    cy.get('header .nav-top').should('have.css','background-color').and('be.colored', changedBrandColor)
}) 

When('I click Publish Settings',()=>{
    cy.get('.save-button-container').click()
}) 

Then('I should see the drawer being closed and notification saying the "Your Changes May Take a Moment to Load"',()=>{
    cy.get('.drawer-body').should('not.exist')
    editorFeatures.toast().and('contain.text','Your Changes May Take a Moment to Load')
}) 

And('I should see both Brand and Accent Color being changed in the page',()=>{
    cy.get('header .nav-top').should('have.css','background-color').and('be.colored', changedBrandColor)
    cy.get('.hero-container .btn').then(buttons => {
        cy.wrap(buttons).trigger('mousedown')
        cy.wrap(buttons).realHover()
    })
    cy.get('.hero-container .btn').should('have.css','background-color').and('be.colored', changedAccentColor)
    
    //revertchanges
    cy.get('.top-nav-container').click()
    cy.get('[id=sidebar-design]').click()
    cy.get('.color-picker .color-picker-input').eq(0).click().clear().type(firstBrandColor)
    cy.get('.color-picker .color-picker-input').eq(1).click().clear().type(firstAccentColor)
    cy.get('.save-button-container').click()
}) 


//logo
Given('I am in the builder on premium sites',()=>{
    cy.openEditorSite()
    cy.get('.hero-container .btn').should('be.visible')
})

When('I open the design drawer', ()=>{
    cy.get('[id=sidebar-design]').click()
})

Then('The design drawer is opened',()=>{
    cy.get('.drawer-body').should('exist').and('contain.text','Brand Color')
}) 

When('I open the Logo upload container',()=>{
    cy.get('.list-group-item').contains('Logo').click()
}) 

Then('I should see the logos of the page',()=>{
    cy.get('.desktop-logo img').should('exist')
    cy.get('.desktop-logo .size-info .value').should('contain.text','25684 KB')
}) 

When('I upload a new logos',()=>{
    cy.get('.desktop-logo input[type=file]').attachFile(newDesktoplogo)
    cy.get('.mobile-logo input[type=file]').attachFile(newMobilelogo)
    cy.get('.desktop-logo .size-info .value').should('not.contain.text','25684 KB')
    cy.get('.mobile-logo .size-info .value').should('not.contain.text','6285 KB')
})

And('I publish the settings',()=>{
   cy.get('.save-button-container').contains('Publish Settings').click()
}) 

Then('I can see new logo on the page',()=>{
    cy.get('.drawer-body').should('not.exist')
    editorFeatures.toast().and('contain.text','Logo Updated Successfully')
    cy.get('.logo').should('be.visible')
    //reverting changes
    cy.get('.top-nav-container').click()
    cy.get('[id=sidebar-design]').click()
    cy.get('.list-group-item').contains('Logo').click()
    cy.get('.desktop-logo .size-info .value').should('contain.text','57042 KB')
    cy.get('.mobile-logo .size-info .value').should('contain.text','12734 KB')
    cy.get('.desktop-logo input[type=file]').attachFile(oldDesktoplogo)
    cy.get('.mobile-logo input[type=file]').attachFile(oldMobileLogo)
    cy.get('.desktop-logo .size-info .value').should('not.contain.text','57042 KB')
    cy.get('.mobile-logo .size-info .value').should('not.contain.text','12734 KB')
    cy.get('.save-button-container').contains('Publish Settings').click()
    cy.get('.drawer-body').should('not.exist')
    editorFeatures.toast().and('contain.text','Logo Updated Successfully')
}) 

//newFavicon
Given('I am on a builder of premium sites',()=>{
    cy.openEditorSite()
    cy.get('.hero-container .btn').should('be.visible')
})

When('I open a design drawer', ()=>{
    cy.get('[id=sidebar-design]').click()
})

Then('The drawer is opened',()=>{
    cy.get('.drawer-body').should('exist').and('contain.text','Brand Color')
}) 

When('I clicked the FavIcon',()=>{
    cy.get('.list-group-item').contains('Favicon').click()
}) 

Then('I can see the option to upload a FavIcon',()=>{
    cy.get('.favicon-wrapper').should('be.visible')
    cy.get('.favicon-image').should('be.visible')
}) 

When('I upload a new FavIcon',()=>{
    cy.get('.favicon-wrapper input[type=file]').attachFile(newDesktoplogo)
})

Then('I can see the new uploaded FavIcon',()=>{
    cy.get('.favicon-image').should('be.visible')
}) 

And('I can publish the settings',()=>{
    cy.get('.save-button-container').contains('Publish Settings').click()  
    editorFeatures.toast().and('contain.text','Favicon Updated Successfully')
})

//FaviconGenerate
Given('I am on a builder of premium sites',()=>{
    cy.openEditorSite()
    cy.get('.hero-container .btn').should('be.visible')
})

When('I open a design drawer', ()=>{
    cy.get('[id=sidebar-design]').click()
})

Then('The drawer is opened',()=>{
    cy.get('.drawer-body').should('exist').and('contain.text','Brand Color')
}) 

When('I clicked the FavIcon',()=>{
    cy.get('.list-group-item').contains('Favicon').click()
}) 

Then('I can see the option to upload a FavIcon',()=>{
    cy.get('.favicon-wrapper').should('be.visible')
    cy.get('.favicon-image').should('be.visible')

}) 

When('I click on Generate FavIcon',()=>{
    cy.get('.list-group-item').contains('Generate Favicon').click()
})

Then('I can see option settings to generate new Favicon',()=>{
    cy.get('.drawer-label').should('contain.text','Favicon Generator')
}) 

When('I generate a new Favicon',()=>{
    cy.get('#font-text-input').clear().type('CY')
    cy.get('.color-picker .color-picker-input').eq(0).click().clear().type(changedBrandColor)
    cy.get('.favicon-image').should('be.visible')
}) 

Then('I can publish settings',()=>{
    cy.get('.save-button-container').contains('Publish Settings').click()  
    editorFeatures.toast().and('contain.text','Favicon Updated Successfully')
}) 

//FontPairs
Given('I am on a builder of premium sites',()=>{
    cy.openEditorSite()
    cy.get('.hero-container .btn').should('be.visible')
})

When('I open a design drawer', ()=>{
    cy.get('[id=sidebar-design]').click()
})

Then('The drawer is opened',()=>{
    cy.get('.drawer-body').should('exist').and('contain.text','Brand Color')
}) 

When('I clicked the Font pairs',()=>{
   cy.get('.list-group-item').contains('Font Pair').click()
}) 

Then('I can see Font Settings',()=>{
    cy.get('.drawer-label').contains('Font Settings').should('exist')
}) 

When('I click on one of the font pairs',()=>{
    cy.get('.font-pair-list .font-family').contains('Open Sans 700 / Lora regular').click()
})

Then('I can see changes on the font family used in builder',()=>{
    cy.get('.hero-container .btn').should('have.css','font-family').and('eq','Lora')
}) 

When('I click Publish settings',()=>{
    cy.get('.save-button-container').contains('Publish Settings').click()  
}) 

Then('The changes are published',()=>{
    editorFeatures.toast().and('contain.text','Your Changes May Take a Moment to Load')
}) 

And('The changes are intact on the builder',()=>{
    cy.get('.hero-container .btn').should('have.css','font-family').and('eq','Lora')
    //reverting changes
    cy.get('.top-nav-container').click()
    cy.get('[id=sidebar-design]').click()
    cy.get('.list-group-item').contains('Font Pair').click()
    cy.get('.font-pair-list .font-family').contains('Poppins 500 / Poppins regular').click()
    cy.get('.save-button-container').contains('Publish Settings').click()  
    editorFeatures.toast().and('contain.text','Your Changes May Take a Moment to Load')
}) 
