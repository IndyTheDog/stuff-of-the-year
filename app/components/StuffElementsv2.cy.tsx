import safeShouldBeVisible from '../../cypress/e2e/utils'
import { StuffData } from '../models/StuffData'
import VoteData from '../models/VoteData'
import StuffElements from './StuffElementsv2'

describe('StuffElements', () => {
  it('should render default empty content if there is no data', async () => {
    const mock = {
      castVote(value: VoteData) {
        void value
      },
    }
    const spy = cy.spy(mock, 'castVote')
    cy.mount(<StuffElements stuffData={[]} castVote={spy}></StuffElements>)
    cy.get('article[id="stuff-item-01"]').should('not.exist')
  })

  it('should render content if there is data', async () => {
    const mock = {
      castVote(value: VoteData) {
        void value
      },
    }
    const spy = cy.spy(mock, 'castVote')
    const voteText = 'Vote for project'
    const stuffData: StuffData[] = [
      {
        id: 0,
        assetId: '01',
        description: 'Blablabla',
        location: 'Location',
        stuffType: 'Type',
        ownerName: 'Owner',
        title: 'Title',
        stuffImage: 'stuff-01.jpg',
        stuffLogo: 'stuff-logo-01.png',
        stuffVideo: '',
        voteText,
      },
    ]
    cy.mount(
      <StuffElements stuffData={stuffData} castVote={spy}></StuffElements>
    )
    cy.get('article[id="stuff-item-01"]').should('be.visible')
    cy.get('button[id="vote-button-01"]').click().then(() => {
      safeShouldBeVisible('dialog[id="vote-result-dialog"]')
    })
  })
})
