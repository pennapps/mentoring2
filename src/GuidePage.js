import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './GuidePage.css';

const GuidePage = (props) => {
  const path =
    'https://raw.githubusercontent.com/pennapps/guides/main/' +
    props.guide +
    '.md';
  const [pageState, loadFile] = useState('');
  useEffect(() => {
    fetch(path).then((file) =>
      file.text().then((text) => loadFile(text.slice(props.guide.length + 2))),
    );
  }, [path, props.guide]);
  return (
    <div>
      <nav className="guide-nav">
        <h3>PennApps Mentoring</h3>
      </nav>
      <div className="GuidePage-container">
        <div className="guide-info">
          <h1 className="guide-title">{props.guide}</h1>
          <div className="guide-content">
            <div className="guide-markdown">
              <ReactMarkdown children={pageState}></ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="guide-img">
          <img src={props.img} className="GuidePage-image" alt="platy-bg" />
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
