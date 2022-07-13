class Render {
    homepageHeroButton = () => cy.get('.hero-container .btn')

    interiorHeroButton = () => cy.get('.interior-hero .btn')

    homepageHeroTitle = () => cy.get('.hero-container .section-header').eq(0)

    interiorHeroTitle = () => cy.get('.interior-hero-text').eq(0)

    ppcFormTitle = () => cy.get('.landing_inquiry_text').eq(0)
}

export default Render