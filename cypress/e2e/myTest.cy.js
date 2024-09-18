describe('my First test', () => {
    it('Verify title-positive', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
    })
    it('Verify title-nagative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM 123')
    })
})