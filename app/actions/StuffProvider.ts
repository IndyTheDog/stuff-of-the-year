import { StuffData } from "../models/StuffData"
import { getImageUrlFromGoogleDrive } from "./googleDriveImage"
import { getYoutubeEmbeddedUrlFromFullUrl } from "./youtubeUrl"

const StuffProvider = {

    async getCsvData(): Promise<string[][]> {
        const dataUrl = process.env.PROJECT_2023_TH_DATA_URL ?? ""
        const dataExpiry = process.env.PROJECT_2023_TH_DATA_EXPIRY ? +process.env.PROJECT_2023_TH_DATA_EXPIRY : 600
        if (dataUrl === "") return Promise.resolve([])
        const response = await fetch(dataUrl, { next: { revalidate: dataExpiry } })
        const csvData = await response.text()
        // Convert CSV to array of arrays
        const result = csvData.split('\r\n').map(line => line.split("\t"))
        // Remove the header lint
        result.shift()
        return result
    },
    async getStuffData(voteText: string): Promise<StuffData[]> {
        const csvData = await this.getCsvData()
        const stuffData: StuffData[] = []
        csvData.forEach((data, index) => {
            void (data)
            stuffData.push({
                id: index,
                assetId: `${index}`,
                title: data[1],
                description: data[2],
                ownerName: data[3],
                location: data[4],
                stuffType: data[5],
                stuffLogo: getImageUrlFromGoogleDrive(data[6]),
                stuffImage: getImageUrlFromGoogleDrive(data[7]),
                stuffVideo: getYoutubeEmbeddedUrlFromFullUrl(data[8]),
                voteText
            })
        })
        console.log(stuffData)
        return stuffData
    }
}

export default StuffProvider