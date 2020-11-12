  /// <reference types="Cypress" />


describe('Account Page Validation', ()=>{
    const testName = "Account Page Checks"  
    it(testName,() =>{           
        cy.login()

        cy.get('h1[class="page-heading"]').invoke('text').then((text => {
            expect(text.trim().toUpperCase()).to.eq('MY ACCOUNT')
        }));        
    })
})
describe('Home Page Validation', ()=>{
    const testName = "Home Page Checks"  
    it(testName,() =>{
        cy.login()

        cy.get('a[title="Home"]').click();
            cy.get('a.account').invoke('text').then((text => {
                expect(text.trim()).to.eq('TestUserFirstName TestUserLastName')
        }));        
    })
})
describe('Tshirt Menu Validation', ()=>{
    const testName = "Menu Validation Checks"
    it(testName,() =>{  
        cy.openLandingPage()

        cy.get('ul[class="submenu-container clearfix first-in-line-xs"]').should('be.hidden').invoke('show');
        cy.get('.submenu-container > :nth-child(1) > ul > :nth-child(1) > a').click({force: true});
        cy.get('.cat-name').invoke('text').then((text => {
            expect(text.trim().toUpperCase()).to.eq('T-SHIRTS')
        }));        
    })
})