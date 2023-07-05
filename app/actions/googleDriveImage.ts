export const getImageUrlFromGoogleDrive = (googleDriveUrl: string): string => {
    if (googleDriveUrl.indexOf('drive.google.com') === -1) return `${googleDriveUrl}`
    const IMAGE_URL_FORMAT = 'https://drive.google.com/uc?export=view&id='
    const googleImageId = googleDriveUrl.split('file/d/')[1].split('/view')[0]
    return `${IMAGE_URL_FORMAT}${googleImageId}`
}