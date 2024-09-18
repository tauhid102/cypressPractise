

describe('my First test', () => {
    it.skip('Validation Alert', () => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.get('#alertexamples').click();
        cy.on('window:alert',(t)=>{
            expect(t).to.equal('I am an alert box!')
        })
        cy.get('#alertexplanation').should('contain','You triggered and handled the alert dialog')
    })
    it.skip('Validation Confirm', () => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.get('#confirmexample').click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal('I am a confirm alert')
        })
        cy.wait(5000);
        cy.get('#alertexplanation').should('have.contain','You clicked Cancel, confirm returned false.')
    })
    it('Validation Cancel', () => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.get('#confirmexample').click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal('I am a confirm alert')
        })
        cy.on('window:confirm',(t)=>false)
        cy.wait(5000);
        cy.get('#alertexplanation').then(($element) => {
            const text = $element.text();
            expect(text).to.include('You clicked Cancel, confirm returned ');
          });
    })
})