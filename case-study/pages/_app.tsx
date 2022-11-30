// import '../styles/globals.css'
import "../styles/css/style.css"
import "../styles/css/query.css"
import "../styles/css/animation.css"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
