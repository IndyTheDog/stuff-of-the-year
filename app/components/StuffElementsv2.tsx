'use client'

import { useState } from 'react'
import DialogData from '../models/DialogData'
import { StuffData } from '../models/StuffData'
import VoteData from '../models/VoteData'
import Stuff from './Stuffv3'
import Message from './Message'

const StuffElements = (props: {
  stuffData: StuffData[]
  castVote: (value: VoteData) => Promise<string>
}) => {
  const [dialogData, setDialogData] = useState({} as DialogData)
  const [voteEnabled, setVoteEnabled] = useState(true)

  const voteStepOne = (vote: string) => {
    const data = JSON.parse(vote)
    const newData = { ...dialogData }
    newData.message = `Do you want to vote for "${data.name}"?`
    newData.title = `Cast your vote`
    newData.data = data
    newData.open = true
    newData.controlA = 'Yes'
    newData.controlB = 'No'
    newData.voteStepTwo = voteStepTwo
    setDialogData(newData)
  }

  const voteStepTwo = async (data: VoteData) => {
    if (data.id >= 0) {
      await props.castVote(data)
      setVoteEnabled(false)
    }
    const newData = { ...dialogData }
    newData.open = false
    setDialogData(newData)
  }

  const stuffElements: JSX.Element[] = []
  props.stuffData.forEach((stuff) => {
    stuffElements.push(
      <Stuff
        data={stuff}
        voteEnabled={voteEnabled}
        vote={voteStepOne}
        key={`stuff-key-${stuff.id}`}
      ></Stuff>
    )
  })

  return (
    <>
      {stuffElements}
      <Message data={dialogData}></Message>
    </>
  )
}

export default StuffElements
