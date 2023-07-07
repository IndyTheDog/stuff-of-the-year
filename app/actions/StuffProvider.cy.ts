import StuffProvider from "./StuffProvider"

describe('StuffProvider', () => {
    it('can retrieve data', async () => {
        cy.stub(StuffProvider, 'getCsvData').callsFake(async () => {
            return Promise.resolve([
                ["01", "Name 1", "Description 1", "Developer 1", "Location 1", "Property Type 1", "Google Drive Logo Link 1", "Google Drive Link 1", "Video URL 1"],
                ["02", "Name 2", "Description 2", "Developer 2", "Location 2", "Property Type 2", "Google Drive Logo Link 2", "Google Drive Link 2", "Video URL 2"],
                ])
        })
        const voteForProject = 'Vote for project'
        const data = await StuffProvider.getStuffData(voteForProject)
        expect(data).to.be.of.length(2)
        expect(data[0].assetId).to.be.equal('0')
        expect(data[0].title).to.be.equal('Name 1')
        expect(data[0].description).to.be.equal('Description 1')
        expect(data[0].ownerName).to.be.equal('Developer 1')
        expect(data[0].location).to.be.equal('Location 1')
        expect(data[0].stuffType).to.be.equal('Property Type 1')
        expect(data[0].stuffLogo).to.be.equal('Google Drive Logo Link 1')
        expect(data[0].stuffImage).to.be.equal('Google Drive Link 1')
        expect(data[0].stuffVideo).to.be.equal('Video URL 1')
        expect(data[0].voteText).to.be.equal(voteForProject)
    })

})