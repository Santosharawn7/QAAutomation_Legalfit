import { Given, When, And, But, Then } from "cypress-cucumber-preprocessor/steps"
import { EditorFeatures } from "../../pageObjects/editor-ps.po"
import Sitemap from "../../pageObjects/sitemap.po"

const editorFeatures = new EditorFeatures()
const siteMap = new Sitemap()

// Hidding and Showing pages in the Nav Menu

Given('a user has logged into Builder for a customer site', () => {
    cy.openBuilderSite()
})

And('they have clicked the Pages icon', () => {
    editorFeatures.pagesSideBar().click()

})
When('they turn off the eye icon under Show In Menu', () => {
    editorFeatures.pagesList().realHover()

    editorFeatures.showInMenu().click()
})
And('they click the Publish Menu button', () => {
    editorFeatures.saveMenu().click()
    cy.wait(2000)

})
Then('the page is hidden from the Nav Menu in Builder', () => {

    cy.get('[arial-label="Home"]').should('not.exist')


})
And('the page is hidden from the Nav Menu in Render', () => {
    cy.openTestRenderSite()
    cy.get('[arial-label="Home"]').should('not.exist')

})
But('the page is not hidden on the Sitemap', () => {
    cy.openTestSiteMap()
    //cy.scrollTo('500,0')
    siteMap.home().should('exist')


})
And('the link on the Sitemap navigates the user to the Hidden page', () => {
    //cy.get('.position-relative .block-wrapper-page-7229').scrollTo('center', {ensureScrollable: false})
    siteMap.home().click()
    cy.get('[arial-label="Home"]').should('not.exist')

})

When('the user goes back to the pages list', () => {
    cy.openBuilderHomePage()
    editorFeatures.pagesSideBar().click()

})

And('they turn on the eye icon under Show In Menu', () => {
    editorFeatures.pagesList().realHover()
    editorFeatures.showInMenu().click()

})
And('they click the Publish Menu button', () => {
    editorFeatures.saveMenu().click()

})
Then('the page is added to the Nav Menu in Builder', () => {
    cy.get('[arial-label="Home"]').should('exist')
    editorFeatures.navigationItem().contains('Home').should('be.visible')


})
And('the page is added to the Nav Menu in Render', () => {
    cy.openTestRenderSite()
    editorFeatures.navigationItem().contains('Home').should('exist')
    editorFeatures.navigationItem().contains('Home').should('be.visible')

})
But('the page is not hidden on the Sitemap', () => {
    cy.openTestSiteMap()
    siteMap.home().should('exist')
    editorFeatures.navigationItem().contains('Home').should('be.visible')

})
And('the link on the Sitemap navigates the user to the desired page', () => {
    siteMap.home().click()
    editorFeatures.navigationItem().contains('Home').should('be.visible')

})
And('the link in the Nav Menu navigates the user to the desired page', () => {
    cy.get('[arial-label="Home"]').should('exist').click()
    editorFeatures.navigationItem().contains('Home').should('be.visible')
})

