import React, { Component } from "react";
import BasicLayout from "../../Layout/BasicLayout";
import Rates from "../../Section/Homepage/rate";
import SortProvider from "../../Section/Homepage/sort";
import TopFeature from "../../Section/Homepage/topFeature";
import HeaderLayer from "../Constants/HeaderLayer";
import "./index.css";

class Homepage extends Component {
  render() {
    return (
      <BasicLayout>
        <HeaderLayer
          title="Afrex"
          detail={`Find the best currency exchange
          rate for you.`}
        >
          <TopFeature />
        </HeaderLayer>

        <div>
          <SortProvider />
          <Rates />
          <Rates />
        </div>
      </BasicLayout>
    );
  }
}

export default Homepage;
