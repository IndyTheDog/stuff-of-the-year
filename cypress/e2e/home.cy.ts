import Home from "./poms/home"
import Stuff from "./poms/stuff"

// Cypress E2E Test
describe('Home page', () => {
  it('should find required content', () => {
    // Open homepage
    cy.visit('http://localhost:3000/v1')

    // Check Home elements
    const home = Home()
    home.checkRequiredElements()

    // Check Projects
    const stuff = Stuff()
    stuff.checkRequiredElements('01')
  })
})
