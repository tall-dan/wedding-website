import React from 'react';
import { Grid } from 'react-flexbox-grid';
import CoverPhoto from './CoverPhoto/CoverPhoto';
import WeddingDetails from './WeddingDetails/WeddingDetails';
import WeddingParty from './WeddingParty/WeddingParty';

function OurWedding() {
  return (
    <>
      <CoverPhoto />
      <Grid fluid>
        <WeddingDetails />
        <WeddingParty />
      </Grid>
    </>
  );
}
export default OurWedding;
