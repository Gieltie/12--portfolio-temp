import { Link } from 'react-router-dom';
import './index.scss';
import test from '../../assets/webpage/kasa-web.webp'

const Card = ({ title, cardDescription, tags, screen, id }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (

    <Link to={`./project/${id}`} className="card" onClick={scrollToTop}>
      <div className="card__first">
        <img className="card__first--image" src={screen} alt={title} />
      </div>
      <div className="card__second">
        <h3 className="card__second--title">{title}</h3>
        <p className="card__second--description">{cardDescription}</p>
        <div className="card__second--tags">
          {tags.map((tag, id) => (<p key={id}>{tag}</p>))}
        </div>
      </div>
    </Link>

)
}
export default Card;
