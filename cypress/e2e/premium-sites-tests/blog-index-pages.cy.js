import Login from "../pageObjects/login.po"

const login = new Login()

describe('Blog Index Next Pages',()=> {
    before(()=>{
        cy.visit('https://legal:fit@a-crane.builder.sandbox.legalfit.io/admin/edit/')
        login.email().type('turing')
        login.password().type('h2B2oxKI74JVzjpWQW8rRlQkZ', {log: false})
        login.editorLogin().click()
    })

    it('Visit Blog Index Page', ()=> {
        cy.get('.nav-item').contains('Blog').click()
        cy.get('.blog-post-simple-wrapper .blog-information').should('exist')
        cy.get('.blog-post-simple-wrapper .blog-information .article-heading a').eq(0).click()
        // cy.get('.page-item').contains('2').click()
        // cy.get('.blog-post-simple-wrapper .blog-information').should('exist')
        // cy.get('.page-item svg').eq('1').click()
        // cy.get('.page-item').contains('3').should('be.visible').should('have.attr','aria-checked','true')
        // cy.get('.blog-post-simple-wrapper .blog-information').should('exist')
    })
})