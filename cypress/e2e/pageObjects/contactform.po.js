class LeadEmails {
    heroContactFormName = () => cy.get('.hero-container [name=name].form-control')

    heroContactFormEmail = () => cy.get('.hero-container [name=email].form-control')

    heroContactFormPhone = () => cy.get('.hero-container [name=phone].form-control')

    heroContactFormInquiry = () => cy.get('.hero-container [name=inquiry].form-control')

    footerContactFormName = () => cy.get('.footer [name=name].form-control')

    footerContactFormEmail = () => cy.get('.footer [name=email].form-control')

    footerContactFormPhone = () => cy.get('.footer [name=phone].form-control')

    footerContactFormInquiry = () => cy.get('.footer [name=inquiry].form-control')

    ppcLandingHeroContactFormName = () => cy.get('.landing-hero [name=name].form-control')

    ppcLandingHeroContactFormEmail = () => cy.get('.landing-hero [name=email].form-control')

    ppcLandingHeroContactFormPhone = () => cy.get('.landing-hero [name=phone].form-control')

    ppcLandingHeroContactFormInquiry = () => cy.get('.landing-hero [name=inquiry].form-control')

    ppcLandingFooterContactFormName = () => cy.get('.landing-footer [name=name].form-control')

    ppcLandingFooterContactFormEmail = () => cy.get('.landing-footer [name=email].form-control')

    ppcLandingFooterContactFormPhone = () => cy.get('.landing-footer [name=phone].form-control')

    ppcLandingFooterContactFormInquiry = () => cy.get('.landing-footer [name=inquiry].form-control')

    interiorPageContactFormName = () => cy.get('.footer [name=name].form-control')

    interiorPageContactFormEmail = () => cy.get('.footer [name=email].form-control')

    interiorPageContactFormPhone = () => cy.get('footer [name=phone].form-control')

    interiorPageContactFormInquiry = () => cy.get('.footer [name=inquiry].form-control')

    contactPageContactFormName = () => cy.get('#contact-page-inquiry-container [name=name].form-control')

    contactPageContactFormEmail = () => cy.get('#contact-page-inquiry-container [name=email].form-control')

    contactPageContactFormPhone = () => cy.get('#contact-page-inquiry-container [name=phone].form-control')

    contactPageContactFormInquiry = () => cy.get('#contact-page-inquiry-container [name=inquiry].form-control')

    heroContactSubmitButton = () => cy.get('.hero-container [element=button]')

    footerContactSubmitButton = () => cy.get('.footer [element=button]')

    ipContactFormSubmitButton = () => cy.get('.footer [element=button]')

    ppcLandingHeroSubmitButton = () => cy.get('.landing-hero [element=button]')

    ppcLandingFooterSubmitButton = () => cy.get('.landing-footer [element=button]')

    contactSubmitButton = () => cy.get('#contact-page-inquiry-container [element=button]')
}

export default LeadEmails