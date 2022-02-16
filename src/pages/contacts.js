import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contract from "../docs/contract.pdf"
import "./styles/contacts.scss"

function ContactsPage() {
  return (
    <Layout>
      <Seo title="Контакты | Ведущий Алексей Горбунов. +7 985 644 64 89" />
      <div className="page-wrapper">
        <div
          className="contacts"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <h1>Контакты:</h1>

          <a href="tel:+79856446489">+7 985 644 64 89</a>

          <a href="mailto:gorbunov_show@mail.ru">gorbunov_show@mail.ru</a>

          <a
            href="https://www.facebook.com/alex.gorbunov.969"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/gorbunovshowmoscow/?igshid=1mqqjkwnngmk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://vk.com/alexgrantshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vk
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default ContactsPage
