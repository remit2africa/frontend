import React, { Component } from "react";
import "./about.css";
class AboutusSection extends Component {
  render() {
    return (
      <div id="about-main">
        <p className="about-section">
          We developed Afrex to tackle the excessive cost of cross-border money
          transfers to Africa. Remittances are an important source of income for
          millions of households in Sub-Saharan Africa and offer tremendous
          potential to contribute towards the achievement of the Sustainable
          Development Goals (SDGs).
        </p>

        <p className="about-section">
          However, the high cost of sending remittances limits their full
          potential. Currently, the global average cost of sending 200 US
          dollars is 6.9% of the remittance. The size of the global remittance
          market is between 600-800 billion dollars. SDG 10 aims to reduce the
          cost to less than 3% and to eliminate remittance corridors with costs
          higher than 5% by 2030.
        </p>
        <p className="about-section">
          The advancements in the use of technology by MTOs (money transfer
          operators) and the emergence of new fintech business models for
          remittance services have significantly improved the efficiency of
          operations resulting in cost reduction. With our platform, we provide
          a solution that compares the fee structure of MTOs in a holistic and
          fast way tailored to users from Africa. We focus on transactions
          between Sub-Saharan Africa and major developed regions, i. e. USA,
          Canada, and Europe.
        </p>
      </div>
    );
  }
}

export default AboutusSection;
