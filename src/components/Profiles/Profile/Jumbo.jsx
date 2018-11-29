import React from "react";
import { Jumbotron, Container } from "reactstrap";

import profile from "../../../assets/profile-user.svg";

const JumbotronProfile = props => {
  return (
    <div>
      <Jumbotron fluid className="profile-jumbo text-left">
        <Container>
          <div className="round">
            <img src={profile} alt="Avatar" />
          </div>
          <h1>Hello, {props.name}!</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronProfile;
