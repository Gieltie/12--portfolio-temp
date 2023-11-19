import { Link } from 'react-router-dom';
import './index.scss'

const Card = (title, picture) => {

  return (

    <Link to="./kasa" className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <h3>{title}</h3>
        </div>
        <div className="flip-card__back">
          <img src={picture} alt="" />
        </div>
      </div>
    </Link>

)
}
export default Card;
