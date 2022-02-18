import React from "react";
import './styles.scss'

const Header = (prop) => {
  return (
    <>
      <header>
        <nav>
         {prop.children}
        </nav>
      </header>
    </>
  )
}

export default Header