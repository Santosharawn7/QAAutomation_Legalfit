import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { EditorFeatures, Homepage, InteriorPage, PPCLanding } from "../../pageObjects/editor-ps.po";
import Render from "../../pageObjects/render.po";

const homepage = new Homepage()
const render = new Render()
const interiorpage = new InteriorPage()
const editorFeatures = new EditorFeatures()
const ppcLanding = new PPCLanding()

//Homepage
Given('I am logged in on builder', () => {
    cy.openEditorSite()
})

When('I make any changes on the builder on the Hero Block', () => {
    homepage.heroTitle().then(content => {
        cy.wrap(content).invoke('text').then(text => {
            const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('Test123', { delay: 1000 })
            cy.wrap(content).should('not.contain.text', firstText)
            cy.wrap(content).should('contain.text', 'Test123')
        })
    })
})

Then('I see "Has Changes" badge at the top left of the page', () => {
    editorFeatures.publishedBadge().should('be.visible')
    editorFeatures.changesBadge().should('be.visible')
    editorFeatures.changesBadge().should('contain.text', 'Has Changes')
})

When('I click the Publish button', () => {
    editorFeatures.publishButton().click()
})

Then('I can no longer see the "Has Changes" badge', () => {
    editorFeatures.toast().should('be.visible').and('contain.text', 'Published')
    cy.request('https://automation-test.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal', 200)
})

When('I go to the render version of the site', () => {
    cy.openRenderSite()
})

Then('I can see the published changes', () => {
    render.homepageHeroTitle().should('contain.text', 'Test123')
    cy.go('back')
    homepage.heroTitle().click().clear()
    homepage.heroTitle().type('This is a Automation Test Site', { delay: 1000 })
    homepage.heroTitle().should('contain.text', 'This is a Automation Test Site')
    editorFeatures.publishButton().click()
    cy.go('forward')
})

//Interior page
Given('I am logged in on the interior page', () => {
    cy.openEditorSite()
    editorFeatures.navigationItem().eq(1).click()
})

When('I make changes on the interior page', () => {
    interiorpage.interiorHeroTitle().then(content => {
        cy.wrap(content).invoke('text').then(text => {
            const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('Test123', { delay: 1000 })
            cy.wrap(content).should('not.contain.text', firstText)
            cy.wrap(content).should('contain.text', 'Test123')
        })
    })
})

Then('I can see "Has Changes" badge at the top left of the page of the interior page', () => {
    editorFeatures.publishedBadge().should('be.visible')
    editorFeatures.changesBadge().should('be.visible')
    editorFeatures.changesBadge().should('contain.text', 'Has Changes')
})

When('I click the Publish button on the interior page', () => {
    editorFeatures.publishButton().click()
})

Then('I can no longer see the "Has Changes" badge on the interior page', () => {
    editorFeatures.toast().and('contain.text', 'Published')
    cy.request('https://automation-test.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal', 200)
})

When('I navigate to the render version of interior page', () => {
    cy.openRenderSite()
    editorFeatures.navigationItem().eq(1).click()
})

Then('I can see the published changes on that interior page', () => {
    render.interiorHeroTitle().should('contain.text', 'Test123')
    cy.go('back')
    cy.go('back')
    interiorpage.interiorHeroTitle().click().clear()
    interiorpage.interiorHeroTitle().type('AUTOMATION TEST', { delay: 100 })
    interiorpage.interiorHeroTitle().should('contain.text', 'AUTOMATION TEST')
    editorFeatures.publishButton().click()
    cy.go('forward')
})

//PPC Landing page
Given('I am logged in on the PPC Landing page', () => {
    cy.openEditorSite()
    editorFeatures.navigationItem().contains('PPC Landing').click()
})

When('I make changes on the PPC Landing page', () => {
    ppcLanding.formTitle().then(content => {
        cy.wrap(content).invoke('text').then(text => {
            const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('Test123', { delay: 1000 })
            cy.wrap(content).should('not.contain.text', firstText)
            cy.wrap(content).should('contain.text', 'Test123')
        })
    })
})

Then('I can see "Has Changes" badge at the top left of the page of the PPC Landing page', () => {
    editorFeatures.publishedBadge().should('be.visible')
    editorFeatures.changesBadge().should('be.visible')
    editorFeatures.changesBadge().should('contain.text', 'Has Changes')
})

When('I click the Publish button on the PPC Lading page', () => {
    editorFeatures.publishButton().click()
})

Then('I can no longer see the "Has Changes" badge on the PPC Landing page', () => {
    editorFeatures.toast().should('be.visible').and('contain.text', 'Published')
    cy.request('https://automation-test.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal', 200)
})

When('I navigate to the render version of PPC Landing page', () => {
    cy.openRenderSite()
    editorFeatures.navigationItem().contains('PPC Landing').click()
})

Then('I can see the published changes on that PPC Landing page', () => {
    render.ppcFormTitle().should('contain.text', 'Test123')
    cy.go('back')
    cy.go('back')
    ppcLanding.formTitle().click().clear()
    ppcLanding.formTitle().type('Automated Landing Text', { delay: 1000 })
    editorFeatures.publishButton().click()
    cy.go('forward')
})

//Child page
Given('I am logged in on the child page', () => {
    cy.openEditorSite()
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
    cy.get('.nav-item.dropdown .dropdown-menu .dropdown-item').then(childpage => {
        cy.wrap(childpage).first().click()
    })
})

When('I make changes on the child page', () => {
    interiorpage.interiorHeroTitle().then(content => {
        cy.wrap(content).invoke('text').then(text => {
            const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('Test123', { delay: 1000 })
            cy.wrap(content).should('not.contain.text', firstText)
            cy.wrap(content).should('contain.text', 'Test123')
        })
    })
})

Then('I can see "Has Changes" badge at the top left of the page of the child page', () => {
    editorFeatures.publishedBadge().should('be.visible')
    editorFeatures.changesBadge().should('be.visible')
    editorFeatures.changesBadge().should('contain.text', 'Has Changes')
})

When('I click the Publish button on the child page', () => {
    editorFeatures.publishButton().click()
})

Then('I can no longer see the "Has Changes" badge on the child page', () => {
    editorFeatures.toast().and('contain.text', 'Published')
    cy.request('https://automation-test.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal', 200)
})

When('I navigate to the render version of child page', () => {
    cy.openRenderSite()
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
    cy.get('.nav-item.dropdown .dropdown-menu .dropdown-item').then(childpage => {
        cy.wrap(childpage).first().click()
    })
})

Then('I can see the published changes on that child page', () => {
    render.interiorHeroTitle().should('contain.text', 'Test123')
    cy.go('back')
    cy.go('back')
    interiorpage.interiorHeroTitle().click().clear()
    interiorpage.interiorHeroTitle().type('AUTOMATION TEST', { delay: 100 })
    interiorpage.interiorHeroTitle().should('contain.text', 'AUTOMATION TEST')
    editorFeatures.publishButton().click()
    cy.go('forward')
})

//Grandchild page
Given('I am logged in on the grandchild page', () => {
    cy.openEditorSite()
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
    cy.get('.nav-item.dropdown .dropdown-menu .dropdown-menu').then(grandchildpage => {
        cy.wrap(grandchildpage).first().click()
    })
})

When('I make changes on the grandchild page', () => {
    interiorpage.interiorHeroTitle().then(content => {
        cy.wrap(content).invoke('text').then(text => {
            const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('Test123', { delay: 1000 })
            cy.wrap(content).should('not.contain.text', firstText)
            cy.wrap(content).should('contain.text', 'Test123')
        })
    })
})

Then('I can see "Has Changes" badge at the top left of the page of the grandchild page', () => {
    editorFeatures.publishedBadge().should('be.visible')
    editorFeatures.changesBadge().should('be.visible')
    editorFeatures.changesBadge().should('contain.text', 'Has Changes')
})

When('I click the Publish button on the grandchild page', () => {
    editorFeatures.publishButton().click()
})

Then('I can no longer see the "Has Changes" badge on the grandchild page', () => {
    editorFeatures.toast().and('contain.text', 'Published')
    cy.request('https://automation-test.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal', 200)
})

When('I navigate to the render version of grandchild page', () => {
    cy.openRenderSite()
    editorFeatures.navigationDropdown().then(($el) => {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).children('.dropdown-menu').invoke('show')
    })
    cy.get('.nav-item.dropdown .dropdown-menu .dropdown-menu').then(grandchildpage => {
        cy.wrap(grandchildpage).first().click()
    })
})

Then('I can see the published changes on that grandchild page', () => {
    render.interiorHeroTitle().should('contain.text', 'Test123')
    cy.go('back')
    cy.go('back')
    interiorpage.interiorHeroTitle().click().clear()
    interiorpage.interiorHeroTitle().type('AUTOMATION TEST', { delay: 100 })
    interiorpage.interiorHeroTitle().should('contain.text', 'AUTOMATION TEST')
    editorFeatures.publishButton().click()
    cy.go('forward')
})

//Great Grandchild page
Given('I am logged in on the great grandchild page', () => {
    cy.openEditorSite()
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

When('I make changes on the great grandchild page', () => {
    interiorpage.interiorHeroTitle().then(content => {
        cy.wrap(content).invoke('text').then(text => {
            const firstText = text.trim()
            cy.wrap(content).should('contain.text', firstText)
            cy.wrap(content).click().clear().type('Test123', { delay: 1000 })
            cy.wrap(content).should('not.contain.text', firstText)
            cy.wrap(content).should('contain.text', 'Test123')
        })
    })
})

Then('I can see "Has Changes" badge at the top left of the page of the great grandchild page', () => {
    editorFeatures.publishedBadge().should('be.visible')
    editorFeatures.changesBadge().should('be.visible')
    editorFeatures.changesBadge().should('contain.text', 'Has Changes')
})

When('I click the Publish button on the great grandchild page', () => {
    editorFeatures.publishButton().click()
})

Then('I can no longer see the "Has Changes" badge on the great grandchild page', () => {
    editorFeatures.toast().and('contain.text', 'Published')
    cy.request('https://automation-test.builder.sandbox.legalfit.io//admin/api/page/').its('status').should('be.equal', 200)
})

When('I navigate to the render version of great grandchild page', () => {
    cy.openSiteMap()
    cy.get('.sitemap ul').within(list => {
        cy.wrap(list).find('li').within((parent) => {
            cy.wrap(parent).find('li').within(child => {
                cy.wrap(child).find('li').within(grandchild => {
                    cy.wrap(grandchild).find('li').within(greatgrandchild => {
                        cy.wrap(greatgrandchild).click()
                    })
                })
            })
        })
    })
})

Then('I can see the published changes on that great grandchild page', () => {
    render.interiorHeroTitle().should('contain.text', 'Test123')
    cy.go('back')
    cy.go('back')
    interiorpage.interiorHeroTitle().click().clear()
    interiorpage.interiorHeroTitle().type('AUTOMATION TEST', { delay: 100 })
    interiorpage.interiorHeroTitle().should('contain.text', 'AUTOMATION TEST')
    editorFeatures.publishButton().click()
    cy.go('forward')
})