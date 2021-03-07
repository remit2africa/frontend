import { Text } from "@chakra-ui/react";
import React, { Component } from "react";
import "./introduction.css";
class Introduction extends Component {
  render() {
    return (
      <div className="main">
        <Text id="main">
          <b>{this.props.title}</b>
        </Text>
        <p id="detail">{this.props.detail}</p>
      </div>
    );
  }
}

export default Introduction;
