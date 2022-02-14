import * as React from "react"
import { Link } from "gatsby"
import Burger from "../icons/Burger"
import "./Header.scss"

const Header = () => {
  function handleOpen() {
    console.log("handle open")
  }
  return (
    <header>
      <nav>
        <div
          className="logo"
          data-aos="fade"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <Link to="/" title="вернуться на главную">
            АГ
          </Link>
        </div>
        <div
          className="menu"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <Link to="/" activeStyle={{ color: "#f77905" }}>
            Главная
          </Link>
          <Link to="/about" activeStyle={{ color: "#f77905" }}>
            Обо мне
          </Link>
          <Link to="/cooperation" activeStyle={{ color: "#f77905" }}>
            Договор
          </Link>
          <Link to="/photos" activeStyle={{ color: "#f77905" }}>
            Фото
          </Link>
          <Link to="/videos" activeStyle={{ color: "#f77905" }}>
            Видео
          </Link>

          <Link to="/reviews" activeStyle={{ color: "#f77905" }}>
            Отзывы
          </Link>
          <Link to="/contacts" activeStyle={{ color: "#f77905" }}>
            Контакты
          </Link>
        </div>
        <div
          className="menu__button"
          onClick={handleOpen}
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <Burger />
        </div>
        <div
          className="social"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1200"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
        >
          <a
            className="social__link"
            href="https://www.facebook.com/alex.gorbunov.969"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="social__link"
            href="https://www.instagram.com/gorbunovshowmoscow/?igshid=1mqqjkwnngmk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="social__link"
            href="https://vk.com/alexgrantshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vk
          </a>
        </div>
        <div
          className="developer"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1200"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
        >
          Разработан{" "}
          <a
            href="https://marsdev.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MG
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
