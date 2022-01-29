import Head from "next/head"
import type { AppProps } from "next/app"
import { MDXProvider } from "@mdx-js/react"
import { globalStyles } from "@styles/stitches"
import { Main } from "@components/main"

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <title>Versum Documentation</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Versum Documentation" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <MDXProvider components={{}}>
          <Component {...pageProps} />
        </MDXProvider>
      </Main>
    </>
  )
}
