import { useTranslation } from 'react-i18next'
import imageGael from '../../assets/gael2.webp'
import './index.scss'

export default function About() {
  const { t } = useTranslation("global")

  return (
    <section className="about-me" id="about">
      <h2 className="about-me__title">{t("about.title")}</h2>
      <p className="about-me__subtitle">{t("about.subtitle")}</p>
      
      <div className="about-me__body">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
      </div>
      
      <img src={imageGael} alt="Gael smiling" className="about-me__img" />
    </section>
  )
}