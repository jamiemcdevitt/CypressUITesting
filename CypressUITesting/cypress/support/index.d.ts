/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Create several Todo items via UI
       * @example
       * cy.createDefaultTodos()
       */
      login(email?: string, password?: string): Chainable<any>
      /**
       * Logs into the application
       * email - Email address for user
       * password - Password for user
       * @example
       * cy.login(email, password)
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