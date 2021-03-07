import React, { Component } from "react";
import RectangleFeature from "./rectangle";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";
import icon from "../../../asset/hsbc.png";
import { Button, Image, Text } from "@chakra-ui/react";
import "./rate.css";
import { Line } from "react-chartjs-2";
class Rates extends Component {
  render() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
    return (
      <div id="main-rate">
        <RectangleFeature>
          <MDBRow>
            <MDBCol md="4" className="rate-logo">
              <Image src={icon} />
            </MDBCol>
            <MDBCol md="4" className="rate-exchange">
              <Text id="amount">100 GPB</Text>
              <Text id="exchanged">21260.43 Rand</Text>
              <Text id="rate">
                <MDBIcon icon="arrow-up" /> <small>1.027 (0.6%)</small>
              </Text>
              <Text id="trans-speed">Transfer speed: 1 day </Text>
              <Button
                className="form-group form-control"
                color="white"
                backgroundColor="#4da8bb"
                colorScheme="#4da8bb"
              >
                Go to HSBC
              </Button>
            </MDBCol>
            <MDBCol md="4">
              <Line
                data={data}
                options={{
                  responsive: true,
                  responsiveAnimationDuration: true,
                }}
              />
            </MDBCol>
          </MDBRow>
        </RectangleFeature>
      </div>
    );
  }
}

export default Rates;
