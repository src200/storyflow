import '@styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Layout from '@components/Layout';
import NextNProgress from 'nextjs-progressbar';

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   const body = JSON.stringify(metric);
//   const url = 'https://vitals.vercel-insights.com'

//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
//   if (navigator.sendBeacon) {
//     navigator.sendBeacon(url, body)
//   } else {
//     fetch(url, { body, method: 'POST', keepalive: true })
//   }
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <NextNProgress color="#ff7e1d" height={4} startPosition={0.2} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp