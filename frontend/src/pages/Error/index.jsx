import { NavLink } from "react-router-dom"
import './index.scss'

function Error() {
  return (
    <section className="error">
      <h1 className="section__title section__title--error">404</h1>
      <p className="section__subtitle section__subtitle--error">The request path dont exist.</p>
      <NavLink to="/" className="error__link">
        Ga back to home page
      </NavLink>
    </section>
  )
}

export { Error }