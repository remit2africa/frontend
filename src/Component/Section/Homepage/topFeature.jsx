import {
  Text,
  Select,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import RectangleFeature from "./rectangle";
import "./topfeature.css";
class TopFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advance: false,
    };
  }
  Advance = () => {
    this.setState({
      advance: !this.state.advance,
    });
  };
  render() {
    const Dropdown = (
      <div id="dropdown">
        <i class="flag flag-china"></i>
        <Select
          className="form-group form-control"
          placeholder=" GDP - British Pound"
        >
          <option value="option1"> GDP - British Pound 1</option>
          <option value="option2"> GDP - British Pound 2</option>
          <option value="option3"> GDP - British Pound 3</option>
        </Select>
      </div>
    );

    const AdvanceOption = (
      <MDBCol>
        <MDBRow className="radio-group">
          <p>Transfer Speeds:</p>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="1" colorScheme="teal" className="radio">
                <b> Immediate</b>
              </Radio>
              <Radio value="2" colorScheme="teal" className="radio">
                <b> Same day</b>
              </Radio>
              <Radio value="3" colorScheme="teal" className="radio">
                <b> 1-3 days</b>
              </Radio>
              <Radio value="4" colorScheme="teal" className="radio">
                <b> One week</b>
              </Radio>
            </Stack>
          </RadioGroup>
        </MDBRow>
        <MDBRow>
          <p className="head-radio">Transfer Type:</p>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="7" name="tt" colorScheme="teal" className="radio">
                <b> Bank to bank</b>
              </Radio>
              <Radio value="5" name="tt" colorScheme="teal" className="radio">
                <b> Bank to cash</b>
              </Radio>
              <Radio value="6" name="tt" colorScheme="teal" className="radio">
                <b> Bank to mobile</b>
              </Radio>
            </Stack>
          </RadioGroup>
        </MDBRow>
      </MDBCol>
    );
    return (
      <div>
        <RectangleFeature>
          <MDBRow>
            <MDBCol md="3">
              <Text className="currency">From currency</Text>
              {Dropdown}
            </MDBCol>
            <MDBCol md="2">
              <Text className="currency">Amount</Text>
              <Text className="below" style={{ textDecoration: "underline" }}>
                1000
              </Text>
            </MDBCol>
            <MDBCol md="2">
              <Text
                className="form-group form-control rounded-circle  text-center white-text "
                id="oval"
              >
                <MDBRow>
                  <Button
                    backgroundColor="#4da8bb"
                    size="xs"
                    colorScheme="#4da8bb"
                  >
                    <MDBIcon
                      icon="long-arrow-alt-right"
                      className="text-center mx-auto "
                    />
                  </Button>
                </MDBRow>
                <MDBRow className="mt-1">
                  <Button
                    backgroundColor="#4da8bb"
                    colorScheme="#4da8bb"
                    size="xs"
                    color="gray.300"
                  >
                    <MDBIcon
                      icon="long-arrow-alt-left"
                      className="text-center mx-auto"
                    />
                  </Button>
                </MDBRow>
              </Text>
            </MDBCol>
            <MDBCol md="3">
              <Text className="currency">To currency</Text>
              {Dropdown}
            </MDBCol>
            <MDBCol md="2">
              <Button
                className="form-group form-control"
                color="white"
                backgroundColor="#4da8bb"
                colorScheme="#4da8bb"
              >
                View rates
              </Button>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="3" className="radio-group">
              <Link
                to="#"
                onClick={this.Advance}
                color="white"
                style={{ textDecoration: "none" }}
              >
                view advanced options <MDBIcon icon="angle-right" />
              </Link>
            </MDBCol>
            {this.state.advance ? AdvanceOption : ""}
          </MDBRow>
        </RectangleFeature>
      </div>
    );
  }
}

export default TopFeature;
