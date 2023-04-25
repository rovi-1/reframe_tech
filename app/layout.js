import './globals.css'


export const metadata = {
  title: 'SKYFRAME',
}

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
     
      <body className="bg-white dark:bg-black" >
        {children}
        </body>
    </html>
  )
}
