import { useState } from "react";
import { Link } from "react-router-dom";

import DarkModeButton from "../DarkModeButton";
import logo from "../../assets/logo-gael.svg"
import './index.scss'

export default function Nav(){
  const [showLinks, setShowLinks] = useState(false)
  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <header className={`nav ${showLinks ? "nav-open" : ""}`}>
      <div>
        <Link to="/#home" ><img className="nav__logo" src={logo} alt="" /></Link>
      </div>
      <button 
        className="nav__toggle"
        aria-label="toggle navigation" 
        onClick={handleShowLinks}
      >
        <span className="nav__toggle--hamburger"></span>
      </button>
      <DarkModeButton />
      
      <nav className="nav__menu">
        <ul className="nav__menu--list">
          <li className="nav__menu--item"><Link to="/#home" className="nav__menu--link" onClick={handleShowLinks}>Home</Link></li>
          <li className="nav__menu--item"><Link to="/#skills" className="nav__menu--link" onClick={handleShowLinks}>Skills</Link></li>
          <li className="nav__menu--item"><Link to="/#about" className="nav__menu--link" onClick={handleShowLinks}>About Me</Link></li>
          <li className="nav__menu--item"><Link to="/#work" className="nav__menu--link" onClick={handleShowLinks}>My Work</Link></li>
        </ul>
      </nav>
    </header>
  ) 
} 