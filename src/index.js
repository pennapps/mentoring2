import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/android" />
          <Route path="/chrome-devtools" />
          <Route path="/git&github" />
          <Route path="/ios" />
          <Route path="/java&oop" />
          <Route path="/jquery" />
          <Route path="/nodejs" />
          <Route path="/python" />
          <Route path="/text-editors" />
          <Route path="/web-design" />
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
