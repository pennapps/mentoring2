import './index.css';
import './Landing.css';
import Card from './Card.js';
import GuideCard from './GuideCard.js';
import GuideTable from './GuideTable.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

const welcomeContent = (
  <p>
    We think hackathons should be about learning and meeting new people, so
    we’re here to make it happen! Being new to hacking can be a scary
    experience, but never fear... PennApps is here to help you along the way! In
    this guide, you can find information on the mentoring options we offer at
    PennApps, the workshops you can attend to learn about new topics, and the
    beginner guides for various languages and tools to begin your journey as a
    hacker. We hope that this can help get you started as you navigate your way
    through hackathons. Best of luck!
  </p>
);
const mentoringContent = (
  <div>
    <p>
      Not sure where to start? Need help brainstorming? Stuck on a bug? You can
      contact our wonderful mentors through the following methods:
    </p>
    <ol>
      <li>
        Mentor meet-up at{' '}
        <a href="https://gather.town/app/j4MldlKyCZqjCQy6/PennAppsXXII">
          gather.town
        </a>{' '}
        on Friday 9/10 from 7pm - 8pm ET (the space will open to hackers when
        the hackathon starts)
      </li>
      <li>
        <a href="https://piazza.com/class/ksqyt958jg5do">Piazza</a> - post your
        questions and we have mentors online 24/7 to answer them
      </li>
      <li>
        1:1 video calls through{' '}
        <a href="https://gather.town/app/j4MldlKyCZqjCQy6/PennAppsXXII">
          gather.town
        </a>
      </li>
    </ol>
  </div>
);

const editorsContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.    </p>
  </div>
)

const webdevContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.
    </p>
  </div>
)

const gitContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.    </p>
  </div>
)

const javaContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.
    </p>
  </div>
)

const pythonContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.    </p>
  </div>
)

const androidContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.
    </p>
  </div>
)

const iosContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.    </p>
  </div>
)

const devtoolsContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.
    </p>
  </div>
)

const nodeContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.    </p>
  </div>
)

const jqueryContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft Word. Learn more about this here! Wow click the link to go to a full guide on what we recommend.
    </p>
  </div>
)

const guideContent = (
  <div>
    <div className="GuideTable-row">
      <GuideCard link="/text-editors" header="Text Editors" img="/platy_bg/editors.png" content={editorsContent} />
      <GuideCard link="/web-design" header="Web Design" img="/platy_bg/webdev.png" content={webdevContent} />
    </div>
    <div className="GuideTable-row">
      <GuideCard link="/git&github" header="Git & Github" img="/platy_bg/git.png" content={gitContent} />
      <GuideCard link="/java&oop" header="Java & OOP" img="/platy_bg/java.png" content={javaContent} />
    </div>
    <div className="GuideTable-row">
      <GuideCard link="/python" header="Python" img="/platy_bg/python.png" content={pythonContent} />
      <GuideCard link="/android" header="Android" img="/platy_bg/android.png" content={androidContent} />
    </div>
    <div className="GuideTable-row">
      <GuideCard link="/ios" header="iOS" img="/platy_bg/ios.png" content={iosContent} />
      <GuideCard link="/chrome-devtools" header="Chrome DevTools" img="/platy_bg/devtools.png" content={devtoolsContent} />
    </div>
    <div className="GuideTable-row">
      <GuideCard link="/nodejs" header="Node.js" img="/platy_bg/node.png" content={nodeContent} />
      <GuideCard link="/jquery" header="JQuery" img="/platy_bg/jquery.png" content={jqueryContent} />
    </div>
  </div>
)


function Landing() {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <img src="/landing-page.png" className="Landing-head-img" />
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
            <GuideTable content={guideContent} />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
