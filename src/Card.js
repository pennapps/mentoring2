import './styles/index.css';
import './styles/Card.css';

function Card(props) {
  return (
    <div className="Card">{props.content}</div>
  );
}

export default Card;
