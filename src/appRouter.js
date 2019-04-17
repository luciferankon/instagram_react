import React from "react";
import UserProfile from "./userProfile";
import Search from "./search";
import _ from 'lodash';
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter() {
  const name = _.last(window.location.href.split('='));
  return (
    <Router>
      <div className="container">
        <Route path={/\/user/} render={() => {console.log('1234456');<UserProfile name={name} />} }/>
        <Route path="/" exact component={Search} />
      </div>
    </Router>
  );
}

export default AppRouter;