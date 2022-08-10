import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import chaiColors from 'chai-colors'
import { EditorFeatures } from "../../pageObjects/editor-ps.po";
chai.use(chaiColors)

const firstBrandColor = "#1891F3"
const changedBrandColor = "#AA2D48"
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
    cy.get('.top-nav-container').click()
    cy.get('[id=sidebar-design]').click()
    cy.get('.color-picker .color-picker-input').eq(0).click().clear().type(firstBrandColor)
    cy.get('.save-button-container').click()
}) 