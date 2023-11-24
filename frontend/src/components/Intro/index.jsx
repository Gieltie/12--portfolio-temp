import './index.scss'
import imageGael from '../../assets/gael.webp'

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="intro__title">
          Hello, I am Gaël<strong>Front-end developer</strong>
      </h1>
      <p className="intro__subtitle">I code beautifully simple things, and I love what I do.</p>
      <img className="intro__image" src={imageGael} alt="A picture of gael smiling"/>
    </section>
  )
}