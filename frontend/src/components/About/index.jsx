import './index.scss'
import imageGael from '../../assets/gael2.webp'

export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="about-me__title">About Me</h2>
      <p className="about-me__subtitle">I'm based in Antibes, France</p>
      
      <div className="about-me__body">
          <p>Back in 2022, I decided to try my hand at creating a website and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today.</p>
          <p>I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
          <p>When I’m not at the computer, I’m usually cycling, scuba diving or hanging out with my wife and my two children</p>
      </div>
      
      <img src={imageGael} alt="Gael smiling" className="about-me__img" />
    </section>
  )
}