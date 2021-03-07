import React, { Component } from "react";
import Footer from "../Constant/Navigation/Footer/Footer";
class BasicLayout extends Component {
  render() {
    return (
      <>
        {this.props.children}
        {/* Footer */}

        <Footer />
      </>
    );
  }
}

export default BasicLayout;
