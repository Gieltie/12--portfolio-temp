import './index.scss'
import imageGael from '../../assets/gael2.webp'

export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Developer based in Antibes, France</p>
      
      <div className="about-me__body">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quod accusamus aut, dignissimos modi reiciendis perferendis veritatis voluptatum sunt molestiae? Modi tempora voluptates quae quod accusantium quas provident, numquam quaerat.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestias, similique harum ex, possimus amet, quisquam fugit neque quos natus corrupti laboriosam non accusantium sit quam architecto soluta accusamus! Inventore.</p>
      </div>
      
      <img src={imageGael} alt="Gael smiling" className="about-me__img" />
    </section>
  )
}