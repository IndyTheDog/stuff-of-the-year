'use server'

const castVote = async (value: { id: string, name: string }) => {
    void(value)
    return "Thank you for your vote."
}

export default castVote