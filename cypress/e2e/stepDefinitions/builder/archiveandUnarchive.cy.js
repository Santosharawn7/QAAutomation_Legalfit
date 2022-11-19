import { And, Given, But, Then, When } from "cypress-cucumber-preprocessor/steps"
import { EditorFeatures } from "../../pageObjects/editor-ps.po"

const editorFeatures = new EditorFeatures()

//Archiving and Unarchiving Interior Page
Given('I am logged in on builder', () => {
    cy.openlocalBuilderSite()
})

When('I open the pages list', () => {
    cy.get('#sidebar-pages').click()
})

Then('The list of pages should appear', () => {
    cy.get('#pages-create-new ').should('be.visible')
})

When('I click on the interior page with no children', () => {
    cy.get('.sl-vue-tree-nodes-list .sl-vue-tree-node-item .sl-vue-tree-sidebar .template').each($el => {
        cy.wrap($el).invoke('text').then(text => {
            const titletext = text.trim()
            if (titletext == 'Past Results') {
                cy.log(titletext)
                cy.wrap($el).trigger('mousover')
                cy.wrap($el).realMouseDown()
            }
        })
    })
    cy.get('.pencil-icon').filter(':visible').click()
})

Then('The page with no children is opened in builder in edit mode', () => {
    cy.url().should('contain', '/admin/edit')
})
When('I click the Unpublish button', () => {
    editorFeatures.publishDropdown().click()
    editorFeatures.unPublishMenu().click()
})

Then('The page gets unpublished', () => {
    editorFeatures.unpublishBadge().should('contain.text', 'Unpublished')
})

And('The dropdown now shows "Archive" button', () => {
    editorFeatures.publishDropdown().click()
    cy.get('.dropdown-item').contains('Archive').should('exist')
})

When('I click the Archive button', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/*/archive/',
    }).as('apiCheck')
    cy.get('.dropdown-item').contains('Archive').click()
})

Then('The page gets archived', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 204)
})

And('The Unarchive button is shown', () => {
    cy.get('.top-nav-container .btn').contains('Unarchive').should('exist')
})

When('I click on Unarchive button', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/*/unarchive/',
    }).as('apiCheck')
    cy.get('.top-nav-container .btn').contains('Unarchive').click()
})

Then('The page is unarchived', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('The page gets listed in the Pages list', () => {
    cy.get('#sidebar-pages').click()
    cy.get('.sl-vue-tree-nodes-list .sl-vue-tree-node-item .sl-vue-tree-sidebar .template').each($el => {
        cy.wrap($el).invoke('text').then(text => {
            const titletext = text.trim()
            if (titletext == 'Past Results') {
                cy.log(titletext)
                cy.wrap($el).trigger('mouseover')
                cy.wrap($el).realMouseDown()
            }
        })
    })
    cy.get('.pencil-icon').filter(':visible').click()
})

And('I publish the page', () => {
    cy.builderPublish()
})

//Archiving and Unarchiving child page with no children
Given('I am logged in on builder', () => {
    cy.openlocalBuilderSite()
})

When('I open the child page with no children', () => {
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
    cy.get('.nav-item .dropdown-item').then(childpage => {
        cy.wrap(childpage).contains('Service Detail').click()
    })
})

Then('The child page should open', () => {
    cy.url().should('contain', '/admin/edit')
})

When('I click on the unpublish button on the child page', () => {
    editorFeatures.publishDropdown().click()
    editorFeatures.unPublishMenu().click()
})

Then('The child page gets unpublished', () => {
    cy.url().should('contain', '/admin/edit')
})

When('I click the archive button on the child page', () => {
    editorFeatures.publishDropdown().click()
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/*/archive/',
    }).as('apiCheck')
    cy.get('.dropdown-item').contains('Archive').click()
})

Then('The child page gets archived', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 204)

})

And('The unarchive button is shown on the top of the child page', () => {
    cy.get('.top-nav-container .btn').contains('Unarchive').should('exist')

})

When('I click the Unarchive button on the child page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/*/unarchive/',
    }).as('apiCheck')
    cy.get('.top-nav-container .btn').contains('Unarchive').click()
})

Then('The child page gets unarchived', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('I can publish the child page', () => {
    cy.builderPublish()
})

//Archiving and Unarchiving PPC Landing page
Given('I am logged in on builder', () => {
    cy.openlocalBuilderSite()
})

When('I open the pages list', () => {
    cy.get('#sidebar-pages').click()
})

Then('The list of pages should appear', () => {
    cy.get('#pages-create-new ').should('be.visible')
})

When('I click on the PPC Landing page', () => {
    cy.get('.sl-vue-tree-nodes-list .sl-vue-tree-node-item .sl-vue-tree-sidebar .template').each($el => {
        cy.wrap($el).invoke('text').then(text => {
            const titletext = text.trim()
            if (titletext == 'PPC Landing') {
                cy.log(titletext)
                cy.wrap($el).realMouseDown()
            }
        })
    })
    cy.get('.pencil-icon').filter(':visible').click()
})

Then('The PPC Landing page is opened in builder in edit mode', () => {
    cy.url().should('contain', '/admin/edit')
})
When('I click the Unpublish button on the PPC Landing page', () => {
    editorFeatures.publishDropdown().click()
    editorFeatures.unPublishMenu().click()
})

Then('The PPC Landing page gets unpublished', () => {
    editorFeatures.unpublishBadge().should('contain.text', 'Unpublished')
})

And('The dropdown now shows "Archive" button on the PPC Landing page', () => {
    editorFeatures.publishDropdown().click()
    cy.get('.dropdown-item').contains('Archive').should('exist')
})

When('I click the Archive button on the PPC Landing page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/*/archive/',
    }).as('apiCheck')
    cy.get('.dropdown-item').contains('Archive').click()
})

Then('The PPC Landing page gets archived', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 204)
})

And('The Unarchive button is shown on the PPC Landing page', () => {
    cy.get('.top-nav-container .btn').contains('Unarchive').should('exist')
})


When('I click on Unarchive button on the PPC Landing page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/*/unarchive/',
    }).as('apiCheck')
    cy.get('.top-nav-container .btn').contains('Unarchive').click()
})

Then('The PPC Landing page is unarchived', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('The PPC Landing page gets listed in the Pages list', () => {
    cy.get('#sidebar-pages').click()
    cy.get('.sl-vue-tree-nodes-list .sl-vue-tree-node-item .sl-vue-tree-sidebar .template').each($el => {
        cy.wrap($el).invoke('text').then(text => {
            const titletext = text.trim()
            if (titletext == 'PPC Landing') {
                cy.log(titletext)
                cy.wrap($el).trigger('mouseover')
                cy.wrap($el).realMouseDown()
            }
        })
    })
    cy.get('.pencil-icon').filter(':visible').click()
})

And('I publish the PPC Landing page', () => {
    cy.builderPublish()
})

//archiving and unarchiving children page with no grandchildren
Given('I am logged in on builder', () => {
    cy.openlocalBuilderSite()
})

When('I open the Parent page', () => {
    cy.get('.nav-link-wrapper').click()
})

Then('The parent page with children is open', () => {
    cy.url().should('contain', '/admin/edit')
})

When('I unpublish the parent page', () => {
    editorFeatures.publishDropdown().click()
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/unpublish_or_publish/',
    }).as('apiCheck')
    editorFeatures.unPublishMenu().click()
})

Then('The parent page gets unpublished', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
    cy.wait(2000)
})

When('I click the archive button on the parent page', () => {
    editorFeatures.publishDropdown().click()
    cy.get('.dropdown-item').contains('Archive').should('exist')
    cy.get('.dropdown-item').contains('Archive').click()
    editorFeatures.toast().should('be.visible').and('contain.text', 'Not archived: cannot archive pages that have children')
})

Then('The parent page does not get archived', () => {
    cy.get('.top-nav-container .btn').contains('Unarchive').should('not.exist')
})

And('I toast warning is shown with message "Not archived: cannot archive pages that have children"', () => {
})

When('I click Publish button on the parent page', () => {
    cy.builderPublish()
})

Then('The parent page gets published', () => {
    cy.request('http://automation-test.local.legalfit.io:8000/admin/api/page/').its('status').should('be.equal', 200)
})

//Archiving and Unarchiving Grandchildren page
Given('I am logged in on builder', () => {
    cy.openlocalBuilderSite()
})

When('I open the grandchildren page', () => {
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
    cy.get('.nav-item .dropdown-menu .dropdown-menu').then(childpage => {
        cy.wrap(childpage).contains('Service Detail4').click()
    })
})

Then('The grandchild page should open', () => {
    cy.url().should('contain', '/admin/edit')
})

When('I click on the unpublish button on the grandchild page', () => {
    editorFeatures.publishDropdown().click()
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/unpublish_or_publish/',
    }).as('apiCheck')
    editorFeatures.unPublishMenu().click()
})

Then('The grandchild page gets unpublished', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

When('I click the archive button on the grandchild page', () => {
    editorFeatures.publishDropdown().click()
    cy.get('.dropdown-item').contains('Archive').should('exist')
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/*/archive/',
    }).as('apiCheck')
    cy.get('.dropdown-item').contains('Archive').click()
})

Then('The grandchild page gets archived', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 204)
})

And('The unarchive button is shown on the top of the grandchild page', () => {
    cy.get('.top-nav-container .btn').contains('Unarchive').should('exist')
})

When('I click the Unarchive button on the grandchild page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'http://automation-test.local.legalfit.io:8000/admin/api/page/*/unarchive/',
    }).as('apiCheck')
    cy.get('.top-nav-container .btn').contains('Unarchive').click()
})

Then('The grandchild page gets unarchived', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('I can publish the grandchild page', () => {
    cy.builderPublish()
    cy.request('http://automation-test.local.legalfit.io:8000/admin/api/page/').its('status').should('be.equal', 200)
    cy.get('#sidebar-pages').click()
    cy.get(' .menu-right-icon').eq(0).click()
    cy.get(' .menu-right-icon').click({ multiple: true })
    cy.get('.sl-vue-tree-title .position-relative').contains('Service Detail4').should('exist')
}) 