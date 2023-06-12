const Home = () => {
    const checkRequiredElements = () => {
        // Open homepage
        cy.visit('http://localhost:3000')

        // Find logo
        cy.get('img[id="award-logo"]').should('exist')

        // Find title
        cy.get('h1[id="award-title"]').should('exist')

        // Find subtitle
        cy.get('h2[id="award-subtitle"]').should('exist')

        // Find intro
        cy.get('span[id="award-intro"]').should('exist')
    }

    return {
        checkRequiredElements
    }
}

export default Home