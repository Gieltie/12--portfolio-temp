import Card from '../Card'
import { useTranslation } from 'react-i18next';
import projects from '../../datas/projects.json'
import './index.scss'

console.log(projects)
export default function Work() {
  const { t } = useTranslation("global")
  
/*   const cards = projects.map(({ title, cardDescription, github, siteLink, screenShot, id }, index) => (
    <Card
      screenShot={screenShot}
      title={title}
      key={title + index}
      id={id}
      cardDescription={cardDescription}
      github={github}
      siteLink={siteLink}
    />
  )); */
  
  return (
    <section className="my-work" id="work">
      <h2 className="my-work__title">{t("work.title")}</h2>
      <p className="my-work__subtitle">{t("work.subtitle")}</p>
      <div className="my-work__projects">
      {projects.map((project) => {
        return <Card 
          screenShot={project.screenShot}
          title={project.title}
          key={project.title}
          id={project.id}
          cardDescription={project.cardDescription}
          github={project.github}
          siteLink={project.siteLink}
        />
        })
      }
        {/* {cards} */}
      </div>
    </section>
  )
}
