import * as React from "react";
import '../styles/index.css';
import '../styles/GuideCard.css';
import { Link } from "gatsby";

function GuideCard(props) {
    return (
      <div className="GuideCard">
          <div className="GuideCard-container">
            <img src={"../images" + props.img} className="GuideCard-image" />
          </div>
          <div className="GuideCard-container">
            <h3>
              <Link to={props.link} style={{ textDecoration: 'none' }}>{props.header}</Link>
            </h3>
            {props.content}
          </div>
      </div>
    );
  }
  
  export default GuideCard;
  