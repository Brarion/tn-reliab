import type { AppProps } from 'next/app'

import 'scroll-behavior-polyfill'

import '@styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
