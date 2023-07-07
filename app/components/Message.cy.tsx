import DialogData from '../models/DialogData'
import VoteData from '../models/VoteData'
import Message from './Message'

const dialogData: DialogData = {
  controlA: 'Yes',
  controlB: 'No',
  voteStepTwo: (data: VoteData) => void data,
  message: 'Thank you for your vote',
  title: 'Thank you',
  open: true,
  data: { id: 0, name: '' },
  showControl: true
}

describe('<Message />', () => {
  it('should not be visible if open is false', () => {
    const closedDialogData = { ...dialogData }
    closedDialogData.open = false
    cy.mount(<Message data={closedDialogData} />)

    cy.get('dialog').should('not.be.visible')
  })

  it('should be visible if open is true', () => {
    cy.mount(<Message data={dialogData} />)
    cy.get('dialog').should('be.visible')
  })

  it('should execute action if button is clicked', () => {
    const mock = {
      voteStepTwo(choice: boolean) {
        void choice
      },
    }
    const spy = cy.spy(mock, 'voteStepTwo')
    const newDialogData = { ...dialogData }
    newDialogData.voteStepTwo = spy

    cy.mount(<Message data={newDialogData} />)
    cy.get('dialog').should('be.visible')
    cy.get('dialog')
      .find('button')
      .first()
      .click()
      .then(() => {
        expect(spy).to.have.been.called
      })
  })
})

export {}
