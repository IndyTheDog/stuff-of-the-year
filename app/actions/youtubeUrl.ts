export const getYoutubeEmbeddedUrlFromFullUrl = (videoUrl: string): string => {
    if (videoUrl.indexOf('youtube.com') === -1) return `${videoUrl}`
    const IMAGE_URL_FORMAT = 'https://www.youtube.com/embed/YTVIDEOID?html5=1&amp;wmode=opaque'
    if (videoUrl.indexOf('watch?v=') > 0) {
        const videoId = videoUrl.split('watch?v=')[1].split('&')[0]
        return IMAGE_URL_FORMAT.replace('YTVIDEOID', videoId)
    }
    return videoUrl
}