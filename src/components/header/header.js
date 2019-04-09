import React from "react"
import css from "./header.module.css"
import logo from "../../images/logo.svg"

const Header = () => (
  <header className={css.header}>
    <img src={logo} alt="Logo" className={css.logo} />
    <button className={css.button}>Try it free!</button>
  </header>
)

export default Header
