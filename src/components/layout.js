import * as React from "react"
import AOS from "aos"
import { useStaticQuery, graphql } from "gatsby"

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

  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
    </>
  )
}

export default Layout
