import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

import './index.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="mailto:gieltie@outlook.fr" className="footer__link">
        gieltie@outlook.fr
      </Link>
      <ul className="social-list">
        <li className="social-list__item">
          <Link
            to="https://www.linkedin.com/in/gaël-hofman-bb4723243/"
            className="social-list__link"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className="social-list__item">
          <Link
            to="https://www.facebook.com/gael.hofman/"
            className="social-list__link"
          >
            <FaFacebook />
          </Link>
        </li>
        <li className="social-list__item">
          <Link
            to="https://github.com/Gieltie/hofman.github.io"
            className="social-list__link"
          >
            <FaGithub />
          </Link>
        </li>
      </ul>
    </footer>
  )
}