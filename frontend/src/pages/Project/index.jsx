import { Link, Navigate, useParams } from 'react-router-dom';
import data from '../../datas/projects.json';
import './index.scss';

import { SiRedux, SiCss3, SiReact, SiHtml5, SiJavascript, SiNodedotjs, SiSass, SiGithub } from "react-icons/si";

function Project() {
  const { id } = useParams();
  const currentItem = data.find((item) => item.id === id);
  const iconsList = [
    SiRedux, SiCss3, SiReact, SiHtml5, SiJavascript, SiNodedotjs, SiSass,
  ];

  if (!currentItem) {
    return <Navigate to="/error" />;
  }

  const { title, organisme, image, desc, screen, techno, github, descTwo } = currentItem;

  return (
    <>
      <section className="intro portfolio">
        <h1 className="section__title section__title--project">
          <strong>{title}</strong>
        </h1>
        <p className="section__subtitle section__subtitle--project">
          {organisme}
        </p>
        <img src={image} alt="" className="project__img" />
      </section>

      <div className="portfolio__item--individual">
        <p>{desc}</p>
        <img src={screen} alt="" className="portfolio__item--img" />
        <div>
          <ul className="techno">
            {techno.map((item, index) => {
              const CustomTag = iconsList.find((icon) => icon.name === item);
              if (CustomTag) {
                return <li className="techno__item" key={index}><CustomTag /></li>;
              } else {
                return <li className="techno__item" key={index}>{item}</li>;
              }
            })}
          </ul>
        </div>

        <Link className="portfolio__links" to={github}>
          <SiGithub />
        </Link>
        <p>{descTwo}</p>
      </div>
    </>
  );
}

export { Project };
