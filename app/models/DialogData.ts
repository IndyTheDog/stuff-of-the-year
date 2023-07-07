import VoteData from "./VoteData"

export default interface DialogData {
    title: string
    message: string
    controlA: string
    controlB: string
    open: boolean
    voteStepTwo: (data: VoteData) => void
    data: VoteData
    showControl: boolean
}