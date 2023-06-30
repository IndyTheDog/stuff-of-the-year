'use client'
import Image from 'next/image'
import { MouseEvent } from 'react'

const Stuff = (props: {
  id: number
  assetId: string
  ownerName: string
  title: string
  description: string
  stuffType: string
  location: string
  stuffImage: string
  stuffLogo: string
  voteText: string
  voteEnabled: boolean
  vote: (vote: string) => void
}) => {
  const buttonEnabledClass =
    'bg-tertiary-bg text-tertiary-color border-tertiary-color hover:bg-tertiary-color hover:text-tertiary-bg hover:border-tertiary-bg'
  const buttonDisabledClass =
    'bg-tertiary-color text-tertiary-bg border-tertiary-bg'

  const voteValue = JSON.stringify({
    id: +props.id,
    name: props.title,
  })

  const castStuffVote = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const target = event.target as HTMLButtonElement
    props.vote(target.value)
  }

  return (
    <article
      className="relative flex flex-col bg-secondary-bg rounded-xl h-article max-w-article"
      id={`stuff-item-${props.assetId}`}
      key={`stuff-item-${props.assetId}`}
    >
      <Image
        className="rounded-t-xl"
        src={`/images/stuff/${props.stuffImage}`}
        width={512}
        height={256}
        alt={`stuff of ${props.ownerName}.`}
        id={`stuff-image-${props.assetId}`}
      />
      <Image
        className="absolute right-3 top-3"
        src={`/images/stuff/${props.stuffLogo}`}
        width={80}
        height={25}
        alt={`stuff of ${props.ownerName}.`}
        id={`stuff-logo-${props.assetId}`}
      />
      <div
        className="h-full px-5 pt-5 flex flex-col"
        id={`content-stuff-item-${props.assetId}`}
      >
        <span
          className="text-title text-lg font-semibold text-justify"
          id={`stuff-title-${props.assetId}`}
        >{`${props.title} by ${props.ownerName}`}</span>
        <span
          className="text-primary-color pt-3 text-sm font-medium text-justify leading-4 grow"
          id={`stuff-description-${props.assetId}`}
        >
          {props.description}
        </span>
        <div className="text-secondary-color py-3 font-bold flex justify-between items-center">
          <span className="pr-10">{props.stuffType}</span>
          <button
            className={`grow text-sm rounded-xl px-5 py-2 ${
              props.voteEnabled ? buttonEnabledClass : buttonDisabledClass
            }`}
            id={`vote-button-${props.assetId}`}
            value={voteValue}
            onClick={castStuffVote}
            disabled={!props.voteEnabled}
          >
            {props.voteText}
          </button>
          <span className="pl-10 text-right">
            <Image
              className="inline"
              src={`/images/pin-yellow.png`}
              width={12}
              height={12}
              alt={'Location pin'}
            />
            {`     ${props.location}`}
          </span>
        </div>
      </div>
    </article>
  )
}

export default Stuff
