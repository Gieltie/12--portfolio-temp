import Card from '../Card'
import { useTranslation } from 'react-i18next';
import projects from '../../datas/projects.json'
import './index.scss'

export default function Work() {
  const { t } = useTranslation("global")
  
  const cards = projects.map(({ title, cardDescription, github, siteLink, screenShot, id }, index) => (
    <Card
      screenShot={screenShot}
      title={title}
      key={title + index}
      id={id}
      cardDescription={t(cardDescription)}
      github={github}
      siteLink={siteLink}
    />
  ));

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
