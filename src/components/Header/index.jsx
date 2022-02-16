import React from "react";

const Header = (prop) => {
  return (
    <>
      <header>
        {prop.children}
      </header>
    </>
  )
}

export default Header