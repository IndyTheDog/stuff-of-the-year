import getStuffData from '../actions/getStuffData'
import castVote from '../actions/vote'
import Footer from '../components/Footer'
import Header from '../components/Header'
import StuffElements from '../components/StuffElements'

const Page = async () => {
  const stuffData = await getStuffData()
  return (
    <>
      <Header></Header>
      <main className="container w-5/6 min-w-full md:min-w-full-lg grid grid-cols-1 md:grid-cols-2 grid-col gap-x-16 gap-y-5 py-10 px-5 justify-items-center">
        <StuffElements stuffData={stuffData} castVote={castVote}></StuffElements>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Page
