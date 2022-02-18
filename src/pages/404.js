import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import "./styles/not-found.scss"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Такой страницы нет" />
    <div className="not-found-page">
      <h1>404: Такой страницы нет</h1>
      <Link to="/" title="вернуться на главную">
        Вернуться на главную
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
