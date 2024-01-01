import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

import './index.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="mailto:gieltie@outlook.fr" className="footer__link">
        gael.hofman@outlook.fr
      </Link>
      <ul className="social-list">
        <li className="social-list__item">
          <Link
            to="https://www.linkedin.com/in/gaël-hofman-bb4723243/"
            className="social-list__link"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className="social-list__item">
          <Link
            to="https://www.facebook.com/gael.hofman/"
            className="social-list__link"
            target="_blank"
          >
            <FaFacebook />
          </Link>
        </li>
        <li className="social-list__item">
          <Link
            to="https://github.com/gieltie"
            className="social-list__link"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </li>
      </ul>
    </footer>
  )
}