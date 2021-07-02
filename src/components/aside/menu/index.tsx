import { FC } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import * as Styles from "./styles"

interface MenuProps {
  navigation?: any
  isOpen?: boolean
}

const Menu: FC<MenuProps> = ({ navigation }) => {
  const router = useRouter()
  return (
    <>
      <Styles.Ul selected>

        <li>
          <Link href="/docs/roadmap">
            <Styles.A selected={router.asPath.indexOf("/docs/roadmap") !== -1}>
              Roadmap
            </Styles.A>
          </Link>
        </li>

        <li>
          <Link href="/docs/code-of-conduct">
            <Styles.A
              selected={router.asPath.indexOf("/docs/code-of-conduct") !== -1}
            >
              Code of Conduct
            </Styles.A>
          </Link>
        </li>
      </Styles.Ul>
      {false && (
        <Styles.Nav>
          <Link key={"/docs/metaversum"} href={"/docs/metaversum/introduction"}>
            <Styles.A
              selected={router.asPath.indexOf("/docs/metaversum") !== -1}
            >
              <strong>metaversum</strong>
            </Styles.A>
          </Link>
          <Link key={"/docs/versum"} href={"/docs/versum/introduction"}>
            <Styles.A selected={router.asPath.indexOf("/docs/versum") !== -1}>
              <strong>versum</strong>
            </Styles.A>
          </Link>
        </Styles.Nav>
      )}

      {false &&
        navigation.children.map((e: any) => (
          <Styles.Ul
            key={e.slug}
            selected={router.asPath.indexOf(e.slug) !== -1}
          >
            {e.children.map((i: any) => {
              return (
                <li key={i.slug}>
                  <Link href={i.slug}>
                    <Styles.A selected={router.asPath.indexOf(i.slug) !== -1}>
                      {i.name}
                    </Styles.A>
                  </Link>
                </li>
              )
            })}
          </Styles.Ul>
        ))}
    </>
  )
}

export const Mobile: FC<MenuProps> = ({ navigation, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
        // style={{ height: "calc(100vh - 60px)", overflowY: "auto" }}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.2 }}
        >
          <Styles.Mobile>
            <Menu navigation={navigation} />
          </Styles.Mobile>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const Desktop: FC<MenuProps> = ({ navigation }) => {
  return (
    <Styles.Desktop>
      <Menu navigation={navigation} />
    </Styles.Desktop>
  )
}
