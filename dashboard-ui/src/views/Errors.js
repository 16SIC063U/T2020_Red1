import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>Hello!</h2>
        <h3>Send Us A Review!</h3>
        <p>
          Do provide us with your honest feedback and you will improve your
          experience!
        </p>
        <Button pill>&larr; Go Back</Button>
      </div>
    </div>
  </Container>
);

export default Errors;
