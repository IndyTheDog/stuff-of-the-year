import Image from 'next/image'

const Project = (props: {
  id: string
  publisherName: string
  title: string
  description: string
  propertyType: string
  location: string
}) => {
  return (
    <article className="flex flex-col bg-neutral-900 rounded-xl h-article">
      <Image
        className="rounded-t-xl"
        src={`/images/properties/property-${props.id}.jpg`}
        width={513}
        height={256}
        alt={`Property of ${props.publisherName}.`}
        id={`property-item-${props.id}`}
      />
      <div className="h-full pt-5 pl-5 pr-5 flex flex-col">
        <span className="text-yellow-500 text-lg font-semibold h-16 text-justify">{`${props.title} by ${props.publisherName}`}</span>
        <span className="text-neutral-500 text-sm font-medium text-justify leading-4 grow">
          {props.description}
        </span>
        <div className="text-white pb-3 font-bold flex justify-between">
          <span className="w-1/2">{props.propertyType}</span>
          <span className="w-1/2 text-right">
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

export default Project
