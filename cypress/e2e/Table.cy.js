describe("Handle Table", () => {
    beforeEach("Login", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get('button[type="submit"]').click();
        cy.wait(5000)
        //customer page
        cy.get(".oxd-main-menu>li:nth-child(5)").click();
    })
    it('Check number of row and colums', () => {
        cy.get(".oxd-table-body>div").should('have.length', '50');
        cy.get(".oxd-table-header>div>div").should('have.length', '7');

    })
    it("Check the row or colum data", () => {
        cy.get(".oxd-table-card:nth-child(12)>div>div:nth-child(3)")
            .wait(4000)
            .should("contain", "Manu K M")
    })
    it("Read all the rows and columns data in the first page", () => {
        cy.get(".oxd-table-card")
            .each((row, index, rows) => {
                cy.wrap(row).within(() => {
                    cy.get(".oxd-table-row>div").each((col, index, cols) => {
                        cy.log(col.text())
                    })
                })
            })
    })
    it.only("Pagination", () => {
        let page = 2;
        for (let i = 1; i <= page; i++) {
            if (page > 1) {
                cy.log("Active page is" + page);
                cy.get("nav[aria-label='Pagination Navigation']>ul>li:nth-child(" + i + ")").click();
                cy.wait(3000);
                cy.get(".oxd-table-card")
                    .each((row, index, rows) => {
                        cy.wrap(row).within(() => {
                            cy.get(".oxd-table-row>div").each((col, index, cols) => {
                                cy.log(col.text())
                            })
                        })
                    })
            }
        }
    })
})