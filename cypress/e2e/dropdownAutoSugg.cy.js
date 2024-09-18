describe("Dropdown Auto Suggesstion",()=>{
    it.skip("suggestion Dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Dhaka')
        cy.get('.suggestion-title').contains('Dhaka Metro Rail').click()
        cy.get('.mw-page-title-main').should('contain','Dhaka Metro Rail')
    })
    it.skip("Select Dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchLanguage').select('বাংলা')
        cy.get('#searchLanguage').should('have.value','BN')
    })
    it.skip("Dynamic Dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchLanguage').select('বাংলা')
        cy.get('#searchLanguage').should('have.value','BN')
    })
    it("Dynamic auto Dropdown",()=>{
        cy.visit("https://www.google.com/")
        cy.get('.gLFyf').type('cypress automation')
        cy.wait(3000)
        cy.get('.pcTkSc').should('have.length',13)
        cy.get('.pcTkSc').each(($eq,index,$list)=>{
            if($eq.text().trim()=='cypress automation tutorial'){
                cy.wrap($eq).click()
            }
        })
        // cy.get('.pcTkSc').contains('cypress automation tutorial').click()
        cy.get('.pcTkSc').should('have.value','cypress automation tutorial')
    })
})