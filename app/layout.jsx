import './globals.scss'
import { NextSeo } from 'next-seo';
import Nav from '../components/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <NextSeo
          useAppDir={true}
          themeColor="#1c1c1c"
          titleTemplate="%s | MoviesPrix"
        />
      </head>
      <body>
        < Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
