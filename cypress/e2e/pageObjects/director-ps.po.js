class Director {
    editorLink = () => cy.get('.no-break > a')

    filter = () => cy.get('#filter')

    tableList = () => cy.get('.table tbody tr')

    createNewButton = () => cy.get('#websites-create-new')

    pageNumber = () => cy.get('.page-link')

    siteStatus = () => cy.get('#status')

    premiumSiteStatus = () => cy.get('.table .text-capitalize')

    templates = () => cy.get('#sidebar-templates')

    templateStyle = () => cy.get('.table .template-style')

    layoutStyle = () => cy.get('.template-style')

    blocks = () => cy.get('#sidebar-blocks')

    buttons = () => cy.get('#sidebar-buttons')

    pages = () => cy.get('#sidebar-pages')

    pageTypes = () => cy.get('#pages-tab-page-types.nav-item a')

    apps = () => cy.get('#sidebar-apps')

    filterSearch = () => cy.get('#filter-search').eq(0)

    pagetype = () => cy.get('#page-type')
}

export default Director
