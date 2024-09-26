import Login from '../PageObjects/LoginPage2.js'
describe('mysuit', () => {
    it('Page Object model Login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln = new Login();
        ln.setUser("Admin")
        ln.setPassword('admin123')
        ln.clickButton()
        ln.loginCheck("Dashboard")
    })
    //using pom with fixture
    it.only('Page Object model Login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangeHrm2.json').then(data => {
            data.forEach(data => {
                const ln = new Login();
                ln.setUser(data.username)
                ln.setPassword(data.password)
                ln.clickButton()
                cy.wait(3000)
                if (data.username == "Admin" && data.password == "admin123") {

                    ln.loginCheck(data.expected)
                    ln.logout();
                    cy.wait(5000)
                }
                else {
                    ln.inValidLoginCheck(data.expected)
                }
            })
        })


    })
})