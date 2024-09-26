describe("mysuit",()=>{
    it('Capture screenshots & Videos',()=>{
        cy.visit('https://demo-opencart.com/');
        // cy.screenshot('homePage')
        // cy.wait(5000);
        // cy.get("img[title='Your Store']").screenshot('logo')
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('contain',"Tablets")

        //command for spacific command for individula spec
        //npx cypress run --spec .\cypress\e2e\CaptureScreenshotsAndVideos.cy.js
    })
})