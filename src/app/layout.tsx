import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K6CLDFQS');
            `,
          }}
        />
      </head>


      <body className={poppins.className}>{children}

        <script src="https://player.vimeo.com/api/player.js"></script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6CLDFQS"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      </body>
    </html>
  )
}
