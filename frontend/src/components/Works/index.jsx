import Card from '../Card'
import './index.scss'
import projects from '../../datas/projects.json'

const cards = projects.map(({ title, cardDescription, tags, screen, id }, index) => (
  <Card
    key={title + index}
    title={title}
    cardDescription={cardDescription}
    tags={tags}
    screen={screen}
    id={id}
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
