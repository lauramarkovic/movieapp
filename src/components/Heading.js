import React from 'react';
import Col from 'react-bootstrap/Col';

const Heading = (props) => {
  return (
    <Col>
      <h1>{props.heading}</h1>
    </Col>
  )
}

export default Heading;
