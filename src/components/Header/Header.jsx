import * as React from "react"
import { Link } from "gatsby"
import BurgerIcon from "../icons/BurgerIcon"
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
        <div className="logo">
          <Link to="/" title="вернуться на главную">
            АГ
          </Link>
        </div>
        <div className="menu">
          {links.map((link, index) => (
            <Link key={index} to={link.to} activeStyle={{ color: "#f77905" }}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="menu__button">
          <BurgerIcon />
        </div>
        <div className="social">
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
        <div className="developer">
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
