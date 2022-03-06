Cypress.Commands.add('login', () => {
    const email = Cypress.env("LOGIN_EMAIL")
    const password = Cypress.env("LOGIN_PASSWORD")


    cy.visit('http://automationpractice.com/index.php')
    cy.contains('Sign in').click()
    cy.get('[name="email"][id="email"]').type(email)
    cy.get('[name="passwd"]').type(password)
    cy.get('[name="SubmitLogin"]').click()
    cy.url().should('include', '/index.php?controller=my-account')
    cy.get('[title="My Store"]').click()
    cy.url().should('include', '/index.php')
  
})
