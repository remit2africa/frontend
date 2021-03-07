import React, { Component } from "react";
import BasicLayout from "../../Layout/BasicLayout";
import ServiceSection from "../../Section/Service/service";
import HeaderColor from "../Constants/HeaderColor";

class Servicepage extends Component {
  render() {
    return (
      <BasicLayout>
        <HeaderColor
          title="Our service"
          detail="We help Africans find, compare and 
review money transfer services in real-time.
"
        ></HeaderColor>
        <div>
          <ServiceSection />
        </div>
      </BasicLayout>
    );
  }
}

export default Servicepage;
