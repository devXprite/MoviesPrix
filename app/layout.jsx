import './globals.scss'
import Nav from '../components/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
       < Nav/>
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
