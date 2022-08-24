import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { EditorFeatures, Homepage } from "../../pageObjects/editor-ps.po";
import Sitemap from "../../pageObjects/sitemap.po";

const editorFeatures = new EditorFeatures()
const homepage = new Homepage()
const sitemap = new Sitemap()

//Homepage will be unpublished when the unpublish action is done
Given('I logged in on Premium Sites Builder', () => {
    cy.openEditorSite()
})

When('I Navigate to the clients builder for the site.', () => {
    cy.url().should('contain', '/admin/edit/')
    editorFeatures.navigationItem().contains('Home').should('be.visible')
})

And('Click the dropdown button next to the right of the publish', () => {
    editorFeatures.publishDropdown().click()
})

Then('I see the Unpublish button', () => {
    editorFeatures.unPublishMenu().should('be.visible')
})

When('I click on the Unpublish button', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'https://automation-test.builder.sandbox.legalfit.io/admin/api/page/unpublish_or_publish/',
    }).as('apiCheck')
    editorFeatures.unPublishMenu().click()
})

Then('Unpublish api should should show its status 200', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('"Unpublished" badge should be visible on the top left of screen', () => {
    editorFeatures.unpublishBadge().should('contain.text', 'Unpublished')
    editorFeatures.publishDropdown().should('not.exist')
})

When('I visit Sitemap', () => {
    cy.openSiteMap()
})

Then('The homepage should not be present', () => {
    sitemap.home().should('not.exist')
    cy.go('back')
    homepage.heroTitle().should('exist')
    editorFeatures.publishButton().click()
})

//Interior page will be unpublished when the unpublish action is done
Given('I logged in on Premium Sites Builder', () => {
    cy.openEditorSite()
})

When('I Navigate to the clients builder interior page', () => {
    cy.url().should('contain', '/admin/edit/')
    editorFeatures.navigationItem().contains('asdf').should('exist').click()
})

And('Click the dropdown button next to the right of the publish', () => {
    editorFeatures.publishDropdown().click()
})

Then('I see the Unpublish button on the interior page', () => {
    editorFeatures.unPublishMenu().should('be.visible')
})

When('I click on the Unpublish button on the interior page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'https://automation-test.builder.sandbox.legalfit.io/admin/api/page/unpublish_or_publish/',
    }).as('apiCheck')
    editorFeatures.unPublishMenu().click()
})

Then('Unpublish api should should show its status 200 of the interior page', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('"Unpublished" badge should be visible on the top left of screen of the interior page', () => {
    editorFeatures.unpublishBadge().should('contain.text', 'Unpublished')
    editorFeatures.publishDropdown().should('not.exist')
})

When('I visit the render mode and navigate to interior page', () => {
    cy.openRenderSite()
})

Then('The unpublished interior page should not be visible', () => {
    editorFeatures.navigationItem().contains('asdf').should('not.exist')
})

When('I visit Sitemap', () => {
    cy.openSiteMap()
})

Then('The unpublished interior page should not be present', () => {
    cy.get('[aria-label="detail for asdf"]').should('not.exist')
    cy.go('back')
    cy.go('back')
    cy.wait(2000)
    editorFeatures.publishButton().click()
})

//PPC Landing page will be unpublished when the unpublish action is done
Given('I logged in on Premium Sites Builder', () => {
    cy.openEditorSite()
})

When('I Navigate to the clients builder PPC Landing page', () => {
    cy.url().should('contain', '/admin/edit/')
    editorFeatures.navigationItem().contains('PPC Landing').should('exist').click()
})

And('Click the dropdown button next to the right of the publish', () => {
    editorFeatures.publishDropdown().click()
})

Then('I see the Unpublish button on the PPC Landing page', () => {
    editorFeatures.unPublishMenu().should('be.visible')
})

When('I click on the Unpublish button on the PPC Landing page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'https://automation-test.builder.sandbox.legalfit.io/admin/api/page/unpublish_or_publish/',
    }).as('apiCheck')
    editorFeatures.unPublishMenu().click()
})

Then('Unpublish api should should show its status 200 of the PPC Landing page', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('"Unpublished" badge should be visible on the top left of screen of the PPC Landing page', () => {
    editorFeatures.unpublishBadge().should('contain.text', 'Unpublished')
})


When('I visit the render mode and navigate to PPC Landing page', () => {
    cy.openRenderSite()
})

Then('The unpublished PPC Landing page should not be visible', () => {
    editorFeatures.navigationItem().contains('PPC Landing').should('not.exist')
})

When('I visit Sitemap', () => {
    cy.openSiteMap()
})

Then('The unpublished PPC Landing page should not be present', () => {
    cy.get('[aria-label="detail for PPC Landing"]').should('not.exist')
    cy.go('back')
    cy.go('back')
    cy.wait(2000)
    editorFeatures.publishButton().click()
})

//A child page will be unpublished when the unpublish action is done
Given('I logged in on Premium Sites Builder', () => {
    cy.openEditorSite()
})

When('I Navigate to the clients builder child page', () => {
    cy.url().should('contain', '/admin/edit/')
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
    cy.get('.nav-item.dropdown .dropdown-menu .dropdown-item').then(childpage => {
        cy.wrap(childpage).eq(2).click()
    })
})

And('Click the dropdown button next to the right of the publish', () => {
    editorFeatures.publishDropdown().click()
})

Then('I see the Unpublish button on the child page', () => {
    editorFeatures.unPublishMenu().should('be.visible')
})

When('I click on the Unpublish button on the child page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'https://automation-test.builder.sandbox.legalfit.io/admin/api/page/unpublish_or_publish/',
    }).as('apiCheck')
    editorFeatures.unPublishMenu().click()
})

Then('Unpublish api should should show its status 200 of the child page', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('"Unpublished" badge should be visible on the top left of screen of the child page', () => {
    editorFeatures.unpublishBadge().should('contain.text', 'Unpublished')
})

When('I visit the render mode and navigate to child page', () => {
    cy.openRenderSite()
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
})

Then('The unpublished child page should not be visible', () => {
    cy.get('.nav-item.dropdown .dropdown-menu .dropdown-item').contains('Service Detail3').should('not.exist')
})

When('I visit Sitemap', () => {
    cy.openSiteMap()
})

Then('The unpublished child page should not be present', () => {
    cy.get('[aria-label="detail for Service Detail3"]').should('not.exist')
    cy.go('back')
    cy.go('back')
    cy.wait(2000)
    editorFeatures.publishButton().click()
})

//A grandchild page will be unpublished when the unpublish action is done
Given('I logged in on Premium Sites Builder', () => {
    cy.openEditorSite()
})

When('I Navigate to the clients builder grandchild page', () => {
    cy.url().should('contain', '/admin/edit/')
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
    cy.get('.nav-item.dropdown .dropdown-menu .dropdown-item').then(grandchildpage => {
        cy.wrap(grandchildpage).eq(2).click()
    })
})

And('Click the dropdown button next to the right of the publish', () => {
    cy.get('.top-nav-container .dropdown-toggle').click()
})

Then('I see the Unpublish button on the grandchild page', () => {
    cy.get('.dropdown-menu').contains('Unpublish').should('be.visible')
})

When('I click on the Unpublish button on the grandchild page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'https://automation-test.builder.sandbox.legalfit.io/admin/api/page/unpublish_or_publish/',
    }).as('apiCheck')
    cy.get('.dropdown-menu').contains('Unpublish').click()
})

Then('Unpublish api should should show its status 200 of the grandchild page', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('"Unpublished" badge should be visible on the top left of screen of the grandchild page', () => {
    cy.get('.text-pending').should('contain.text', 'Unpublished')
})

When('I visit the render mode and navigate to grandchild page', () => {
    cy.openRenderSite()
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
})

Then('The unpublished grandchild page should not be visible', () => {
    cy.get('.nav-item.dropdown .dropdown-menu .dropdown-item').contains('Service Detail4').should('not.exist')
})

When('I visit Sitemap', () => {
    cy.openSiteMap()
})

Then('The unpublished grandchild page should not be present', () => {
    cy.get('[aria-label="detail for Service Detail4"]').should('not.exist')
    cy.go('back')
    cy.go('back')
    cy.wait(2000)
    editorFeatures.publishButton().click()
})

//A great grandchild page will be unpublished when the unpublish action is done
Given('I logged in on Premium Sites Builder', () => {
    cy.openEditorSite()
})

When('I Navigate to the clients builder great grandchild page', () => {
    cy.url().should('contain', '/admin/edit/')
    cy.get('#sidebar-pages').click()
    cy.get(' .menu-right-icon').eq(0).click()
    cy.get(' .menu-right-icon').eq(0).click()
    cy.get(' .menu-right-icon').eq(0).click()
    cy.get('.sl-vue-tree-title .position-relative').each($el => {
        cy.wrap($el).invoke('text').then(text => {
            const titletext = text.trim()
            if (titletext == 'Service Detail2') {
                cy.log(titletext)
                cy.wrap($el).realMouseDown()
            }
        })
    })
    cy.get('.pencil-icon').filter(':visible').click()
})

And('Click the dropdown button next to the right of the publish', () => {
    cy.get('.top-nav-container .dropdown-toggle').click()
})

Then('I see the Unpublish button on the great grandchild page', () => {
    cy.get('.dropdown-menu').contains('Unpublish').should('be.visible')
})

When('I click on the Unpublish button on the great grandchild page', () => {
    cy.intercept({
        method: 'PATCH',
        url: 'https://automation-test.builder.sandbox.legalfit.io/admin/api/page/unpublish_or_publish/',
    }).as('apiCheck')
    cy.get('.dropdown-menu').contains('Unpublish').click()
})

Then('Unpublish api should should show its status 200 of the great grandchild page', () => {
    cy.wait('@apiCheck').its('response.statusCode').should('equal', 200)
})

And('"Unpublished" badge should be visible on the top left of screen of the great grandchild page', () => {
    cy.get('.text-pending').should('contain.text', 'Unpublished')
})

When('I visit Sitemap', () => {
    cy.openSiteMap()
})

Then('The unpublished great grandchild page should not be present', () => {
    cy.get('[aria-label="detail for Service Detail2"]').should('not.exist')
    cy.go('back')
    cy.wait(2000)
    editorFeatures.publishButton().click()
})