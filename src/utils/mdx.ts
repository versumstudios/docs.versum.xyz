import { readFileSync } from "fs"
import path from "path"
import glob from "glob"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import directoryTree from "directory-tree"

export const DOCS_PATH = path.join(process.cwd(), "src", "docs")

// gets all slug/content from all pages
export const getSlugs = () => {
  const paths = glob.sync(`${DOCS_PATH}/**/*.mdx`)

  return paths.map((filePath: string) => {
    const source = readFileSync(filePath, "utf8")
    const { content, data } = matter(source)

    return {
      content,
      data,
      slug: filePath.replace(`${DOCS_PATH}/`, "").replace(".mdx", ""),
    }
  })
}

export const getNavigation = () => {
  // get tree structure
  const original = directoryTree(DOCS_PATH, { extensions: /\.mdx/ })

  // recursively loop through the original array and add slug
  const walk = (arr: any[], parent: string, item: any) => {
    const name: string = item.name.replace(".mdx", "")
    const slug: string = `${parent}/${name}`
    const children: any[] = []
    arr.push({ name, parent, slug, children })

    if (item.children) {
      for (let i = 0; i < item.children.length; i++) {
        walk(children, slug, item.children[i])
      }
    }

    return arr
  }

  return walk([], "", original)
}

export const getMdxBySlug = async (slug: string[]) => {
  const source = readFileSync(`${DOCS_PATH}/${slug.join("/")}.mdx`, "utf8")
  const { frontmatter, code } = await bundleMDX(source)

  return {
    frontmatter: {
      ...frontmatter,
      slug,
    },
    code,
  }
}

export const getVersion = () => {
  const raw: any = readFileSync(
    path.join(process.cwd(), "package.json"),
    "utf8"
  )
  return JSON.parse(raw).version
}
