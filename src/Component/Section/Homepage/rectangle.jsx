import React, { Component } from "react";
import { Box } from "@chakra-ui/react";
import "./rectangle.css";

class RectangleFeature extends Component {
  render() {
    return (
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        flex="1"
        borderRadius="md"
        id="main-rectangle"
      >
        {this.props.children}
      </Box>
    );
  }
}

export default RectangleFeature;
