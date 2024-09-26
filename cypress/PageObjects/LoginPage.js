class Login{
    setUser(userName){
        cy.get("input[placeholder='Username']").type(userName)
    }
    setPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }
    clickButton(){
        cy.get("button[type='submit']").click();
    }
    loginCheck(text){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',text)
    }
}
export default Login;