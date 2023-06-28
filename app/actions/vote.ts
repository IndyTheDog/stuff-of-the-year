'use server'

const castVote = async (value: { id: string, name: string }) => {
    console.log(value)
    return "Thank you for your vote."
}

export default castVote