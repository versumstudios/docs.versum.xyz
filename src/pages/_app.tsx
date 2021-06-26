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
        <title>docs</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Docs" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
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
