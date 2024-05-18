import './globals.scss';
import { GoogleAnalytics } from '@next/third-parties/google';
import Nav from '../components/Nav';
import ScrollTopBtn from '../components/ScrollTopBtn';

export const metadata = {
    title: {
        template: '%s | MoviesPrix',
        default: 'MoviesPrix',
    },
    description: 'MoviesPrix is a movie website where you can find all the latest movies and tv shows',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://moviesprix.vercel.app/',
        site_name: 'MoviesPrix',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="koBxrTJwnDsFGPdjUesKqkWAgmhsZyvWWlDkwv4cOpw" />
            </head>
            <body>
                <Nav />
                <main>
                    {children}
                    <ScrollTopBtn />
                </main>
                <GoogleAnalytics gaId="G-Y94T96FRD7" />
            </body>
        </html>
    );
}
