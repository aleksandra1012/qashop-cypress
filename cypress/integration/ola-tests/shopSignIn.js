describe('Sign in', () => {
    it('page has necessary elements', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Sign in').click()
        cy.contains('Create an account').should('exist')
        cy.get('[name="email_create"]')
        cy.get('[name="SubmitCreate"]')
        cy.contains('Already registered?').should('exist')
        cy.get('[name="email"]')
        cy.get('[name="passwd"]')
        cy.contains('Forgot your password?').should('exist')
        cy.get('[name="SubmitLogin"]')
    });

    it('logs in successfully', () => {
        cy.login();
    });





})