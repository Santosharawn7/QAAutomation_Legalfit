class Login {
    email = () => cy.get('#id_useremail')
    
    password = () => cy.get('#id_password')

    submitButton = () => cy.get('button').contains('Login')

    editorLogin = () => cy.get('form > button')
}

export default Login