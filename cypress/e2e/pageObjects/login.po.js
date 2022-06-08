class Login {
    email = () => cy.get('#useremail')
    
    password = () => cy.get('#password')

    submitButton = () => cy.get('button').contains('Login')

    editorLogin = () => cy.get('form > button')
}

export default Login