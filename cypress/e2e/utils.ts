const safeShouldBeVisible = (elementname: string, visible = true) => {
    const beVisible = visible ? 'be.visible' : 'not.be.visible'
        cy.get(elementname, { timeout: 12000 }).should(beVisible)
}

export default safeShouldBeVisible