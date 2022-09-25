import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AndroidGuide from './guides/androidGuide';
import DevtoolsGuide from './guides/devtoolsGuide';
import EditorsGuide from './guides/editorsGuide';
import GitGuide from './guides/gitGuide';
import IosGuide from './guides/iosGuide';
import JavaGuide from './guides/javaGuide';
import JqueryGuide from './guides/jqueryGuide';
import NodeGuide from './guides/nodeGuide';
import PythonGuide from './guides/pythonGuide';
import WebdevGuide from './guides/webdevGuide';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/android" element={<AndroidGuide />} />
          <Route path="/chrome-devtools" element={<DevtoolsGuide />} />
          <Route path="/git&github" element={<GitGuide />} />
          <Route path="/ios" element={<IosGuide />} />
          <Route path="/java&oop" element={<JavaGuide />} />
          <Route path="/jquery" element={<JqueryGuide />} />
          <Route path="/nodejs" element={<NodeGuide />} />
          <Route path="/python" element={<PythonGuide />} />
          <Route path="/text-editors" element={<EditorsGuide />} />
          <Route path="/web-design" element={<WebdevGuide />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your Landing, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
