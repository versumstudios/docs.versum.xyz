import { FC, useState, useEffect } from "react"
import { MenuIcon } from "./menu-icon"
import { Mobile, Desktop } from "./menu"
import * as Styles from "./styles"

export interface AsideProps {
  navigation?: any
  version?: string
}

export const Aside: FC<AsideProps> = ({ navigation, version }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // if (open) {
    //   document.body.style["overflow"] = "hidden"
    // } else {
    //   document.body.style["overflow"] = "unset"
    // }
  }, [open])

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

      <Mobile navigation={navigation} isOpen={open} />
      <Desktop navigation={navigation} />
    </Styles.Aside>
  )
}
