import { StuffData } from '../models/StuffData'
import Stuff from './Stuffv2'

describe('<Stuffv2 />', () => {
  const stuffData: StuffData = {
    id: 0,
    assetId: '01',
    description:
      'Prepare to meet luxury houses, new projects INSPIRED BY BLED CASTLE ,SLOVENIA in the midst of modern atmosphere close to nature with beautiful gardens around the project. with beautiful scenery with electric wires to the ground for the whole project luxury club house Large swimming pool and fully equipped fitness center with RELAX SPACE for the whole family to truly relax.',
    location: 'Bangkok',
    stuffType: 'House',
    ownerName: 'SC ASSET',
    title: 'Bangkok Boulevard Signature Chaengwattana',
    stuffImage: '/images/stuff/stuff-01.jpg',
    stuffLogo: '/images/stuff/stuff-logo-01.png',
    voteText: 'Vote for project',
    stuffVideo: ''
  }

  it('button should not be clickable if vote is disabled', () => {
    cy.mount(
      <Stuff
        data={stuffData}
        voteEnabled={false}
        vote={function (vote: string): void {
          console.log(vote)
        }}
      ></Stuff>
    )

    cy.get('button').should('be.disabled')
  })

  it('button should be clickable if vote is enabled', () => {
    cy.mount(
      <Stuff
        data={stuffData}
        voteEnabled={true}
        vote={function (vote: string): void {
          console.log(vote)
        }}
      ></Stuff>
    )

    cy.get('button').should('be.enabled')
  })

  it('should submit the vote when button is clicked', () => {
    const mock = {
      vote(vote: string) {
        void vote
      },
    }
    const spy = cy.spy(mock, 'vote')

    cy.mount(<Stuff data={stuffData} voteEnabled={true} vote={spy}></Stuff>)

    cy.get('button')
      .click()
      .then(() => {
        expect(spy).to.have.been.called
      })
  })
})

export {}
