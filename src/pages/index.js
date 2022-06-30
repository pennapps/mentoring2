import * as React from "react";
import '../styles/index.css';
import '../styles/Landing.css';
import Card from '../components/Card.js';
import GuideCard from '../components/GuideCard.js';
import GuideTable from '../components/GuideTable.js';
import Footer from '../components/Footer.js';
import landing_bg from "../images/landing-page.png";

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
        Message the #ask-an-organizer channel on the HealthHacks discord!
      </li>
    </ol>
  </div>
);

const editorsContent = (
  <div>
    <p>
      What is a code editor? Well, it’s not a word processor like Microsoft
      Word. Learn more about this here!
    </p>
  </div>
);

const webdevContent = (
  <div>
    <p>
      HTML, CSS, and JavaScript form the basic building blocks of web development.
      Learn more here!
    </p>
  </div>
);

const gitContent = (
  <div>
    <p>
      How do developers keep track of their coding progress throughout a project?
      Version control! Learn more about git here.
    </p>
  </div>
);

const javaContent = (
  <div>
    <p>
      Java is an important object-oriented programming language, and you
      can use it for a variety of purposes. Learn more here!
    </p>
  </div>
);

const pythonContent = (
  <div>
    <p>
      Python is a versatile language that is easy to learn! Click here to 
      learn more.
    </p>
  </div>
);

const androidContent = (
  <div>
    <p>
      Android is the most widely used mobile operating system in the world. Click
      here to learn more about it!
    </p>
  </div>
);

const iosContent = (
  <div>
    <p>
      iOS is the next most widely used mobile operating system in the world after Android.
      Learn more here!
    </p>
  </div>
);

const devtoolsContent = (
  <div>
    <p>
      Ever wondered how to see behind the rendering of a webpage? Learn more
      about Chrome DevTools by clicking here! 
    </p>
  </div>
);

const nodeContent = (
  <div>
    <p>
      An important piece of any complete web application is a server backend, and
      Node.js allows developers to write server-side code right in JavaScript! Learn
      more here.
    </p>
  </div>
);

const jqueryContent = (
  <div>
    <p>
    JQuery is a helpful Javascript library that makes possible to bring webpages to 
    life without going insane. Click to learn more!
    </p>
  </div>
);

const guideContent = (
  <div>
    <div className="GuideTable-row">
      <GuideCard
        link="/text-editors"
        header="Text Editors"
        img="/platy_bg/editors.png"
        content={editorsContent}
      />
      <GuideCard
        link="/web-design"
        header="Web Design"
        img="/platy_bg/webdev.png"
        content={webdevContent}
      />
    </div>
    <div className="GuideTable-row">
      <GuideCard
        link="/git&github"
        header="Git & Github"
        img="/platy_bg/git.png"
        content={gitContent}
      />
      <GuideCard
        link="/java&oop"
        header="Java & OOP"
        img="/platy_bg/java.png"
        content={javaContent}
      />
    </div>
    <div className="GuideTable-row">
      <GuideCard
        link="/python"
        header="Python"
        img="/platy_bg/python.png"
        content={pythonContent}
      />
      <GuideCard
        link="/android"
        header="Android"
        img="/platy_bg/android.png"
        content={androidContent}
      />
    </div>
    <div className="GuideTable-row">
      <GuideCard
        link="/ios"
        header="iOS"
        img="/platy_bg/ios.png"
        content={iosContent}
      />
      <GuideCard
        link="/chrome-devtools"
        header="Chrome DevTools"
        img="/platy_bg/devtools.png"
        content={devtoolsContent}
      />
    </div>
    <div className="GuideTable-row">
      <GuideCard
        link="/nodejs"
        header="Node.js"
        img="/platy_bg/node.png"
        content={nodeContent}
      />
      <GuideCard
        link="/jquery"
        header="JQuery"
        img="/platy_bg/jquery.png"
        content={jqueryContent}
      />
    </div>
    <div className="GuideTable-row"></div>
  </div>
);

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="Landing">
        <header className="Landing-header">
          <img
            src={landing_bg}
            className="Landing-head-img"
            alt="landing"
          />
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
    </main>
  )
}

export default IndexPage
