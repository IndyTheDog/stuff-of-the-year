import Home from "./poms/home"
import Stuff from "./poms/stuff"

// Cypress E2E Test
describe('Home page', () => {
  it('should find required content and vote on v1', () => {
    // Open homepage
    cy.visit('http://localhost:3000/v1')

    // Check Home elements
    const homev1 = Home()
    homev1.checkRequiredElements()

    // Check Projects
    const stuffv1 = Stuff()
    stuffv1.checkRequiredElements('01')
  })

  it('should find required content and vote on v2', () => {
    // Open homepage
    cy.visit('http://localhost:3000/v2')

    // Check Home elements
    const homev2 = Home()
    homev2.checkRequiredElements()

    // Check Projects
    const stuffv2 = Stuff()
    stuffv2.checkRequiredElements('01')
  })

  it('should find required content and vote on v3', () => {
    // Open homepage
    cy.visit('http://localhost:3000/v3')

    // Check Home elements
    const homev2 = Home()
    homev2.checkRequiredElements()

    // Check Projects
    const stuffv2 = Stuff()
    stuffv2.checkRequiredElements('01')
  })
})
