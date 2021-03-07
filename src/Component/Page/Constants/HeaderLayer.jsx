import React, { Component } from "react";
import Topnavigation from "../../Constant/Navigation/Topnavigation/Topnavigation";
import Introduction from "../../Section/Homepage/Introduction";

class HeaderLayer extends Component {
  render() {
    return (
      <div className="back-image">
        <>
          <Topnavigation />
          {this.props.title ? (
            <Introduction detail={this.props.detail} title={this.props.title} />
          ) : (
            ""
          )}
          {this.props.children}
        </>
      </div>
    );
  }
}

export default HeaderLayer;
