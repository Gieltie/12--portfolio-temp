import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPlusCircle, FaGithub, FaLink } from 'react-icons/fa';
import './index.scss';

const Card = ({ screenShot, title,  id, cardDescription, github, siteLink }) => {
  const { t } = useTranslation("global")
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="card">
      <div className="card__first">
        <img className="card__first--image" src={screenShot} alt={title} />
      </div>
      <div className="card__second">
        <h3 className="card__second--title">{title}</h3>
        <p className="card__second--description">{t(cardDescription)}</p>
        <span className="card__second--links">
          {siteLink ? 
          <Link 
            to={siteLink} 
            target="_blank">
            <FaLink />
          </Link> : ""}
          <Link 
            to={github} 
            target="_blank">
            <FaGithub />
          </Link>
          <Link 
            to={`./project/${id}`}   
            onClick={scrollToTop}>
            <FaPlusCircle />
          </Link>
        </span>
      </div>
    </div>

)
}
export default Card;
