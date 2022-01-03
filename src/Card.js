import './index.css';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">{props.content}</div>
  );
}

export default Card;
