import './index.scss'
import gael from '../../assets/gael.webp'

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
          Hi, I am <strong>Gaël Hofman</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">Front-end developer</p>
      <img src={gael} alt="A picture of gael smiling" className="intro__img" />
    </section>
  )
}