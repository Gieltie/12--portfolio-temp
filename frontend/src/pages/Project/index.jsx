import { Link, Navigate, useParams } from 'react-router-dom'
import { FaGithub, FaLink } from 'react-icons/fa'
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

      <section className="portfolio-item">
        <div className='portfolio-item__description'>
          <img src={currentItem.image} alt={currentItem.title + " logo"} className="portfolio-item__description--image" />
          <p className='portfolio-item__description--text'>{currentItem.description}</p>
          <div className="portfolio-item__description--link">
            {currentItem.siteLink ? <Link to={currentItem.siteLink}><FaLink /></Link> : ""}
            <Link to={currentItem.github}><FaGithub /></Link>
          </div>
        </div>
        <div className="portfolio-item__tags">
          <h3 className="portfolio-item__tags--title">Technologies used:</h3>
          <div className="portfolio-item__tags--tag">
            {currentItem.tags.map((tag, id) => (<p key={id}>{tag}</p>))}
          </div>
        </div>
      </section>
    </>
  )
}

export { Project }