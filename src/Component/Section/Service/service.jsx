import React, { Component } from "react";
import "./service.css";
import RigtSection from "./rightside";
import LeftSection from "./leftside";
class ServiceSection extends Component {
  render() {
    return (
      <div id="main-service">
        <RigtSection />
        <LeftSection />
        <RigtSection />
        <LeftSection />
      </div>
    );
  }
}

export default ServiceSection;
