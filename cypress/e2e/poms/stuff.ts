const Stuff = () => {
    const checkRequiredElements = (id: string) => {
        cy.get(`article[id="stuff-item-${id}"]`).should('exist')
        cy.get(`div[id="content-stuff-item-${id}"]`).should('exist')
        // Content should have title
        cy.get(`div[id="content-stuff-item-${id}"]`).find(`span[id="stuff-title-${id}"]`).should('have.length', 1)
        // Content should have description
        cy.get(`div[id="content-stuff-item-${id}"]`).find(`span[id="stuff-description-${id}"]`).should('have.length', 1)
        // Content should have image
        cy.get(`article[id="stuff-item-${id}"]`).find(`img[id="stuff-image-${id}"]`).should('have.length', 1)
        // Content should have description
        cy.get(`article[id="stuff-item-${id}"]`).find(`img[id="stuff-logo-${id}"]`).should('have.length', 1)
        // Content should have voting button
        cy.get(`article[id="stuff-item-${id}"]`).find(`button[id="vote-button-${id}"]`).should('have.length', 1)
    }

    return {
        checkRequiredElements
    }
}

export default Stuff