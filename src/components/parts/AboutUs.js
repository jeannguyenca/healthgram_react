import React from "react";
import Styled from "styled-components";
import AboutCard from "./AboutCard";
import { Row, Col } from "reactstrap";

import jean from "../../assets/members/jean.png";
import khanh from "../../assets/members/khanh.png";
import anh from "../../assets/members/anh.png";
import anu from "../../assets/members/anu.png";
import kunal from "../../assets/members/jean.png";
import andra from "../../assets/members/jean.png";

const StyledAbout = Styled.div`
  background: #F1F1F1;
  height: auto;
  .col1{
    .aboutTitle{
      padding-top: 60px;
    }
  }

  img{
    width: 150px !important;
    height: 150px !important;
  }

  .wrap .row{
    margin-top: 0 !important;
  }




`;

//

export default class AboutUS extends React.Component {
  render() {
    return (
      <StyledAbout>
        <div className="wrap">
          <Col className="col1">
            <h1 className="aboutTitle">Meet The Team</h1>
            <p>Meet our passionate members</p>
          </Col>

          {/* <Col lg="12" className="colAbout"> */}
          <Row>
            <Col lg={{ size: 4, offset: 1 }}>
              <AboutCard
                link={jean}
                title="Giang Nguyen"
                subtitle="PM/Full Stack Developer"
                linkedLink=""
                alt="Jean Nguyen"
              />
              <AboutCard
                link={khanh}
                title="Khanh Dinh"
                subtitle="Lead UX/UI Designer"
                linkedLink=""
                alt="Khanh Dinh"
              />
              <AboutCard
                link={anh}
                title="Anh Pham"
                subtitle="UX Designer/Business Strategist"
                linkedLink=""
                alt="Anh Pham"
              />
            </Col>
            <Col lg={{ size: 4, offset: 2 }}>
              <AboutCard
                link={anu}
                title="Anu Joshi"
                subtitle="Back-end Developer"
                linkedLink=""
                alt="Anu Joshi"
              />
              <AboutCard
                link={kunal}
                title="Kunal Dandonal"
                subtitle="Front-end Developer"
                linkedLink=""
                alt="Kunal Dandonal"
              />
              <AboutCard
                link={andra}
                title="Raditya Iskanda"
                subtitle="Front-end Developer/QA"
                linkedLink=""
                alt="Raditya Iskanda"
              />
            </Col>
          </Row>
          {/* </Col> */}
        </div>
      </StyledAbout>
    );
  }
}
