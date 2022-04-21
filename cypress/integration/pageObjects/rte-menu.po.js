class RTE {
    menubar = () => cy.get('.rte-menubar')

    textField = () => cy.get('.maniatis-seo .editor .ProseMirror')

    headingMenu = () => cy.get('.rte-menubar .menubar__button')

    boldMenu = () => cy.get('.rte-menubar .format-bold-icon')

    italicMenu = () => cy.get('.rte-menubar .format-italic-icon')

    imageMenu = () => ('.rte-menubar .menubar__button .image-area-icon')

    imageContainer = () => cy.get('.image-list-container .single-image-container')
}

export default RTE