import './globals.scss';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Nav from '../components/Nav';
import ScrollTopBtn from '../components/ScrollTopBtn';

export const metadata = {
  title: {
    template: '%s | MoviesPrix',
    default: "MoviesPrix"
  },
  description: 'MoviesPrix is a movie website where you can find all the latest movies and tv shows',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moviesprix.vercel.app/',
    site_name: 'MoviesPrix',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <NextSeo
          useAppDir
          themeColor="#1c1c1c"
          titleTemplate="%s | MoviesPrix"
        />
      </head>
      <meta name="google-site-verification" content="koBxrTJwnDsFGPdjUesKqkWAgmhsZyvWWlDkwv4cOpw" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y94T96FRD7"
        strategy="afterInteractive"
      />
      <Script
        strategy="afterInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y94T96FRD7');
          `,
        }}
      />
      <body>
        <Nav />
        <main>
          {children}
          <ScrollTopBtn />
        </main>
      </body>
    </html>
  );
}
