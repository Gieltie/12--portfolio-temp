import Card from '../Card'
import './index.scss'
import projects from '../../datas/projects.json'

const cards = projects.map(({ title, cardDescription, github, siteLink, screen, id }, index) => (
  <Card
    screen={screen}
    title={title}
    key={title + index}
    id={id}
    cardDescription={cardDescription}
    github={github}
    siteLink={siteLink}
  />
));

export default function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="my-work__title">My Work</h2>
      <p className="my-work__subtitle">A selection of my range of work</p>
      <div className="my-work__projects">
        {cards}
      </div>
    </section>
  )
}
