import React from "react"
import '../styles/index.css';
import '../styles/GuideCard.css';
import { Link } from "gatsby";

function GuideCard(props) {
    const imgSrc = require(`../images${props.img}`).default
    return (
        <Link to={props.link} style={{ textDecoration: 'none' }} className="GuideCard">
            <div className="GuideCard-container">
              <img src={imgSrc} className="GuideCard-image" />
            </div>
            <div className="GuideCard-container">
              <h3>{props.header}</h3>
              {props.content}
            </div>
          </Link>
    );
  }
  
  export default GuideCard;
  