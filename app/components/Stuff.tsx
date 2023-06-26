import Image from 'next/image'

const Stuff = (props: {
  id: string
  ownerName: string
  title: string
  description: string
  stuffType: string
  location: string
  stuffImage: string
  stuffLogo: string
  voteText: string
}) => {
  return (
    <article
      className="relative flex flex-col bg-neutral-900 rounded-xl h-article max-w-article"
      id={`stuff-item-${props.id}`}
      key={`stuff-item-${props.id}`}
    >
      <Image
        className="rounded-t-xl"
        src={`/images/stuff/${props.stuffImage}`}
        width={513}
        height={256}
        alt={`stuff of ${props.ownerName}.`}
        id={`stuff-image-${props.id}`}
      />
      <Image
        className="absolute right-3 top-3"
        src={`/images/stuff/${props.stuffLogo}`}
        width={80}
        height={25}
        alt={`stuff of ${props.ownerName}.`}
        id={`stuff-logo-${props.id}`}
      />
      <div
        className="h-full px-5 pt-5 flex flex-col"
        id={`content-stuff-item-${props.id}`}
      >
        <span
          className="text-yellow-500 text-lg font-semibold text-justify"
          id={`stuff-title-${props.id}`}
        >{`${props.title} by ${props.ownerName}`}</span>
        <span
          className="text-neutral-500 pt-3 text-sm font-medium text-justify leading-4 grow"
          id={`stuff-description-${props.id}`}
        >
          {props.description}
        </span>
        <div className="text-white py-3 font-bold flex justify-between items-center">
          <span className="pr-10">{props.stuffType}</span>
          <button
            className="grow text-sm bg-slate-300 text-slate-700 border-slate-700 rounded-xl px-5 py-2 hover:bg-slate-700 hover:text-slate-300 hover:border-slate-300"
            id={`vote-button-${props.id}`}
            value={`vote-${props.id}`}
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
