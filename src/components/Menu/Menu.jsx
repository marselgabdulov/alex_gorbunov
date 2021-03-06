import * as React from "react"
import { Link } from "gatsby"
import CrossIcon from "../icons/CrossIcon"
import { links } from "../../links"
import "./Menu.scss"

const Menu = ({ menuState, setMenuState }) => {
  const handleMenu = () => {
    menuState === "closed" ? setMenuState("opened") : setMenuState("closed")
  }

  return (
    <>
      <div className={menuState === "opened" ? "menu--opened" : "menu--closed"}>
        <button className="menu__close-button" onClick={handleMenu}>
          <CrossIcon />
        </button>

        <div className="menu__list">
          {links.map((item, index) => (
            <div className="menu__item" key={index}>
              <Link
                to={item.to}
                activeStyle={{ color: "#f77905" }}
                onClick={handleMenu}
              >
                {item.name}
              </Link>
            </div>
          ))}

          <div className="menu__phone">
            <a href="tel:+79856446489">+7 985 644 64 89</a>
          </div>

          <div className="menu__email">
            <a href="mailto:gorbunov_show@mail.ru">gorbunov_show@mail.ru</a>
          </div>

          <div className="menu__social-links">
            <a
              href="https://vk.com/alexgrantshow"
              title="в контакте"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vk
            </a>
            <a
              href="https://www.facebook.com/alex.gorbunov.969"
              title="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fb
            </a>
            <a
              href="https://www.instagram.com/gorbunovshowmoscow/?igshid=1mqqjkwnngmk"
              title="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inst
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
