import { useTranslation } from 'react-i18next'
import imageGael from '../../assets/gael.webp'
import './index.scss'

export default function Intro() {
  const { t } = useTranslation("global")
  return (
    <section className="intro" id="home">
      <h1 className="intro__title">
          
          {t("intro.title")}<strong>Front-end dev</strong>
      </h1>
      <p className="intro__subtitle">{t("intro.subtitle")}</p>
      <img className="intro__image" src={imageGael} alt="A picture of gael smiling"/>
    </section>
  )
}