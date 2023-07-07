import safeShouldBeVisible from "../utils"

const Stuffv2 = () => {
    const checkRequiredElements = (id: string, element = "img", type = "image") => {
        cy.get(`article[id="stuff-item-${id}"]`).should('exist')
        cy.get(`div[id="content-stuff-item-${id}"]`).should('exist')
        // Content should have title
        cy.get(`div[id="content-stuff-item-${id}"]`).find(`span[id="stuff-title-${id}"]`).should('have.length', 1)
        // Content should have description
        cy.get(`div[id="content-stuff-item-${id}"]`).find(`span[id="stuff-description-${id}"]`).should('have.length', 1)
        // Content should have image
        cy.get(`article[id="stuff-item-${id}"]`).find(`${element}[id="stuff-${type}-${id}"]`).should('have.length', 1)
        // Content should have description
        cy.get(`article[id="stuff-item-${id}"]`).find(`img[id="stuff-logo-${id}"]`).should('have.length', 1)
        // Content should have voting button
        cy.get(`article[id="stuff-item-${id}"]`).find(`button[id="vote-button-${id}"]`).should('have.length', 1)

        // Click vote button
        cy.get(`dialog[id="vote-result-dialog"]`).should('not.be.visible')
        cy.get(`button[id="vote-button-${id}"]`).click().then(() => {
            safeShouldBeVisible('dialog[id="vote-result-dialog"]')
            cy.get(`dialog[id="vote-result-dialog"]`).find('button').first().click().then(() => {
                safeShouldBeVisible('dialog[id="vote-result-dialog"]', false)
                cy.get(`button[id="vote-button-${id}"]`).should('be.disabled')
            })
        })

    }

    return {
        checkRequiredElements
    }
}

export default Stuffv2