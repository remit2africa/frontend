import React, { Component } from "react";
import BasicLayout from "../../Layout/BasicLayout";
import AboutusSection from "../../Section/About/about";
import HeaderColor from "../Constants/HeaderColor";

class Aboutpage extends Component {
  render() {
    return (
      <BasicLayout>
        <HeaderColor
          title="About Afrex"
          detail="We help Africans find, compare and 
review money transfer services in real-time.
"
        ></HeaderColor>
        <div style={{ width: "100%" }}>
          <AboutusSection />
        </div>
      </BasicLayout>
    );
  }
}

export default Aboutpage;
