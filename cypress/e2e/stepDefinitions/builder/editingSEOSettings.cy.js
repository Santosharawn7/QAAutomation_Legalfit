import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { EditorFeatures } from "../../pageObjects/editor-ps.po";

const editorFeatures = new EditorFeatures()
const indicatorBubble = '#fd7e14'
let randomText = ""
let pageTitle = ""
var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for (var i = 0; i < 10; i++)
    randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
pageTitle = randomText
        Given ('the user is logged into Builder', () => {
            cy.openBuilderSite()
        })
        And ('they have clicked the SEO Settings button on the homepage', () => {
            editorFeatures.seoSetting().click()
        })
        When ('they update the "SEO Title" and "SEO Description"', (datatable) => {
            datatable.hashes().forEach(element => {
                editorFeatures.seoTitle().clear().type(pageTitle)
                editorFeatures.seoDescription().clear().type(element.SearchEnginePageDescription)
            })

        })
       
        And ('they click the "Save Settings" button', () => {
            editorFeatures.saveMenu().click()
        })
        Then ('an orange circle will displays next to the SEO Button', () => {
            editorFeatures.orangeIcon().should('have.css', 'background-color')
        })
        When ('the user clicks the "Publish" button', () => {
            editorFeatures.publishButton().click()
            cy.reload()
        })
        Then ('the meta tags in the HTML on the rendered site will be updated', () => {
            cy.openTestRenderSite()
            cy.get('head title').should('include.text', pageTitle + " | Autotest")
            cy.get('head meta[name=description]').should(
                'have.attr',
                'content',
                'Something More Goes Here',
              )

        })
       
