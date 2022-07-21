class Login {

    email = () => cy.get('#id_useremail').eq(0)
    
    password = () => cy.get('#id_password').eq(0)

    submitButton = () => cy.get('button').contains('Login').eq(0)

    editorLogin = () => cy.get('button').contains('Login')
}

export default Login
