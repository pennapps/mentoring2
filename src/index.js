import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <br />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/android" />
          <Route exact path="/chrome_devtools" />
          <Route exact path="/git&github" />
          <Route exact path="/ios" />
          <Route exact path="/java&oop" />
          <Route exact path="/jquery" />
          <Route exact path="/nodejs" />
          <Route exact path="/python" />
          <Route exact path="/webdesign" />
          <Route exact path="/texteditors" />
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
