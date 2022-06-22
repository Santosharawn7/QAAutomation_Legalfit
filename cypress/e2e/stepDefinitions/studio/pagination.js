import { Given, Then, And , When} from "cypress-cucumber-preprocessor/steps";
import Director from "../../pageObjects/director-ps.po";

const director = new Director()

Given('I am on landing page',()=>{
  cy.visit('http://sites.local.legalfit.io:8000/admin/login')
})

When('I check Login button',()=>{
cy.get('#login-button').should('be.visible')
})

Then('I check username',()=>{
 cy.get('#id_useremail').should('be.visible')
})

Given('I logged in on Premium Sites Director', () => {
  cy.login()
})

When(`I filter a premium site name on Search Filter`, () => {
  director.tableList().should('have.lengthOf.lte', 30)
  director.filter().type('Aaronson')
})

Then(`I should only be shown number "1" on the pagination`, () => {
  director.pageNumber().contains('1').should('be.visible').should('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')  
})


When(`I filter the live sites among the premium sites`, () => {
  cy.get('select').select('Live')
  director.tableList().should('have.lengthOf.lte', 30)
  director.siteStatus().should('have.value', 'live')
  cy.get('select').select('Live')
})

Then(`I should see live sites getting filtered from the other sites`, () => { 
  director.premiumSiteStatus().eq(0).should('contain.text','live')
  director.premiumSiteStatus().each(($sites) => {
    cy.wrap($sites)
      .should('contain.text', 'live')
      .and('not.contain.text','in progress')
      .and('not.contain.text','canceled')
    })
  director.pageNumber().contains('1').should('be.visible').and('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')  
})

When(`I click the Create New button`,()=>{
  director.createNewButton().click()
})

Then(`I should see the showcase of the layouts`,()=>{
  cy.request('api/premium-website/types/').then((types) => {
    expect(types.status).to.eq(200)
  })
})

When(`I filter the name of the layout`,()=>{
  director.filter().type('everest')
})

Then(`I should see the Pagination is set to "1" on both of the paginations`,()=>{
  director.pageNumber().contains('1').should('be.visible').and('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')
})


When(`I click on Layouts in side navigation`,()=>{
  director.templates().click()
})

Then(`I should see the list of layouts`,()=>{
  director.tableList().should('have.lengthOf.lte', 30)
  cy.request('/templates').then((layouts) => {
    expect(layouts.status).to.eq(200)
  })
}) 

When(`I filter the name of the layouts`,()=>{
  director.filter().type('everest')
})

Then(`The pagination number should be set to "1"`,()=>{
  director.pageNumber().contains('1').should('be.visible').should('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')
  director.filter().clear()
})

When(`I filter Refined Layouts`,()=>{
  cy.get('select').select('Refined')
})

Then(`The pagination number should be set to "1"`,()=>{
  director.tableList().should('have.lengthOf.lte', 30)
  director.templateStyle().eq(0).should('contain.text','refined')
  director.templateStyle().each(($sites) => {
    cy.wrap($sites).should('contain.text', 'refined').and('not.contain.text','bold').and('not.contain.text','clean')
   })
  director.pageNumber().contains('1').should('be.visible').and('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')
}) 

When(`I click the Blocks tab on side navigation`,()=>{
  director.blocks().click()
})

Then(`The blocks list page should be opened`,()=>{
  director.tableList().should('have.lengthOf.lte', 30)
  cy.request('/blocks').then((blocks) => {
      expect(blocks.status).to.eq(200)
  })
})

When(`I Filter the blocks name on the search filter`,()=>{
  director.filter().type('everest')
})

Then(`The pagination number should be set to "1"`,()=>{
  director.pageNumber().contains('1').should('be.visible').should('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')
})

When(`I click the Buttons on side navigation`,()=>{
  director.buttons().click()
})

Then(`I should see the list of buttons`,()=>{
  director.tableList().should('have.lengthOf.lte', 30)
  director.buttons().should('have.class','active')
  cy.request('/buttons/').then((buttons) => {
      expect(buttons.status).to.eq(200)
  })
})

When(`I filter the name of the button`,()=>{
  director.filter().type('everest')
})

Then(`The pagination number should be set to "1"`,()=>{
  director.pageNumber().contains('1').should('be.visible').should('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')
}) 

When(`I click the Pages on side navigation`,()=>{
  director.pages().click()
})

Then(`I should see the list of the pages style as default`,()=>{
  director.tableList().should('have.lengthOf.lte', 30)
  director.pages().should('have.class','active')
  cy.request('/pages/').then((pages) => {
      expect(pages.status).to.eq(200)
  })
})

When(`I filter the Page Style on the set of filters`,()=>{
  director.filter().type('everest')
})

Then(`I should see the pagination number set to only "1"`,()=>{
  director.pageNumber().contains('1').should('be.visible').should('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')
})

When(`I click the Page Type`,()=>{
  director.pageTypes().click()
})

Then(`I should see the list of page types`,()=>{
  director.tableList().should('have.lengthOf.lte', 30)
  cy.request('api/page-type/').then((pagestype) => {
      expect(pagestype.status).to.eq(200)
  })
})

When(`I filter the page type`,()=>{
  director.filterSearch().type('Blog')
})

Then(`I should see the pagination number set to only "1"`,()=>{
  director.pageNumber().contains('1').should('be.visible').should('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')
})

When(`I click on Apps on side nav bar`,()=>{
  director.apps().click()
})

Then(`I should see the list of Apps`,()=>{
  director.tableList().should('have.lengthOf.lte', 30)
  director.apps().should('have.class','active')
  cy.request('/apps/').then((apps) => {
    expect(apps.status).to.eq(200)
    })
})

When(`I filter the name of the Apps`,()=>{
  director.filter().type('Live Chat')
})

Then(`I should see the pagination number set to only "1"`,()=>{
  director.pageNumber().contains('1').should('be.visible').should('have.attr','aria-checked','true')
  director.pageNumber().contains('2').should('not.exist')
})
