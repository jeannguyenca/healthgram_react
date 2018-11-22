import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components';
import { Container, Col, Row, Button} from 'reactstrap'

import Personal from '../../assets/person_icon@1x.svg'
import Global from '../../assets/global_icon@1x.svg'
import Notification from '../../assets/notification_icon@1x.svg'

import ReadyAdd from '../parts/ReadyAdd'


/*------- Styled Button -------*/
const Button1 = Styled(Button)`
    position: relative;
    margin: 12px;
    padding: 8px 16px !important;
    display: block;
    overflow: hidden;
    border-width: 0;
    outline: none;
    border-radius: 40px !important;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    color: #0080F7 !important;
    background-color: transparent !important;
    transition: background-color .3s;
    width: 240px;
    height: auto;
    font-size: 17pt !important;
    font-family: 'Montserrat', sans-serif;
    border:2px solid #0080F7 !important;

    > * {
      position: relative;
    }
    &:hover{
      background-color: #0080F7 !important;
      color: white !important;
    }
    &:before{
      background-color: rgba(236, 240, 241, .3);
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 0;
      padding-top: 0;
      border-radius: 100%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    &:active:before {
      width: 120%;
      padding-top: 120%;
      background-color: grey;
      opacity: .6;
      transition: width .2s ease-out, padding-top .2s ease-out;
    }
  `;
/*------- END -------*/

const Container1 = Styled.div`
  padding: 16px auto;
  margin: 90px auto 24px auto;

  p{
    font-size: 17pt;
    margin: 16px;

  }
  .col1{
    text-align: center;
    .groupButton{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }
    h1{
      color: #0080F7;
      font-weight: 1000;
    }
  }

  .col2{
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;

    .sCard{
      text-align: center;
      h4{
        color: black;
        font-weight: bold;
      }


    }


    img{
      width: 105px;
      height: 125px;
    }
  }

  @media screen and ( min-width: 900px ){
    .col1{
      max-width: 900px
      margin:0 auto;
    }

    .col2{
      flex-direction: row;

      .sCard{
        margin: 12px 16px;
        &:hover{
          box-shadow: 3px 6px 9px grey;
        }
      }

    }
  }
  @media screen and ( min-width: 1200px ){
    max-width: 1200px
  }



`

class Planner extends React.Component {
  render () {
    return(
      <Container1>
        <Col className="col1">
          <h1>Start Now</h1>
          <p>Pick your location and prepare for your trip with easy steps</p>
          <div className="groupButton">
            <Button1 className="create">Create New</Button1>
            <Button1 className="edit">Edit Plan</Button1>
          </div>
        </Col>







        <ReadyAdd></ReadyAdd>
      </Container1>
    )

  }
}

export default Planner;



// <Col className="col2">
//   <div className="sCard">
//     <figure>
//       <img src={Personal} alt="Personal"/>
//     </figure>
//     <h4>Personal Allergies</h4>
//     <p>Cross check user's profile with specifuc location</p>
//   </div>
//
//   <div className="sCard">
//     <figure>
//       <img src={Global} alt="Global"/>
//     </figure>
//     <h4>Global Diseases</h4>
//     <p>Know the diease status changing every year</p>
//   </div>
//
//   <div className="sCard">
//     <figure>
//       <img src={Notification} alt="Notification"/>
//     </figure>
//     <h4>Notification</h4>
//     <p>Notify user about any outbreak in nearby location</p>
//   </div>
// </Col>
