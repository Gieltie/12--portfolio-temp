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
        <div className="portfolio-item__header">
          <img src={currentItem.image} alt={currentItem.title + " logo"} className="portfolio-item__header--image" />
        </div>
        <p className='portfolio-item__text'>{currentItem.description}</p>
        <img src={currentItem.screen} alt={currentItem.title + " screen shot"} className="portfolio-item__image" />

        <div className="portfolio-item__tags">
          <h3 className="portfolio-item__tags--title">Technologies used:</h3>
          <div className="portfolio-item__tags--tag">
            {currentItem.tags.map((tag, id) => (<p key={id}>{tag}</p>))}
          </div>
        </div>

        <div className="portfolio-item__links">
          <h3 className="portfolio-item__links--title">Site links: </h3>
          <div className="portfolio-item__links--link">
            {currentItem.siteLink ? <Link to={currentItem.siteLink}><FaLink /></Link> : ""}
            <Link to={currentItem.github}><FaGithub /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export { Project }