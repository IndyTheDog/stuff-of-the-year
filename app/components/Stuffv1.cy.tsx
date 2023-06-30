import Stuff from './Stuffv1'

describe('<Stuffv1 />', () => {
  it('button should not be clickable if vote is disabled', () => {
    cy.mount(
      <Stuff
        id={1}
        assetId="01"
        ownerName={'Super Dev'}
        title={'Awesome Condo Project Name'}
        description={'abcdefg '.repeat(12)}
        stuffType={'House'}
        location={'World'}
        stuffImage={'stuff-01.jpg'}
        stuffLogo={'stuff-logo-01.png'}
        voteText={'Vote for stuff'}
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
        id={1}
        assetId="01"
        ownerName={'Super Dev'}
        title={'Awesome Condo Project Name'}
        description={'abcdefg '.repeat(12)}
        stuffType={'House'}
        location={'World'}
        stuffImage={'stuff-01.jpg'}
        stuffLogo={'stuff-logo-01.png'}
        voteText={'Vote for stuff'}
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

    cy.mount(
      <Stuff
        id={1}
        assetId="01"
        ownerName={'Super Dev'}
        title={'Awesome Condo Project Name'}
        description={'abcdefg '.repeat(12)}
        stuffType={'House'}
        location={'World'}
        stuffImage={'stuff-01.jpg'}
        stuffLogo={'stuff-logo-01.png'}
        voteText={'Vote for stuff'}
        voteEnabled={true}
        vote={spy}
      ></Stuff>
    )

    cy.get('button')
      .click()
      .then(() => {
        expect(spy).to.have.been.called
      })
  })
})
export {}