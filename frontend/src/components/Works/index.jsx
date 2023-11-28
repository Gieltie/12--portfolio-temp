import Card from '../Card'
import { useTranslation } from 'react-i18next';
import projects from '../../locales/en/global.json'
import './index.scss'

const cards = projects.card.map(({ title, cardDescription, github, siteLink, screenShot, id }, index) => (
  <Card
    screenShot={screenShot}
    title={title}
    key={title + index}
    id={id}
    cardDescription={cardDescription}
    github={github}
    siteLink={siteLink}
  />
));

export default function Work() {
  const { t } = useTranslation("global")

  return (
    <section className="my-work" id="work">
      <h2 className="my-work__title">{t("work.title")}</h2>
      <p className="my-work__subtitle">{t("work.subtitle")}</p>
      <div className="my-work__projects">
        {cards}
      </div>
    </section>
  )
}
