import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

import DarkModeButton from "../DarkModeButton";
//import logo from "../../assets/logo-gael.svg"
import './index.scss'

export default function Nav(){
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <header className={`header ${showLinks ? "nav-open" : ""}`}>
      <div className="logo">
        {/* <img src={logo} alt="" /> */}
      </div>
      <button 
        className="nav-toggle"
        aria-label="toggle navigation" 
        onClick={handleShowLinks}
      >
        {/* <span className="hamburger"></span> */}
        <Hamburger color="#64a093"/>
      </button>
      <div className="nav-toggle" aria-label="toggle navigation" onClick={handleShowLinks}>
      </div>
      <nav className="nav">
      <DarkModeButton />
        <ul className="nav__list">
          <li className="nav__list--item"><Link to="/" className="nav__list--link">Home</Link></li>
          <li className="nav__list--item"><Link to="/services" className="nav__list--link">My Service</Link></li>
          <li className="nav__list--item"><Link to="/about" className="nav__list--link">About Me</Link></li>
          <li className="nav__list--item"><Link to="/work" className="nav__list--link">My Work</Link></li>
        </ul>
      </nav>
    </header>
  ) 
} 