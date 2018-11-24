import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronProfile = (props) => {
  return (
    <div>
      <Jumbotron fluid className="profile-jumbo text-left">
        <Container>
        <div className="round"></div>
          <h1>Hello, {props.name}!</h1>
          
  
         
    
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronProfile;