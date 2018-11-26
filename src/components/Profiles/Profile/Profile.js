import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Profile.css';
import { FaPowerOff, FaUserEdit, FaMoneyCheck, FaRegCalendarAlt } from "react-icons/fa";

import { Container, Row, Col, Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import JumbotronProfile from "./Jumbo";
import {  CardLink } from 'reactstrap';
class Profile extends Component {
 

  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      toEdit: false

    };

    this.getUserFeed = this.getUserFeed.bind(this);
    this.logout = this.logout.bind(this);

  }



  componentWillMount() {

   if(sessionStorage.getItem("userData")){
    this.getUserFeed();
   }
  
   else{
    this.setState({redirectToReferrer: true});
   }
   

  }

  getUserFeed() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { id: data.id, username: data.username, email: data.email, address: data.address, name: data.name, phone: data.phone, date_of_birth: data.date_of_birth, postal_code: data.postal_code, city: data.city, country: data.country };
    this.setState(postData);
  }

  onChange(e){
    this.setState({userFeed:e.target.value});
    
   }

   logout(){
     sessionStorage.setItem("userData",'');
     sessionStorage.clear();
     this.setState({redirectToReferrer: true});
   }

   handleSubmit = () => {
    this.setState(() => ({
        toEdit: true
      }));
      
  }
  

  render() {

    if (this.state.toEdit === true) {
      return <Redirect to='/complete' />
    }

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/signin'}/>)
    }

   
      let now = this.state.date_of_birth;
      let today;
      let news;
      if(now!==null){
        today = now.split(" ")[0];
        news = today.toString();
      }

    
    return (
      <div className="profile">
      <JumbotronProfile name={this.state.name} />
        <Container>
        <Row className="justify-content-sm-center mb-3 p-0">
          <Col xs="12" lg="12" className="text-left">
          <Button color="primary" className="btn-primary bordercurve btn align-middle m-2" onClick={this.handleSubmit}><FaUserEdit /> Update Profile</Button>
          <Button color="primary" className="btn-primary bordercurve btn align-middle m-2" ><FaMoneyCheck /> Plan Details</Button>
          <Button color="primary" className="btn-primary bordercurve btn align-middle m-2" ><FaRegCalendarAlt /> Plan Your Trip</Button>
          <Button color="danger" className="btn-primary bordercurve btn align-middle m-2" onClick={this.logout}><FaPowerOff /> Logout</Button>
          </Col>
          </Row>
        
          <Row className="justify-content-sm-center mb-0 mt-4">
          <Col xs="12" lg="7" className="text-left">
            <div class="title-profile text-uppercase mb-3"><h4>Basic Info</h4></div>

            <div className="profile-info mt-2">
     
            <p><strong className="mr-2">Full Name: </strong>{this.state.name}</p>
            <p><strong className="mr-2">Birthday: </strong>{news}</p>
            <p><strong className="mr-2">Username: </strong>{this.state.username}</p>
            </div>


            <div class="title-profile text-uppercase mt-5 mb-3"><h4>Contact Info</h4></div>
            <div className="profile-info mt-2">
            <p><strong className="mr-2">Email: </strong>{this.state.email}</p>
            <p><strong className="mr-2">Location: </strong>{this.state.address}</p>
            <p><strong className="mr-2">City: </strong>{this.state.city}</p>
            <p><strong className="mr-2">Country: </strong>{this.state.country}</p>
            <p><strong className="mr-2">Phone: </strong>{this.state.phone}</p>
            </div>
            
            {/* <Button className="btn-outline-dark btn mt-3 bordercurve" onClick={this.handleSubmit}>Complete Your Profile</Button> */}
            
        


          </Col>
                  <Col xs="12" lg="5" className="member justify-content-center align-self-center text-center">
                 
                  <Card  active>
                    <CardBody>
                        <CardTitle className="standard">Upgrade your plan to</CardTitle>
                        <div className="loginjumbo colw mb-4">
                        <CardLink href="#" ><h2 className="font-weight-bold">Premium</h2></CardLink>
                        </div>
                        <CardText >
                            <h4>Unlock the potential</h4></CardText>
                        <CardText >
                            <ul className="list-unstyled">
                            <li>Manage Multiple Profiles</li>
                            <li>Manage Multiple Profiles</li>
                            </ul></CardText>
                        <Button className="btn-outline-dark btn bordercurve">Change Plan</Button>

                    </CardBody>
                </Card>
               
                  </Col>
          </Row>
        

        </Container>
      
      </div>
    );
  }
}

export default Profile;