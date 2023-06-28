import '../styles/montserrat.css'

const RootLayout = ({children,}: {children: React.ReactNode}) => {
  return (
    <html lang="en" className='p-0 m-0'>
      <body className='bg-black p-0 m-0 font-primary'>{children}</body>
    </html>
  )
}

export default RootLayout