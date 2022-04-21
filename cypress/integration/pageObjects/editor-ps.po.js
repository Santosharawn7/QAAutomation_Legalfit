class Editor {
    insertHeaderBlock = () => cy.get('.btn').contains('Insert header Block')

    insertBodyBlock = () => cy.get('.btn').contains('Insert body Block')

    insertFooterBlock = () => cy.get('.btn').contains('Insert footer Block')
}

export default Editor