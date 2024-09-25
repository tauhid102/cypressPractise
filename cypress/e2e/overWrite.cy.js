describe("Over Write Command",()=>{
    it('Click the link',()=>{
        cy.visit('https://www.opencart.com/index.php?route=marketplace/extension')
        cy.get(':nth-child(3) > :nth-child(1) > section > .extension-name > :nth-child(1) > a').click();
        cy.get('h3').contains('PayPal Checkout Integration');
    })
    it("Click the with command",()=>{
        cy.visit("https://www.opencart.com/index.php?route=marketplace/extension");
        cy.clickLink('PayPal Checkout Integration')
        cy.get('h3').contains('PayPal Checkout Integration');
    })
    it("Click the with command with overWrite",()=>{
        cy.visit("https://www.opencart.com/index.php?route=marketplace/extension");
        cy.clickLink('PAYPAL CHECKOUT Integration')
        cy.get('h3').contains('PayPal Checkout Integration');
    })
    it.only("Login Command",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //login interface
        cy.loginUser("Admin","admin123")
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', "Dashboard");

    })
})