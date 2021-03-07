import { MDBCol, MDBRow } from "mdbreact";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <MDBRow id="main-footer">
        <MDBCol md="6" className="text-center" id="terms">
          <Link to="#">Terms and conditions | Privacy policy</Link>
        </MDBCol>
        <MDBCol md="6" className="text-center" id="copyright">
          <Link to="#"> Copyright © Afrex 2021. All rights reserved.</Link>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default Footer;
