import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./styles/reviews.scss"

const ReviewsPage = () => {
  return (
    <Layout>
      <Seo title="Отзывы | Ведущий Алексей Горбунов. +7 985 644 64 89" />
      <div className="reviews-page">
        <h1>Отзывы:</h1>
        <p>Страница в разработке</p>
      </div>
    </Layout>
  )
}

export default ReviewsPage
