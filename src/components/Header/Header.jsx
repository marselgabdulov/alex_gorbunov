import * as React from "react"
import { Link } from "gatsby"
import Burger from "../icons/Burger"
import "./Header.scss"
import { MenuContext } from "../../MenuContext"
import { links } from "../../links"

const Header = () => {
  const [value, setValue] = React.useContext(MenuContext)
  function handleMenu() {
    value === "closed" ? setValue("opened") : setValue("closed")
  }
  return (
    <header>
      <nav>
        <div
          className="logo"
          data-aos="fade"
          data-aos-delay="500"
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
          {links.map((link, index) => (
            <Link key={index} to={link.to} activeStyle={{ color: "#f77905" }}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className="menu__button"
          onClick={handleMenu}
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
