import Head from 'next/head'

const RootLayout = ({children,}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout