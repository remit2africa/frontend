import { MDBCol, MDBRow } from "mdbreact";
import React, { Component } from "react";

class RightPane extends Component {
  render() {
    return (
      <>
        <MDBRow>
          <MDBCol md="6">
            <p>
              Migrant remittances You’re working abroad as a migrant and sending
              a share of your income home to your family, friends, or your own
              domestic bank account. You’re looking for cheap remittances with
              great reach in Africa, enabling you to either wire your money
              remittances to a bank account or enable its recipient to receive
              it in cash. This transaction could be a one-off, or on a regular
              basis.
            </p>
          </MDBCol>
          <MDBCol md="6"></MDBCol>
        </MDBRow>

        <p>
          Regular remittances: You’re living abroad and want to conduct
          transactions to Africa on a regular basis; you are either sending your
          salary to your home bank account, transferring money from your home
          bank account to your current bank account or paying for something in
          installments (most commonly, mortgage payments and pensions).
        </p>
        <p>
          Remitting payments Even if you have not moved abroad as an expat or
          migrant you may still have a bank account in Africa for a variety of
          reasons. If you are accepting money into that overseas bank account,
          you would eventually want to receive that money from abroad so you can
          make use of it. A remittance comparison should help you find the best
          solution.
        </p>
      </>
    );
  }
}

export default RightPane;
