'use client'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Message from '../components/Message'
import Stuff from '../components/Stuffv2'
import DialogData from '../models/DialogData'
import castVote from '../actions/vote'
import VoteData from '../models/VoteData'
import { StuffData } from '../models/StuffData'

const voteText = 'Vote for project'
const stuffData: StuffData[] = [
  {
    id: 0,
    assetId: '1',
    description:
      'Prepare to meet luxury houses, new projects INSPIRED BY BLED CASTLE ,SLOVENIA in the midst of modern atmosphere close to nature with beautiful gardens around the project. with beautiful scenery with electric wires to the ground for the whole project luxury club house Large swimming pool and fully equipped fitness center with RELAX SPACE for the whole family to truly relax.',
    location: 'Bangkok',
    stuffType: 'House',
    ownerName: 'SC ASSET',
    title: 'Bangkok Boulevard Signature Chaengwattana',
    stuffImage: '/images/stuff/stuff-01.jpg',
    stuffLogo: '/images/stuff/stuff-logo-01.png',
    stuffVideo: '',
    voteText,
  },
  {
    id: 1,
    assetId: '2',
    description:
      'Meet the new series of luxury Nordic houses inspired by the tourist destinations in Northern Europe. Feel closer to nature with the high-ceiling, glass wall, an architectural signature of Nordic countries where the people are well known for being the happiest in the world. Feast your eyes on the iconic, elegant design of the luxury Nordic clubhouse with fully equipped facilities. Make your everyday life like an elegant staycation with the grand common park inspired by the 3 seasons of Scandinavian pine forest. Make your everyday life like an elegant staycation with the grand common park inspired by the.',
    location: 'Bangkok',
    stuffType: 'House',
    ownerName: 'SC ASSET',
    title: 'Bangkok Boulevard Changwattana 2',
    stuffImage: '/images/stuff/stuff-02.jpg',
    stuffLogo: '/images/stuff/stuff-logo-02.png',
    stuffVideo: '',
    voteText,
  },
  {
    id: 2,
    assetId: '3',
    description:
      'Dusit Residences features grand homes with stunning park vistas, ideal for those who desire a timelessly classic and private living space with close connections to the city. Tastefully furnished, Asian inspired décor with a subtle Thai sensibility brings together inviting colour combinations and accents of luxurious natural materials and fine finishes to this splendid sanctuary in the city. Dusit Residences features grand homes with stunning park vistas, ideal for those who desire a timelessly classic and private living space with close connections to the city. Tastefully furnished, Asian inspired décor with a subtle Thai sensibility brings together inviting colour combinations. with a subtle Thai sensibility brings together inviting colour combinations.',
    location: 'Bangkok',
    stuffType: 'House',
    ownerName: 'Vimarn Suriya Co., Ltd.',
    title: 'Dusit Residences',
    stuffImage: '/images/stuff/stuff-03.jpg',
    stuffLogo: '/images/stuff/stuff-logo-03.png',
    stuffVideo: '',
    voteText,
  },
]

const Page = () => {
  const [voteEnabled, setVoteEnabled] = useState(true)

  const voteStepOne = (vote: string) => {
    const data = JSON.parse(vote)
    const newData = { ...dialogData }
    newData.message = `Do you want to vote for "${data.name}"?`
    newData.title = `Cast your vote`
    newData.data = data
    newData.open = true
    setDialogData(newData)
  }

  const voteStepTwo = async (data: VoteData) => {
    if (data.id >= 0) {
      await castVote(data)
      setVoteEnabled(false)
    }
    const newData = { ...dialogData }
    newData.open = false
    setDialogData(newData)
  }

  const defaultDialogData: DialogData = {
    title: '',
    message: '',
    controlA: 'Yes',
    controlB: 'No',
    open: false,
    voteStepTwo,
    data: { id: -1, name: '' },
    showControl: true
  }
  const [dialogData, setDialogData] = useState(defaultDialogData)

  const stuffElements: JSX.Element[] = []
  stuffData.forEach((stuff) => {
    stuffElements.push(
      <Stuff data={stuff} voteEnabled={voteEnabled} vote={voteStepOne} key={`stuff-key-${stuff.id}`}></Stuff>
    )
  })

  return (
    <>
      <Header></Header>
      <main className="container w-5/6 min-w-full md:min-w-full-lg grid grid-cols-1 md:grid-cols-2 grid-col gap-x-16 gap-y-5 py-10 px-5 justify-items-center">
        {stuffElements}
        <Message data={dialogData}></Message>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Page
