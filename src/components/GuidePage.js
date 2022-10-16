import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Link} from "gatsby";
import '../styles/GuidePage.css'
import { Helmet } from 'react-helmet';

const GuidePage = ({pageContext}) => {
  // const img = <img src={props.img} className="GuidePage-image" alt="platy-bg" />;
  const { text, name } = pageContext
  return (
    <div>
      <Helmet>
        <title>PennApps Mentoring - {name}</title>
      </Helmet>
      <nav className="guide-nav">
        <h3><Link to="/" style={{ textDecoration: 'none' }}>PennApps Mentoring</Link></h3>
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

// export const Head = () => <title>PennApps Mentoring</title>