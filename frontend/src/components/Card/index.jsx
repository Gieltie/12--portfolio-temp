import { Link } from 'react-router-dom';
import './index.scss';

const Card = ({ title, description, id }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (

    <Link to={`./project/${id}`} className="flip-card" onClick={scrollToTop}>
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <h3>{title}</h3>
        </div>
        <div className="flip-card__back">
          <p>{description}</p>
        </div>
      </div>
    </Link>

)
}
export default Card;
