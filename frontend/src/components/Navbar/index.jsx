import { Squash as Hamburger } from "hamburger-react";
import logo from "../../assets/logo-gael.svg"

import './index.scss'
import { useState } from "react";

export default function Nav(){
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <header className={`${showLinks ? "nav-open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* <button className="nav-toggle" aria-label="toggle navigation" onClick={handleShowLinks}>
        <span className="hamburger"></span>
      </button> */}
      <div className="nav-toggle" aria-label="toggle navigation" onClick={handleShowLinks}>
        <Hamburger color={`var(--color-second)`}/>
      </div>
      <nav className="nav">


        {/* <div  className="dark__mode">
          <input type="checkbox" className="checkbox" id="checkbox">
          <label for="checkbox" className="checkbox-label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>
        </div> */}


        <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#services" className="nav__link">My Service</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
          <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
        </ul>
      </nav>
    </header>
  ) 
} 