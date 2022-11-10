import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import Director from "../../pageObjects/director-ps.po";
import Login from "../../pageObjects/login.po";

const director = new Director()
const login = new Login()

Given('I hit the URL', () => {
  cy.visit('http://standard.local.legalfit.io:3000/')
})

When('I am on login page', () => {
  cy.visit(Cypress.env('localbaseUrl'))
  cy.fixture('../fixtures/login-data').then(data =>{
      login.email().type(data.email)
      login.password().type(data.password)
      login.submitButton().click()
  })
})

Then('I can see login fields', () => {
   cy.get('.alert').should('exist').and('contain.text','Invalid username/email and/or password.')
})

Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When('I filter a premium site name on Search Filter', () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.filter().type('a-price')
  cy.get('#websites-create-new').should('be.visible')
})

Then('I should only be shown number "1" on the pagination', () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

When('I filter the live sites among the premium sites', () => {
  cy.get('select').select('Live')
  director.tableList().should('have.lengthOf.lte', 30)
  director.siteStatus().should('have.value', 'live')
  cy.get('select').select('Live')
})

Then('I should see live sites getting filtered from the other sites', () => {
  director.premiumSiteStatus().eq(0).should('contain.text', 'live')
  director.premiumSiteStatus().each(($sites) => {
    cy.wrap($sites)
      .should('not.contain.text', 'migrating')
      .and('not.contain.text', 'in progress')
      .and('not.contain.text', 'canceled')
      .and('not.contain.text', 'pending')
      .and('not.contain.text', 'new')
      .and('contain.text', 'live')
  })
  director.pageNumber().contains('1').should('be.visible').and('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//layouts-showcase

Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When('I click the Create New button', () => {
  director.createNewButton().click()
})

Then('I should see the showcase of the layouts', () => {
  cy.get('.images-container').should('be.visible')
  cy.request('/api/premium-website/types').as('layoutshowcase');
  cy.get('@layoutshowcase').then(layoutshowcase => {
    expect(layoutshowcase.status).to.eq(200);
  });
})

When('I filter the name of the layout', () => {
  director.filter().type('everest')
})

Then('I should see the Pagination is set to "1" on both of the paginations', () => {
  director.pageNumber().contains('1').should('be.visible').and('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//layouts
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click on Layouts in side navigation`, () => {
  director.templates().click()
})

Then(`I should see the list of layouts`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.request('/api/website-template').as('templates');
  cy.get('@templates').then(templates => {
    expect(templates.status).to.eq(200);
  });
})

When(`I filter the name of the layouts`, () => {
  director.filter().type('everest')
})

Then(`The pagination number should be set to "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
  director.filter().clear()
})

When(`I filter Refined Layouts`, () => {
  cy.get('select').select('Refined')
})

Then(`The pagination number should be set to "1"`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.templateStyle().eq(0).should('contain.text', 'refined')
  director.templateStyle().each(($sites) => {
    cy.wrap($sites).should('contain.text', 'refined').and('not.contain.text', 'bold').and('not.contain.text', 'clean')
  })
  director.pageNumber().contains('1').should('be.visible').and('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//blocks
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click the Blocks tab on side navigation`, () => {
  director.blocks().click()
})

Then(`The blocks list page should be opened`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.request('/blocks').as('blocks');
  cy.get('@blocks').then(blocks => {
    expect(blocks.status).to.eq(200);
  });
})

When(`I Filter the blocks name on the search filter`, () => {
  director.filter().type('everest footer')
})

Then(`The pagination number should be set to "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//buttons
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click the Buttons on side navigation`, () => {
  director.buttons().click()
})

Then(`I should see the list of buttons`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.request('/api/button').as('buttons');
  cy.get('@buttons').then(buttons => {
    expect(buttons.status).to.eq(200);
  });
})

When(`I filter the name of the button`, () => {
  director.filter().type('everest')
})

Then(`The pagination number should be set to "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})


//pages
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click the Pages on side navigation`, () => {
  director.pages().click()
})

Then(`I should see the list of the pages style as default`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.pages().should('have.class', 'active')
  cy.request('/api/page-variant/').as('pages');
  cy.get('@pages').then(pages => {
    expect(pages.status).to.eq(200);
  });
})

When(`I filter the Page Style on the set of filters`, () => {
  director.filter().type('everest')
})

Then(`I should see the pagination number set to only "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//page-type
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click the Page Type on Pages list`, () => {
  director.pages().click()
  director.pageTypes().click()
})

Then(`I should see the list of page types`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.pageTypes().should('have.class', 'active')
  cy.request('/api/page-type').as('pageType');
  cy.get('@pageType').then(pageType => {
    expect(pageType.status).to.eq(200);
  });
})

When(`I filter the page type`, () => {
  director.filterSearch().type('Blog')
})

Then(`I should see the pagination number set to only "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})


//Apps
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click on Apps on side nav bar`, () => {
  director.apps().click()
})

Then(`I should see the list of Apps`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.apps().should('have.class', 'active')
  cy.request('/apps/').then((apps) => {
    expect(apps.status).to.eq(200)
  })
})

When(`I filter the name of the Apps`, () => {
  director.filter().type('Live Chat')
})

Then(`I should see the pagination number set to only "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})


