import * as React from "react"
import AOS from "aos"
import { useStaticQuery, graphql } from "gatsby"
import { MenuContext } from "../MenuContext"
import Menu from "./Menu/Menu"
import { Helmet } from "react-helmet"
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
    <>
      <Helmet>
        <meta
          name="facebook-domain-verification"
          content="ocyaz6ny0c441yaalwjv6fv07kgswh"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=3075912476015954&ev=PageView&noscript=1"
          />`,
          }}
        ></script>
      </Helmet>

      <MenuContext.Provider value={[value, setValue]}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Menu />
        <main>{children}</main>
      </MenuContext.Provider>
    </>
  )
}

export default Layout
