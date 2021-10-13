import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs';

ReactDOM.render(
  <div className="container m-8">
  <div className="bg-blue-100 p-4">
    <p>Logo</p>
  </div>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
