import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Link} from "gatsby";
import '../styles/GuidePage.css'
import backIcon from '../images/icons/icon_back.svg'

const GuidePage = ({pageContext}) => {
  // const img = <img src={props.img} className="GuidePage-image" alt="platy-bg" />;
  const { text } = pageContext
  return (
    <div>
      <nav className="guide-nav">
        <h3>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="row">
              <img src={backIcon} alt="Back Icon" width={28} />
              <p>Back to Home</p>
            </div>
          </Link>
        </h3>
      </nav>
      <div className="GuidePage-container">
        <div className="guide-info">
          <div className="guide-content">
            <div className="guide-markdown">
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="guide-img">
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
