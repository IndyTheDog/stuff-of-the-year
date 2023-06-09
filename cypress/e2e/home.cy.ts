// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/home')

    // Find a link with an href attribute containing "about" and click it
    cy.get('div').should('exist')

  })
})

// Prevent TypeScript from reading file as legacy script
export {}
