import Card from '../Card'
import './index.scss'
import projects from '../../datas/projects.json'

const cards = projects.map(({ title, description, id }, index) => (
  <Card
    key={title + index}
    title={title}
    description={description}
    id={id}
  />
));

export default function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

      <div className="portfolio">
        {cards}
      </div>
    </section>
  )
}
