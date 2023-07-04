const safeShouldBeVisible = (elementname: string, visible = true, trials = 5) => {
    const beVisible = visible ? 'be.visible' : 'not.be.visible'
    try {
        cy.get(elementname).should(beVisible)
    } catch {
        if (trials > 0) {
            cy.wait(500).then(() => {
                safeShouldBeVisible(elementname, visible, trials - 1)
            })
        }
        else cy.get(elementname).should(beVisible)
    }
}

export default safeShouldBeVisible