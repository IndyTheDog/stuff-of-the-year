import Link from 'next/link'

const Home = () => {
  return (
    <main className="text-slate-50 w-full px-10 pt-10">
      <ol>
        <li>
          <Link href={'/v1'} rel="noopener noreferrer" target="_blank">
            Hard-coded Stuff
          </Link>{' '}
        </li>
        <li>
          <Link href={'/v2'} rel="noopener noreferrer" target="_blank">
            Mocked data Stuff
          </Link>{' '}
        </li>
        <li>
          <Link href={'/v3'} rel="noopener noreferrer" target="_blank">
            Server data Stuff
          </Link>{' '}
        </li>
        <li>
          <Link href={'/v4'} rel="noopener noreferrer" target="_blank">
            Server data Stuff with optional Video
          </Link>{' '}
        </li>
      </ol>
    </main>
  )
}

export default Home
