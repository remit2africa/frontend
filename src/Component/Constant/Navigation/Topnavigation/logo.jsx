import React from "react";
import { Avatar, Box } from "@chakra-ui/react";
import logo from "../../../../asset/logo.png";
import { Link } from "react-router-dom";
import "./logo.css";
export default function Logo(props) {
  return (
    <Box {...props}>
      <Link to="/">
        <Avatar src={logo} style={{ backgroundColor: "#4da8bb" }} id="logo" />
      </Link>
    </Box>
  );
}
