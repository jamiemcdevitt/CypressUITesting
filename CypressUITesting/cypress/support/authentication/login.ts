/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) => {

    email = email || 'TestUser@TestUser.ie'
    password = password || '3YkBPukfdKwnMg'

    cy.fixture("pages\\loginPage").then((loginPage) => {
        const loginButton = loginPage.loginButton;
        const signInButton = loginPage.signInButton;
        const emailTxtField = loginPage.emailTxtField;
        const passwordTxtField = loginPage.passwordTxtField;

    cy.openLandingPage();
    cy.get(loginButton).click();

    cy.get(emailTxtField).type(email);
    cy.get(passwordTxtField).type(password);

    cy.get(signInButton).click();    

    cy.log(`🔐👌 Authenticated with User: ${email} on <${Cypress.env('siteUrl')}> successfully!`);    
    })
});
