import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Aboutpage from "../Page/About/Aboutpage";
import Homepage from "../Page/Homepage/Homepage";
import Servicepage from "../Page/Service/Service";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about-afrex" component={Aboutpage} />
        <Route path="/our-service" component={Servicepage} />
      </Switch>
    );
  }
}

export default Routes;
