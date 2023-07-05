'use server'

import VoteData from "../models/VoteData"

const castVote = async (value: VoteData) => {
    void (value)
    return "Thank you for your vote."
}

export default castVote