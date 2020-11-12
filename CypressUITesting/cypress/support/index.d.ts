/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Create several Todo items via UI
       * @example
       * cy.createDefaultTodos()
       */
      login(): Chainable<any>
      /**
       * Logs into the application
       * @example
       * cy.login()
       */
      openLandingPage(): Chainable<any>
      /**
       * Opens up the website at its base URL path
       * @example
       * cy.openLandingPage()
       */
      createTodo(title: string): Chainable<any>
    }
  }