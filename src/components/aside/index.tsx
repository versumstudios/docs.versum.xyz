import { FC, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { MenuIcon } from "./menu-icon"
import * as Styles from "./styles"

export interface AsideProps {
  navigation?: any
  version?: string
}

export const Aside: FC<AsideProps> = ({ navigation, version }) => {
  const [open, setOpen] = useState(true)
  const router = useRouter()
  return (
    <Styles.Aside>
      <Styles.Main>
        <strong>DOCS</strong>
        <nav>
          <kbd>{version}</kbd>
          <button onPointerDown={() => setOpen(!open)}>
            <MenuIcon isOpen={open} />
          </button>
        </nav>
      </Styles.Main>

      <AnimatePresence>
        {open && (
          <motion.div>
            <Styles.Nav>
              {navigation.children.map((item: any) => {
                return (
                  <Link key={item.slug} href={item.children[0].slug}>
                    <Styles.A
                      selected={router.asPath.indexOf(item.slug) !== -1}
                    >
                      {item.name}
                    </Styles.A>
                  </Link>
                )
              })}
            </Styles.Nav>

            <>
              {navigation.children.map((e: any) => {
                return (
                  <Styles.Ul
                    key={e.slug}
                    selected={router.asPath.indexOf(e.slug) !== -1}
                  >
                    {e.children.map((i: any) => {
                      return (
                        <li key={i.slug}>
                          <Link href={i.slug}>{i.name}</Link>
                        </li>
                      )
                    })}
                  </Styles.Ul>
                )
              })}
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </Styles.Aside>
  )
}
