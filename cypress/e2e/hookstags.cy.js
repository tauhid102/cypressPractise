//before
//after
//beforeEach
//afterEach
//only
//skip
describe("Hooks and Tag",()=>{
    before('Before',()=>{
        cy.log("**** Before *****")
    })
    after('After',()=>{
        cy.log("**** After *****")
    })
    beforeEach("Before Each",()=>{
        cy.log('**** Login *****')
    })
    afterEach("After Each",()=>{
        cy.log("**** Log out ****")
    })
    it("Search",()=>{
        cy.log("Search")
    })
    it("Advance Search",()=>{
        cy.log("Advance Search")
    })
    it.skip("Listing Search",()=>{
        cy.log("Listing Search")
    })

})