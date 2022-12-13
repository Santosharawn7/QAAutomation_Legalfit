import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { EditorFeatures } from "../../pageObjects/editor-ps.po";

const editorFeatures = new EditorFeatures()
const indicatorBubble = '#fd7e14'
let randomText = ""
let menuTitle = ""
let urlSlug = ""
var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for (var i = 0; i < 10; i++)
    randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
menuTitle = randomText
urlSlug = randomText.toLowerCase()

Given('a user has logged into Builder', () => {
    cy.openBuilderSite()
})
And('they have navigated to an interior page', () => {
    cy.get('#sidebar-pages').click()
    cy.get('.sl-vue-tree-nodes-list .sl-vue-tree-node-item .sl-vue-tree-sidebar .template').each($el => {
        cy.wrap($el).invoke('text').then(text => {
            const titletext = text.trim()
            if (titletext == 'Service Detail') {
                cy.log(titletext)
                cy.wrap($el).realMouseDown()
            }
        })
    })
    cy.get('.pencil-icon').filter(':visible').click()
})
And('they clicked the "Page Settings" button', () => {
    editorFeatures.pageSettings().click()
})
When('they update the "Menu Title" and "URL Slug" fields', () => {
    editorFeatures.menuTitle().clear()
    editorFeatures.menuTitle().type(menuTitle)
    editorFeatures.urlSlugSetting().clear().type(urlSlug)
})
And('click the "Save Settings" button', () => {
    editorFeatures.saveMenu().click()
})
And('an orange indicator displays next to the "Page Settings" button', () => {
    editorFeatures.orangeIcon().should('have.css', 'background-color')
})
When('the user clicks the Publish button', () => {
    editorFeatures.publishButton().click()
})
Then('the menu title on Builder is updated', () => {
    editorFeatures.navigationItem().should('contain', menuTitle)
})
And('the menu title on Render is updated', () => {
    cy.openTestRenderSite()
    editorFeatures.navigationItem().should('contain', menuTitle)
    editorFeatures.navigationItem().contains(menuTitle).click()

})
And('the URL slug is updated on Render', () => {
    cy.url().should('contain', '/' + urlSlug)
})