import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Chotkari Waitlist',
  description: 'Everything in Short',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=GTM-K6CLDFQS`}
          strategy="afterInteractive" />
        <Script id='google-analytics' strategy='afterInteractive'>{`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date()); 
          gtag('config', 'G-270H1VZXVW');
        `}</Script>


      </Head>


      <body className={poppins.className}>{children}

        <script src="https://player.vimeo.com/api/player.js"></script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6CLDFQS"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      </body>
    </html>
  )
}
