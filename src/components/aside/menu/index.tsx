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
      <Styles.Nav>
        {navigation.children.map((item: any) => {
          return (
            <Link key={item.slug} href={item.children[0].slug}>
              <Styles.A selected={router.asPath.indexOf(item.slug) !== -1}>
                {item.name}
              </Styles.A>
            </Link>
          )
        })}
      </Styles.Nav>

      {navigation.children.map((e: any) => (
        <Styles.Ul key={e.slug} selected={router.asPath.indexOf(e.slug) !== -1}>
          {e.children.map((i: any) => {
            return (
              <li key={i.slug}>
                <Link href={i.slug}>{i.name}</Link>
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
