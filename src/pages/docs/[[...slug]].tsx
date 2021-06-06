import { FC, useMemo } from "react"
import Head from "next/head"
import Link from "next/link"
import { getMDXComponent } from "mdx-bundler/client"
import { Aside } from "@components/aside"
import { Article } from "@components/article"
import { getNavigation, getMdxBySlug, getSlugs, getVersion } from "@utils/mdx"

interface DocsProps {
  navigation: any
  version: string
  frontmatter: any
  code: any
}

const Docs: FC<DocsProps> = (props) => {
  const { navigation, version, frontmatter, code } = props
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Head>
        <title>{frontmatter.title} Docs</title>
      </Head>
      <Aside navigation={navigation[0]} version={version} />
      <Article>
        <section>
          <Component />
        </section>

        <footer>
          <Link
            href={`https://github.com/Tepache-Labs/docs/edit/main/src/docs/${frontmatter.slug.join(
              "/"
            )}.mdx`}
          >
            <a>Edit this page on Github</a>
          </Link>
        </footer>
      </Article>
    </>
  )
}

export default Docs

export async function getStaticPaths() {
  const slugs = getSlugs()

  return {
    paths:
      slugs?.map((doc: any) => ({
        params: {
          slug: doc.slug.split("/"),
        },
      })) || [],
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const { frontmatter, code } = await getMdxBySlug(context.params.slug)
  const navigation = getNavigation()
  const version = getVersion()
  return { props: { version, navigation, frontmatter, code } }
}
