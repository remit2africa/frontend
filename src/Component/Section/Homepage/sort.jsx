import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { MDBRow } from "mdbreact";
import React, { Component } from "react";
import "./sort.css";
class SortProvider extends Component {
  render() {
    return (
      <MDBRow id="radio-group" style={{ width: "100%" }}>
        <p id="provider">Providers:</p> <p id="sort-by">Sort by: </p>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" className="radio">
              <b> Most popular</b>
            </Radio>
            <Radio value="2" colorScheme="teal" className="radio">
              <b> Best Rate</b>
            </Radio>
            <Radio value="3" colorScheme="teal" className="radio">
              <b>Fastest transfer</b>
            </Radio>
            <Radio value="4" colorScheme="teal" className="radio">
              <b>Amount: </b> <small>100</small>{" "}
              <small className="small-amnt">150</small>{" "}
              <small className="small-amnt">200</small>
            </Radio>
            <Button
              className="form-group form-control "
              color="#4da8bb"
              backgroundColor="white"
              colorScheme="white"
              id="sort-btn"
            >
              Create alert
            </Button>
          </Stack>
        </RadioGroup>
      </MDBRow>
    );
  }
}

export default SortProvider;
