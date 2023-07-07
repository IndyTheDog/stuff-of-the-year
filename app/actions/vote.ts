'use server'

import VoteData from "../models/VoteData"

const castVote = async (value: VoteData) => {
    const url = `${process.env.PROJECT_2023_TH_VOTE_URL}?projectId=${value.id}&projectName=${value.name}`
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default castVote