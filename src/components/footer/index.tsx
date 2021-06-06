import Link from "next/link"
import { FC } from "react"
import * as Styles from "./styles"

export interface FooterProps {
  url: string
}

export const Footer: FC<FooterProps> = ({ url }) => (
  <Styles.Footer>
    <Link href={url}>
      <a>Edit this page on Github</a>
    </Link>
  </Styles.Footer>
)
