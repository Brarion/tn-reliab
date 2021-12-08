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
      </Head>
      <Component {...pageProps} />
    </html>
  )
}

export default MyApp
