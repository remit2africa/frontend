import React, { Component } from "react";
import { MDBRow, MDBCol, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
class LeftSection extends Component {
  render() {
    return (
      <>
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Lifestyle
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title of the news</strong>
            </h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <p>
              by
              <a href="#!">
                <strong>Carine Fox</strong>
              </a>
              , 14/08/2018
            </p>
            <MDBBtn color="pink" size="md" className="mb-lg-0 mb-4 waves-light">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
      </>
    );
  }
}

export default LeftSection;
