import { StuffData } from "../models/StuffData"

const StuffProvider = {

    async getCsvData(): Promise<string[][]> {
        const dataUrl = process.env.PROJECT_2023_TH_DATA_URL ?? ""
        const dataExpiry = process.env.PROJECT_2023_TH_DATA_EXPIRY ? +process.env.PROJECT_2023_TH_DATA_EXPIRY : 600
        console.log(dataUrl)
        if (dataUrl === "") return Promise.resolve([])
        const response = await fetch(dataUrl, { next: { revalidate: dataExpiry } })
        const csvData = await response.text()
        // Convert CSV to array of arrays
        const result = csvData.split('\r\n').map(line => line.split("\t"))
        // Remove the header lint
        result.shift()
        return result
    },
    getImageUrlFromGoogleDrive(googleDriveUrl: string): string {
        if (googleDriveUrl.indexOf('drive.google.com') === -1) return `${googleDriveUrl}`
        const IMAGE_URL_FORMAT = 'https://drive.google.com/uc?export=view&id='
        const googleImageId = googleDriveUrl.split('file/d/')[1].split('/view')[0]
        return `${IMAGE_URL_FORMAT}${googleImageId}`
    },
    async getStuffData(voteText: string): Promise<StuffData[]> {
        const csvData = await this.getCsvData()
        const stuffData: StuffData[] = []
        csvData.forEach((data, index) => {
            void (data)
            stuffData.push({
                id: index,
                assetId: data[0],
                title: data[1],
                description: data[2],
                ownerName: data[3],
                location: data[4],
                stuffType: data[5],
                stuffLogo: this.getImageUrlFromGoogleDrive(data[6]),
                stuffImage: this.getImageUrlFromGoogleDrive(data[7]),
                stuffVideo: data[8],
                voteText
            })
        })
        return stuffData
    }
}

export default StuffProvider