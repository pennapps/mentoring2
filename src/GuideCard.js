import './styles/index.css';
import './styles/GuideCard.css';
import { Link } from 'react-router-dom';

function GuideCard(props) {
    return (
        <Link to={props.link} style={{ textDecoration: 'none' }} className="GuideCard">
            <div className="GuideCard-container">
              <img src={props.img} className="GuideCard-image" />
            </div>
            <div className="GuideCard-container">
              <h3>{props.header}</h3>
              {props.content}
            </div>
          </Link>
    );
  }
  
  export default GuideCard;
  