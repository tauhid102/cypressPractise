// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';
import '@4tw/cypress-drag-drop'
import 'cypress-file-upload';
Cypress.Commands.add("clickLink",label=>{
    cy.get('a').contains(label).click();
})

// Overwriting the default cy.contains command
Cypress.Commands.overwriteQuery('contains', (originalFn, selector, text, options) => {
    if(typeof text==="object"){
        options=text
        text=filter
        filter=undefined
    }
    options.matchCase=false
    return originalFn(subject, filter,text,options)
});
Cypress.Commands.add('loginUser',(userName,passWord)=>{
    cy.get("input[placeholder='Username']").type(userName);
    cy.get("input[placeholder='Password']").type(passWord);
    cy.get("button[type='submit']").click();
})