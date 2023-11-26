import { Link, Navigate, useParams } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
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
      <section className="project-page">
        {/* <h1 className="project-page__title">
          <strong>{currentItem.title}</strong>
        </h1> */}
        <p className="project-page__subtitle">
          {currentItem.organisme}
        </p>
        <img src={currentItem.image} alt={currentItem.title} className="project-page__image" />
      </section>

      <div className="portfolio__item--individual">
        <p>{currentItem.desc}</p>
          <img src={currentItem.screen} alt="" className="portfolio__item--img" />
          {/* <div className="card__second--tags">
          {tags.map((tag, id) => (<p key={id}>{tag}</p>))}
        </div> */}
        <Link className='portfolio__links' to={currentItem.github}><FaGithub /></Link>
        <p>{currentItem.descTwo}</p>
      </div>
    </>
  )
}

export { Project }