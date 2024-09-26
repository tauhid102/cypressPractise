class Login {
    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblmsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    setUser(userName) {
        cy.get(this.txtUserName).type(userName)
    }
    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }
    clickButton() {
        cy.get(this.btnSubmit).click();
    }
    loginCheck(text) {
        cy.get(this.lblmsg).should('contain', text)
    }
    inValidLoginCheck(text){
        cy.get('.oxd-alert-content > .oxd-text').should('have.text',text)
    }
    logout(){
        cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)').click();
    }
}
export default Login;