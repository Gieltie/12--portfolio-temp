import { Link } from 'react-router-dom';
import { FaPlusCircle, FaGithub, FaLink } from 'react-icons/fa';
import './index.scss';

const Card = ({ screen, title,  id, cardDescription, github, siteLink }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (

    <div className="card">
      <div className="card__first">
        <img className="card__first--image" src={screen} alt={title} />
      </div>
      <div className="card__second">
        <h3 className="card__second--title">{title}</h3>
        <p className="card__second--description">{cardDescription}</p>
        <span className="card__second--links">
          {siteLink ? <Link to={siteLink} >
            <FaLink />
          </Link> : ""}
          <Link to={github} >
            <FaGithub />
          </Link>
          <Link to={`./project/${id}`}  onClick={scrollToTop}>
            <FaPlusCircle />
          </Link>
        </span>
      </div>
    </div>

)
}
export default Card;
