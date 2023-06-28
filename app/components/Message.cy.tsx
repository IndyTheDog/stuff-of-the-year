import DialogData from '../models/DialogData'
import Message from './Message'

describe('<Message />', () => {
  it('should not be visible if open is false', () => {
    const dialogData: DialogData = {
      closeText: 'Ok',
      complete: () => 0,
      message: 'Thank you for your vote',
      title: 'Thank you',
      open: false,
    }
    cy.mount(<Message data={dialogData} />)

    cy.get('dialog').should('not.be.visible')
  })

  it('should be visible if open is true', () => {

    const dialogData: DialogData = {
      closeText: 'Ok',
      complete: () => 0,
      message: 'Thank you for your vote',
      title: 'Thank you',
      open: true,
    }
    cy.mount(<Message data={dialogData} />)
    cy.get('dialog').should('be.visible')
  })


  it('should be closed if button is clicked', () => {
    const mock = {
      complete() {
        //
      },
    }
    const spy = cy.spy(mock, 'complete')

    const dialogData: DialogData = {
      closeText: 'Ok',
      complete: spy,
      message: 'Thank you for your vote',
      title: 'Thank you',
      open: true,
    }
    cy.mount(<Message data={dialogData} />)
    cy.get('dialog').should('be.visible')
    cy.get('dialog').find('button').first().click().then(() => {
      expect(spy).to.have.been.called
    }).then(() => {
      cy.get('dialog').should('not.be.visible')
    })
  })
})

export {}
