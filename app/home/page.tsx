import Image from 'next/image'
import '../../styles/home.css'

const Home = () => {
  return (
    <>
      <div className='award-title-bg flex flex-col items-center'>
        <Image
        className='py-28'
          src={'/images/award-logo.png'}
          width={336}
          height={336}
          alt="Award logo"
          id="award-logo"
        />
      <main className='award-main-bg text-white flex flex-col items-center text-center'>
        <h1 id="award-title" className='pt-10 w-2/3 text-5xl font-bold'>People&apos;s Choice Awards for</h1>
        <h2 id="award-subtitle" className='w-2/3 pt-1 text-5xl font-bold text-yellow-500'>Project of the Year 2023</h2>
        <span id="award-intro" className='pt-10 text-lg w-3/4'>Each year, the Dot Property Awards asks the public to tell us what real estate project they like best. Have your voice heard and vote for the People’s Choice Award for Project of the Year. Scroll down to learn more about this year’s contenders and then select your favorite.</span>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      </div>
    </>
  )
}

export default Home
