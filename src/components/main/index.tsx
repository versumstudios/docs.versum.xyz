import { FC, ReactNode } from "react"
import * as Styles from "./styles"

export interface MainProps {
  children?: string | ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  return <Styles.Main>{children}</Styles.Main>
}
