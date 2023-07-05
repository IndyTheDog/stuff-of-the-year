import { getImageUrlFromGoogleDrive } from "./googleDriveImage"

describe('GoogleDriveImage', () => {
    it('can format Google Drive URLs', () => {
        const googleDriveUrl = 'https://drive.google.com/file/d/1234567890-abcdefgh/view?usp=drive_link'
        const googleDriveImageUrl = getImageUrlFromGoogleDrive(googleDriveUrl)
        expect(googleDriveImageUrl).to.equal('https://drive.google.com/uc?export=view&id=1234567890-abcdefgh')
    })

    it('can preserve non-Google Drive URLs', () => {
        const googleDriveUrl = 'https://www.example.com/123456789-abcdefgh'
        const googleDriveImageUrl = getImageUrlFromGoogleDrive(googleDriveUrl)
        expect(googleDriveImageUrl).to.equal(googleDriveUrl)
    })
})