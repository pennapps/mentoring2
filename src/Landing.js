import './index.css';
import './Landing.css';
import Card from './Card.js';
import Footer from './Footer.js';

const welcomeContent = <><p>Hackathons should be about learning new things and meeting new people, and we’re here to make it happen! PennApps is here to help you along the way, whether you're a seasoned developer or just starting out on your hacker journey!</p> <p>On this website, you can find information on the mentoring options we offer at PennApps, the workshops you can attend to learn about new topics, and starter guides for various languages and tools to kickstart your journey as a hacker. We hope that this gets you started as you navigate your way through PennApps and future hackathons. Best of luck!</p></>
const mentoringContent = <div>
  <p>Not sure where to start? Need help brainstorming? Stuck on a bug? You can contact our wonderful mentors through the following methods:</p>
  <ol>
    <li>Mentor meet-up at <a href='https://gather.town/app/j4MldlKyCZqjCQy6/PennAppsXXII'>gather.town</a> on Friday 9/10 from 7pm - 8pm ET (the space will open to hackers when the hackathon starts)</li>
    <li><a href='https://piazza.com/class/ksqyt958jg5do'>Piazza</a> - post your questions and we have mentors online 24/7 to answer them</li>
    <li>1:1 video calls through <a href='https://gather.town/app/j4MldlKyCZqjCQy6/PennAppsXXII'>gather.town</a></li>
  </ol>
</div>;

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
        <div className="Landing-container">
          <section className="Landing-section">
            <h1>Welcome</h1>
            <Card content={welcomeContent} />
          </section>
          <section className="Landing-section">
            <h1>Mentoring Options</h1>
            <Card content={mentoringContent} />
          </section>
          <section className="Landing-section">
            <h1>Beginner Guides</h1>
            {/*GUIDE TABLE GOES HERE*/}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
