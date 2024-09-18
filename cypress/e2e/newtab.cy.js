describe('Newtab Approach',()=>{
    it('Newtab handle approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').invoke('removeAttr','target').click();
        // cy.get('.exmaple > a').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(4000)
        cy.go('back')
    })
})