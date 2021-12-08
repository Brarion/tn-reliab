import Head from 'next/head'
import type { AppProps } from 'next/app'

import 'scroll-behavior-polyfill'

import '@styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang={'ru'}>
      <Head>
        <title>Технологии надежности</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </html>
  )
}

export default MyApp
