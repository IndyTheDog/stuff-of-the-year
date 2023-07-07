export const getImageUrlFromGoogleDrive = (fileUrl: string): string => {
    const IMAGE_URL_FORMAT = 'https://drive.google.com/uc?export=view&id='
    if (fileUrl.indexOf('drive.google.com') === -1) return `${fileUrl}`
    if (fileUrl.indexOf('file/d/') > 0 && fileUrl.indexOf('/view') > 0) {
        const googleImageId = fileUrl.split('file/d/')[1].split('/view')[0]
        return `${IMAGE_URL_FORMAT}${googleImageId}`
    } else if (fileUrl.indexOf('open?id=') > 0) {
        const googleImageId = fileUrl.split('open?id=')[1].split('&')[0]
        return `${IMAGE_URL_FORMAT}${googleImageId}`
    }
    return fileUrl
}