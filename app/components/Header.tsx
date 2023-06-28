import Image from 'next/image'
import '../../styles/header.css'

const Header = () => {
    return (
        <header className="award-title-bg min-w-full flex flex-col items-center text-secondary-color">
        <Image
          className="py-28"
          src={'/images/award-logo-2023.png'}
          width={336}
          height={336}
          alt="Award logo"
          id="award-logo"
        />
        <div className="award-main-bg min-w-full w-full flex flex-col items-center text-center">
          <h1 id="award-title" className="pt-10 w-2/3 text-4xl font-bold">
            People&apos;s Choice Awards for
          </h1>
          <h2
            id="award-subtitle"
            className="w-2/3 text-4xl font-medium text-title"
          >
            Project of the Year 2023
          </h2>
          <span id="award-intro" className="pt-8 text-lg font-normal w-7/10">
            Each year, the Dot Property Awards asks the public to tell us what
            real estate project they like best. Have your voice heard and vote
            for the People’s Choice Award for Project of the Year. Scroll down
            to learn more about this year’s contenders and then select your
            favorite.
          </span>
        </div>
      </header>
    )
}

export default Header