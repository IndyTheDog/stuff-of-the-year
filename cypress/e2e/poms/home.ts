const Home = () => {
    const checkRequiredElements = () => {
        // Find logo
        cy.get('img[id="award-logo"]').should('exist')

        // Find title
        cy.get('h1[id="award-title"]').should('exist')

        // Find subtitle
        cy.get('h2[id="award-subtitle"]').should('exist')

        // Find intro
        cy.get('span[id="award-intro"]').should('exist')

        // Find Stuff
        cy.get('article').should('have.lengthOf.at.least', 1)

        // Find Footer
        cy.get('footer').should('not.be.empty')
    }

    return {
        checkRequiredElements
    }
}

export default Home