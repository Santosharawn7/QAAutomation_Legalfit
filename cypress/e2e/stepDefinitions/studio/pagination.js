import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import Director from "../../pageObjects/director-ps.po";

const director = new Director()

Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When('I filter a premium site name on Search Filter', () => {
  cy.get('h2').should('contain.text','Websites')
  director.tableList().should('have.lengthOf.lte', 30)
  cy.get('tr a').should('exist')
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
  cy.get('h2').should('contain.text','Select a Layout')
})

Then('I should see the showcase of the layouts', () => {
  cy.get('.images-container').should('be.visible')
})

When('I filter the name of the layout', () => {
  director.search().type('everest')
})

Then('I should see the Pagination is set to "1" on both of the paginations', () => {
  director.pageNumber().contains('1').should('be.visible').and('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//QA-sites
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When('I click the QA Sites tab', () => {
  cy.get('.nav-item').contains('QA Sites').click()
})

Then('I should see the list of QA sites', () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.get('tr a').should('exist')
})

When('I filter the name of the QA site', () => {
  director.filter().type('automation-test')
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
  cy.get('h2').should('contain.text','Website Layouts')
})

Then(`I should see the list of layouts`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.get('tr a').should('exist')
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

//archived layouts
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click on Layouts in side navigation`, () => {
  director.templates().click()
  cy.get('h2').should('contain.text','Website Layouts')
})

And('I click on the Archived Tabs',()=>{
  cy.get('.nav-link').contains('Archived')
})

Then(`I should see the list of Archived layouts`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.get('tr a').should('exist')
})

When(`I filter the name of the Archived layouts`, () => {
  director.filter().type('Akay')
})

Then(`The pagination number should be set to "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').and('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//blocks
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click the Blocks tab on side navigation`, () => {
  director.blocks().click()
  cy.get('h2').should('contain.text','Blocks')
})

Then(`The blocks list page should be opened`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.get('tr a').should('exist')
 
})

When(`I Filter the blocks name on the search filter`, () => {
  director.filter().click()
  director.filter().type('everest footer')
})

Then(`The pagination number should be set to "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//archived blocks
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click the Blocks tab on side navigation`, () => {
  director.templates().click()
  cy.get('h2').should('contain.text','Blocks')
})

And('I click on the Archived tab',()=>{
  cy.get('.nav-link').contains('Archived')
})

Then(`The Archived blocks list page should be opened`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.get('tr a').should('exist')
})

When(`I Filter the archived blocks name on the search filter`, () => {
  director.filter().click()
  director.filter().type('Akay Footer Locations')
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
  cy.get('h2').should('contain.text','Buttons')
})

Then(`I should see the list of buttons`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.get('tr a').should('exist')
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
  cy.get('h2').should('contain.text','Pages')
})

Then(`I should see the list of the pages style as default`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.pages().should('have.class', 'active')
  cy.get('tr a').should('exist')
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
  cy.get('#page-types-create-new').should('exist')
})

Then(`I should see the list of page types`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.pageTypes().should('have.class', 'active')
})

When(`I filter the page type`, () => {
  cy.get('tr a').should('exist')
  director.filterSearch().type('Blog')
})

Then(`I should see the pagination number set to only "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//archived pages
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click the Pages on side navigation`, () => {
  director.templates().click()
  cy.get('h2').should('contain.text','Pages')
})

And('I click on the Archived tab',()=>{
  cy.get('.nav-link').contains('Archived')
})

Then(`I should see the list of the archived pages`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  cy.get('tr a').should('exist') 
})

When(`I filter the name of the archived page`, () => {
  director.filter().type('Page: Content')
})

Then(`The pagination number should be set to "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})

//Apps
Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I click on Apps on side nav bar`, () => {
  director.apps().click()
  cy.get('h2').should('contain.text','Apps')
})

Then(`I should see the list of Apps`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.apps().should('have.class', 'active')
  cy.get('tr a').should('exist')
 
})

When(`I filter the name of the Apps`, () => {
  director.filter().type('Google Analytics')
})

Then(`I should see the pagination number set to only "1"`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr', 'aria-checked', 'true')
  director.pageNumber().contains('2').should('not.exist')
})


