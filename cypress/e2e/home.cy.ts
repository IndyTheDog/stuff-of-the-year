import Home from "./poms/home"

// Cypress E2E Test
describe('Home page', () => {
  it('should find required content', () => {
    const home = Home()
    home.checkRequiredElements()
  })
})
