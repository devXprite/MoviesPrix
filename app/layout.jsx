import './globals.scss';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Nav from '../components/Nav';
import ScrollTopBtn from '../components/ScrollTopBtn';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="manifest.json" />
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
