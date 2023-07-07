import Home from "./poms/home"
import Stuff from "./poms/stuff"
import Stuffv2 from "./poms/stuffv2"

// Cypress E2E Test
describe('Home page', () => {
  it('should find required content and vote on v1', () => {
    // Open homepage
    cy.visit('http://localhost:3000/v1')

    // Check Home elements
    const home = Home()
    home.checkRequiredElements()

    // Check Projects
    const stuff = Stuff()
    stuff.checkRequiredElements('1')
  })

  it('should find required content and vote on v2', () => {
    // Open homepage
    cy.visit('http://localhost:3000/v2')

    // Check Home elements
    const home = Home()
    home.checkRequiredElements()

    // Check Projects
    const stuff = Stuff()
    stuff.checkRequiredElements('1')
  })

  it('should find required content and vote on v3', () => {
    // Open homepage
    cy.visit('http://localhost:3000/v3')

    // Check Home elements
    const home = Home()
    home.checkRequiredElements()

    // Check Projects
    const stuff = Stuff()
    stuff.checkRequiredElements('1')
  })

  it('should find required content and vote on v4', () => {
    // Open homepage
    cy.visit('http://localhost:3000/v4')

    // Check Home elements
    const home = Home()
    home.checkRequiredElements()

    // Check Projects
    const stuff = Stuff()
    stuff.checkRequiredElements('0')

    // Open homepage
    cy.visit('http://localhost:3000/v4')

    // Check Projects
    const stuffv2 = Stuffv2()
    stuffv2.checkRequiredElements('1', 'div', 'video')
  })
})
