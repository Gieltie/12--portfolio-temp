import { Link, Navigate, useParams } from 'react-router-dom'
import data from '../../datas/projects.json'
import './index.scss'

function Project() {
  const { id } = useParams()
  const currentItem = data.find((item) => item.id === id)

  if (!currentItem){
    return <Navigate to="/error"/>
  }

  return (
    <>
      <section className="intro">
        <h1 className="section__title section__title--project">
          <strong>{currentItem.title}</strong>
        </h1>
        <p className="section__subtitle section__subtitle--project">{currentItem.organisme}</p>
        <img src={currentItem.image} alt="" className="project__img" />
      </section>


      <div className="portfolio__item--individual">
        <p>{currentItem.desc}</p>
          <img src={currentItem.screen} alt="" className="portfolio__item--img" />

        <div>
          <ul className="techno">
            {currentItem.techno.map((tag, index) => (
              <li className="techno__item" key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <Link className='portfolio__links' to={currentItem.github}>Github</Link>
        <p>{currentItem.descTwo}</p>
      </div>
    </>
  )
}

export { Project }