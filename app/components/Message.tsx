'use client'
import DialogData from '../models/DialogData'
import { MouseEvent } from 'react'

const Message = (props: { data: DialogData }) => {
  const { open, title, message, controlA, controlB, voteStepTwo, data } =
    props.data
  const buttonClass =
    'bg-tertiary-bg text-tertiary-color border-tertiary-color hover:bg-tertiary-color hover:text-tertiary-bg hover:border-tertiary-bg'

  const complete = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const target = event.target as HTMLButtonElement
    const newData = { ...data }
    if (target.value === '1') {
      newData.id = -1
      newData.name = ''
    }
    await voteStepTwo(newData)
  }

  return (
    <dialog
      id="vote-result-dialog"
      open={open}
      className="bg-secondary-color rounded-sm fixed top-1/3 p-0.5"
    >
      <div className="bg-secondary-bg text-secondary-color rounded-sm py-3 px-10 flex flex-col items-center">
        <span className="font-semibold">{title}</span>
        <span className="py-5">{message}</span>
        <div>
          <button
            className={`${buttonClass} mr-3 py-1 px-5 rounded-md font-semibold`}
            onClick={complete}
            value={0}
          >
            {controlA}
          </button>
          <button
            className={`${buttonClass} ml-3 py-1 px-5 rounded-md font-semibold`}
            onClick={complete}
            value={1}
          >
            {controlB}
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default Message
