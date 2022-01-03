import './index.css';
import './Landing.css';

function Landing() {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <img src='/landing-page.png' className="Landing-head-img" />
      </header>
      <nav className="Landing-nav">
        <h3>PennApps Mentoring</h3>
      </nav>
      <div className="Landing-body">
        <div className="Landing-container"></div>
      </div>
    </div>
  );
}

export default Landing;
