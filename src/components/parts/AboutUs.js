import React from "react";
import Styled from "styled-components";
import AboutCard from "./AboutCard";
import { Row, Col } from "reactstrap";

const StyledAbout = Styled.div`
  background: #F0F1F1;
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
                link="https://www.straight.com/files/v3/styles/gs_large/public/2015/01/MarcEmery1_150115_0.jpg?itok=QxTr8qDX"
                title="Giang Nguyen"
                subtitle="Project Manager"
                linkedLink=""
              />
              <AboutCard
                link="https://www.straight.com/files/v3/styles/gs_large/public/2015/01/MarcEmery1_150115_0.jpg?itok=QxTr8qDX"
                title="Khanh Dinh"
                subtitle="UX / UI Designer"
                linkedLink=""
              />
              <AboutCard
                link="https://www.straight.com/files/v3/styles/gs_large/public/2015/01/MarcEmery1_150115_0.jpg?itok=QxTr8qDX"
                title="Anh Pham"
                subtitle="Business Strategist"
                linkedLink=""
              />
            </Col>
            <Col lg={{ size: 4, offset: 2 }}>
              <AboutCard
                link="https://www.straight.com/files/v3/styles/gs_large/public/2015/01/MarcEmery1_150115_0.jpg?itok=QxTr8qDX"
                title="Marc Emery"
                subtitle="Canabis activist"
                linkedLink=""
              />
              <AboutCard
                link="https://www.straight.com/files/v3/styles/gs_large/public/2015/01/MarcEmery1_150115_0.jpg?itok=QxTr8qDX"
                title="Marc Emery"
                subtitle="Canabis activist"
                linkedLink=""
              />
              <AboutCard
                link="https://www.straight.com/files/v3/styles/gs_large/public/2015/01/MarcEmery1_150115_0.jpg?itok=QxTr8qDX"
                title="Marc Emery"
                subtitle="Canabis activist"
                linkedLink=""
              />
            </Col>
          </Row>
          {/* </Col> */}
        </div>
      </StyledAbout>
    );
  }
}
