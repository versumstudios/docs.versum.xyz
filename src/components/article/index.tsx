import { FC, ReactNode } from "react"
import * as Styles from "./styles"

export interface ArticleProps {
  children?: string | ReactNode
}

export const Article: FC<ArticleProps> = ({ children }) => {
  return <Styles.Article>{children}</Styles.Article>
}
