import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { EditorFeatures, } from "../../pageObjects/editor-ps.po";
// Creating New Page 

const editorFeatures = new EditorFeatures()
let randomText = ""
let randomMenutitle = ""
var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for (var i = 0; i < 10; i++)
    randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
randomMenutitle = randomText

Given('a user has logged into builder for a customers site', () => {
    cy.openBuilderSite()

})

And('they have clicked the "Pages" icon', () => {
    editorFeatures.pagesSideBar().click()
})

When('they click the "Create New" button', () => {
    editorFeatures.createNewPage().click()
})

And('they fill in all the fields', (datatable) => {
    datatable.hashes().forEach(element => {
        editorFeatures.pageType().select(element.PageType)
        editorFeatures.parentPage().type(element.ParentPage)
        editorFeatures.menuTitle().type(randomMenutitle)
        // editorFeatures.urlSlug().type(randomText)
        editorFeatures.searchEnginePageTitle().type(element.SearchEnginePageTitle)
        editorFeatures.searchEnginePageDescription().type(element.SearchEnginePageDescription)

    });
})

When('the user click the "Create New" button', () => {
    editorFeatures.createPageBtn().click()
})
Then('the user is navigated to the Pages List', () => {
    editorFeatures.pagesList().should('be.visible')
})
And('the new page displays at the bottom of the list', () => {
    cy.get('.sl-vue-tree-node .sl-vue-tree-title .position-relative').eq(-1).contains(randomMenutitle).should('be.visible')
})
And('the status is "Unpublished"', () => {
    cy.get('.sl-vue-tree-node .sl-vue-tree-sidebar .d-flex .status .mr-3').eq(-1).contains('Unpublished')
})