import { Link, Navigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaGithub, FaLink } from "react-icons/fa"
import projects from "../../datas/projects.json"
import "./index.scss"

function Project() {
  const { t } = useTranslation("global")
  const { id } = useParams()
  const currentItem = projects.find((item) => item.id === id)
  const translatedClient = t(`cards.${id}.client`)
  const translatedPresentation = t(`cards.${id}.presentation`)
  const translatedMission = t(`cards.${id}.mission`)

  if (!currentItem){
    return <Navigate to="/error"/>
  }

  return (
    <section className="portfolio-item">
      <div className="portfolio-item__description">
        <img src={currentItem.logoImage} alt={currentItem.title + " logo"} className="portfolio-item__description--image" />
        <p className="portfolio-item__description--text"><strong>{t("portfolio.client")}</strong><br/>{translatedClient}</p>
        <p className="portfolio-item__description--text"><strong>{t("portfolio.presentation")}</strong><br/>{translatedPresentation}</p>
        <p className="portfolio-item__description--text"><strong>{t("portfolio.mission")}</strong><br/>{translatedMission}</p>
        <div className="portfolio-item__description--link">
          {currentItem.siteLink ? <Link to={currentItem.siteLink}><FaLink /></Link> : ""}
          <Link to={currentItem.github}><FaGithub /></Link>
        </div>
      </div>
      <div className="portfolio-item__tags">
        <h3 className="portfolio-item__tags--title">{t("portfolio.title")}</h3>
        <div className="portfolio-item__tags--tag">
          {currentItem.tags.map((tag, id) => (<p key={id}>{tag}</p>))}
        </div>
      </div>
      <img className="portfolio-item__screenShot" src={currentItem.screenShot} alt={currentItem.title} />
    </section>
  )
}

export { Project }