import React from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import CoverPhoto from './CoverPhoto/CoverPhoto';
import WeddingDetails from './WeddingDetails/WeddingDetails';
import WeddingParty from './WeddingParty/WeddingParty';

const OurWedding = () => (
  <Grid fluid>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
      <CoverPhoto />
      <WeddingDetails />
      <WeddingParty />
    </Col>
  </Grid>
);
export default OurWedding;
