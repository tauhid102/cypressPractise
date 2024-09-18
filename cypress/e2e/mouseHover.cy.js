describe("Mouse Handle", () => {
    it('Mouse Hover',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible')
    })
    it('Douuble Click',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick')
        cy.frameLoaded('#iframeResult');
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#demo').should('contain','Hello World')
    })
    it('Drag and Drop',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.wait(3000)
        cy.get('#box5').drag('#box106',{force:true});
    })
    it.only('Scrolling Page',()=>{
        cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
        cy.get(':nth-child(64) > [align="center"] > a > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(64) > [align="center"] > a > img').should('be.visible')
        cy.get(':nth-child(14) > [align="center"] > a > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(14) > [align="center"] > a > img').should('be.visible')
    })
})