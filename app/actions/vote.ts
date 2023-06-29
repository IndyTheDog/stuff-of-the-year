'use server'

import VoteData from "../models/VoteData"

const castVote = async (value: VoteData) => {
    console.log(value)
    return "Thank you for your vote."
}

export default castVote