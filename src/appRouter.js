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
        <Route path="/" exact component={Search} />
        <Route path={/\/user/} render={() => <UserProfile name={name} />} />
      </div>
    </Router>
  );
}

export default AppRouter;