class Homepage {
    insertHeaderBlock = () => cy.get('.btn').contains('Insert header Block')

    insertBodyBlock = () => cy.get('.btn').contains('Insert body Block')

    insertFooterBlock = () => cy.get('.btn').contains('Insert footer Block')

    heroButton = () => cy.get('.hero-container .edit-button .ProseMirror')

    heroTitle = () => cy.get('.hero-container .ProseMirror').eq(0)
}

class InteriorPage {
    interiorHeroButton = () => cy.get('.interior-hero .edit-button')

    interiorHeroTitle = () => cy.get('.interior-hero .ProseMirror').eq(0)
}

class EditorFeatures {
    navigationItem = () => cy.get('.nav-item')

    navigationDropdown = () => cy.get('.nav-item.dropdown')

    publishedBadge = () => cy.get('.text-published')

    changesBadge = () => cy.get('.text-changes')

    unpublishBadge = () => cy.get('.text-pending')

    publishButton = () => cy.get('button').contains('Publish Page')

    toast = () => cy.get('.toast-body')

    publishDropdown = () => cy.get('.top-nav-container .dropdown-toggle')

    unPublishMenu = () => cy.get('.dropdown-menu').contains('Unpublish')

    pagesSideBar = () => cy.get('[id=sidebar-pages]')

    blogSideBar = () => cy.get('[id=sidebar-blog]')

    designSideBar = () => cy.get('[id=sidebar-design]')

    imagesSideBar = () => cy.get('[id=sidebar-images]')

    appsSideBar = () => cy.get('[id=sidebar-apps]')

    showInMenu = () => cy.get('[id=pages-show-in-menu-0]')

    drawerBody = () => cy.get('.drawer-body')
    
    saveMenu = () => cy.get('.drawer-footer .btn')

    pagesList = () => cy.get('.sl-vue-tree-node').eq(0)

    brandColorInput = () => cy.get('.color-picker .color-picker-input').eq(0)

    accentColorInput = () => cy.get('.color-picker .color-picker-input').eq(1)

    linkColorInput = () => cy.get('.color-picker .color-picker-input').eq(2)

    headerBody = () => cy.get('header .nav-top')

    settingSaveButton = () => cy.get('.save-button-container')

    settingCloseIcon = () => cy.get('.close-icon')
}

class PPCLanding {
    formTitle = () => cy.get('.landing-hero .form-wrapper .ProseMirror').eq(0)
}

export {Homepage, InteriorPage, EditorFeatures, PPCLanding}