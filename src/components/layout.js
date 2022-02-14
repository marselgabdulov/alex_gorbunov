import * as React from "react"
import AOS from "aos"
import { useStaticQuery, graphql } from "gatsby"
import { MenuContext } from "../MenuContext"
import Menu from "./Menu/Menu"

import Header from "./Header/Header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [value, setValue] = React.useState("closed")

  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <MenuContext.Provider value={[value, setValue]}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Menu />
      <main>{children}</main>
    </MenuContext.Provider>
  )
}

export default Layout
