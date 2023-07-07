'use client'
import Image from 'next/image'
import { MouseEvent } from 'react'
import { StuffData } from '../models/StuffData'

const Stuff = (props: {
  data: StuffData
  voteEnabled: boolean
  vote: (vote: string) => void
}) => {
  const {
    id,
    title,
    assetId,
    stuffImage,
    stuffLogo,
    stuffType,
    stuffVideo,
    ownerName,
    description,
    voteText,
    location,
  } = props.data
  const buttonEnabledClass =
    'bg-tertiary-bg text-tertiary-color border-tertiary-color hover:bg-tertiary-color hover:text-tertiary-bg hover:border-tertiary-bg'
  const buttonDisabledClass =
    'bg-tertiary-color text-tertiary-bg border-tertiary-bg'

  const voteValue = JSON.stringify({
    id: id,
    name: title,
  })

  const mediaData =
    stuffVideo && stuffVideo?.length > 0 ? (
      <div className="rounded-t-xl" id={`stuff-video-${assetId}`}>
        <iframe
          width={512}
          height={256}
          src={stuffVideo}
          allowFullScreen
        ></iframe>
      </div>
    ) : (
      <Image
        className="rounded-t-xl"
        src={stuffImage}
        width={512}
        height={256}
        alt={`stuff of ${ownerName}.`}
        id={`stuff-image-${assetId}`}
      />
    )

  const castStuffVote = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const target = event.target as HTMLButtonElement
    props.vote(target.value)
  }

  return (
    <article
      className="relative flex flex-col bg-secondary-bg rounded-xl h-article max-w-article"
      id={`stuff-item-${assetId}`}
      key={`stuff-item-${assetId}`}
    >
      {mediaData}
      <Image
        className="absolute right-3 top-3"
        src={`${stuffLogo}`}
        width={80}
        height={25}
        alt={`stuff of ${ownerName}.`}
        id={`stuff-logo-${assetId}`}
      />
      <div
        className="h-full px-5 pt-5 flex flex-col"
        id={`content-stuff-item-${assetId}`}
      >
        <span
          className="text-title text-lg font-semibold"
          id={`stuff-title-${assetId}`}
        >{`${title} by ${ownerName}`}</span>
        <span
          className="text-primary-color pt-3 text-sm font-medium leading-4 grow"
          id={`stuff-description-${assetId}`}
        >
          {description}
        </span>
        <div className="text-secondary-color py-3 font-bold flex justify-between items-center">
          <span className="w-1/5">{stuffType}</span>
          <button
            className={`text-sm rounded-xl px-5 py-2 w-2/5 ${
              props.voteEnabled ? buttonEnabledClass : buttonDisabledClass
            }`}
            id={`vote-button-${assetId}`}
            value={voteValue}
            onClick={castStuffVote}
            disabled={!props.voteEnabled}
          >
            {voteText}
          </button>
          <span className="text-right w-2/5">
            <Image
              className="inline"
              src={`/images/pin-yellow.png`}
              width={12}
              height={12}
              alt={'Location pin'}
            />
            {`     ${location}`}
          </span>
        </div>
      </div>
    </article>
  )
}

export default Stuff
