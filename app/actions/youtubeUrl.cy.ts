import { getYoutubeEmbeddedUrlFromFullUrl } from "./youtubeUrl"

describe('youtubeUrl', () => {
    it('can generate YouTube embedded URL', () => {
        const youtubeFullUrl = 'https://www.youtube.com/watch?v=aoOQL7fiMCQ'
        const youtubeEmbeddedUrl = getYoutubeEmbeddedUrlFromFullUrl(youtubeFullUrl)
        expect(youtubeEmbeddedUrl).to.equal('https://www.youtube.com/embed/aoOQL7fiMCQ?html5=1&amp;wmode=opaque')
    })

    it('can preserve non-Youtube URLs', () => {
        const youtubeFullUrl = 'https://www.example.com/123456789-abcdefgh'
        const youtubeEmbeddedUrl = getYoutubeEmbeddedUrlFromFullUrl(youtubeFullUrl)
        expect(youtubeEmbeddedUrl).to.equal(youtubeFullUrl)
    })

    it('returns original URL if not a supported Youtube URL', () => {
        const youtubeFullUrl = 'https://www.youtube.com/watche?v=aoOQL7fiMCQ'
        const youtubeEmbeddedUrl = getYoutubeEmbeddedUrlFromFullUrl(youtubeFullUrl)
        expect(youtubeEmbeddedUrl).to.equal(youtubeFullUrl)
    })
})