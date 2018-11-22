import React from "react";
import Styled from "styled-components";
import { Col, Button } from "reactstrap";


const Container1 = Styled.div`

  padding: 16px auto;
  margin: 140px auto;
  
  h2{
    font-size: 2.5rem;
  }
  p{
    margin: 16px;
  }
  
  .col1{
    text-align: center;
    p{
      font-size: 19pt;
    }
  }

  .col2{
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 24px auto 12px auto;
    flex-direction: column;

    .pCard{
      text-align: center;
      margin: 24px 16px !important;
      padding: 60px 24px !important;

      background: white;
      :nth-of-type(2){
          -webkit-box-shadow: 0px 3px 4px 3px rgba(219, 219, 219, 0.5);
          -moz-box-shadow: 0px 3px 4px 3px rgba(219, 219, 219, 0.5);
          box-shadow: 0px 3px 4px 3px rgba(219, 219, 219, 0.5);
      }

      h1{
        color: black;
        font-weight: 900;
        font-size: 40pt;
        letter-spacing: 4px
      }
      h4{
        font-weight: 900;
      }

    }

    .pTitle1{ color: #0080F7 !important }
    .pTitle2{ color: #FF5766 !important }
    .pTitle3{ color: #FFBE7C !important }

  }

  @media screen and ( min-width: 1200px ){
    max-width: 1200px
    height: 70vh;
    .col1{
      max-width: 900px
      margin:0 auto;
    }

    .col2{
      flex-direction: row;

      .pCard{
        margin: 12px 16px;
      }

    }
  }


`;

class Pricing extends React.Component {
  render() {
    return (
      <Container1 className="animated fadeIn">
        <Col className="col1">
          <h1>Hello There !</h1>
          <p>Sign up now and you will get more great features and deals</p>
        </Col>

        <Col className="col2">
          <div className="pCard">
            <h4 className="pTitle1">BASIC</h4>
            <h2 className="price">Free</h2>
            <p>Cross check user's profile with specific location</p>
            <p>Know the diease status changing every year</p>

            <Button color="primary" outline>
              Get Started
            </Button>
          </div>

          <div className="pCard">
            <h4 className="pTitle2">STANDARD</h4>
            <h2 className="price">3.99$</h2>
            <p>Cross check user's profile with specific location</p>
            <p>Know the diease status changing every year</p>

            <Button color="primary" outline>
              Get Started
            </Button>
          </div>

          <div className="pCard">
            <h4 className="pTitle3">PREMIUM</h4>
            <h2 className="price">6.99$</h2>
            <p>Cross check user's profile with specific location</p>
            <p>Know the diease status changing every year</p>
            <p>Notify user about any outbreak in nearby location</p>

            <Button color="primary" outline>
              Get Started
            </Button>
          </div>
        </Col>
      </Container1>
    );
  }
}

export default Pricing;
