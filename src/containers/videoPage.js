import React from "react";
import Player from "./player";
import { Grid, Row, Col } from "react-bootstrap";


const videoPage = ({ match }) =>
  <Grid>
    <Row>
      <Col xs={2} md={2}/>
      <Col xs={8} md={8}>
        Vid: { match.params.vid }
      </Col>
      <Col xs={2} md={2}/>
    </Row>
    <Row>
      <Col xs={2} md={2}/>
      <Col xs={8} md={8}>
        <Player vid={ match.params.vid }/>
      </Col>
      <Col xs={2} md={2}/>
    </Row>
  </Grid>

export default videoPage;


