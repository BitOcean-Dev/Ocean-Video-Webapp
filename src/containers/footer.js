import React from "react";
import { Grid, Row, Col } from "react-bootstrap";


const Footer = () =>
  <Grid>
    <hr/>
    <Row>
      <Col xs={2} md={2}/>
      <Col xs={8} md={8}>
        <center> BitOcena Inc.</center>
      </Col>
      <Col xs={2} md={2}/>
    </Row>
  </Grid>

export default Footer;
