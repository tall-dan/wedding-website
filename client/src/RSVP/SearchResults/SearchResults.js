import React from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styles from './SearchResults.module.scss';
import Lookup from '../Lookup/Lookup';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import InviteeSelection from './InviteeSelection/InviteeSelection';

function SearchResults() {
  const name = () => deserializeURLQuery().name;

  const query = gql`
    {
      guests(name: "${name()}") {
        displayName
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(query);
  let prompt;
  if (loading) prompt = 'Loading...';
  if (error) prompt = 'Uh, something went wrong.. please try again';
  if (data && data.guests.length === 0) prompt = "Sorry, we couldn't find you. Please search again";

  return (
    <Grid fluid>
      <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
        <SectionTitle title="Can't Wait To See You There" />
        <div className={styles.SearchResults}>
          { data && data.guests.length > 0 && <InviteeSelection guests={data.guests} /> }
          { (!data || data.guests.length === 0) && <Lookup prompt={prompt} /> }
        </div>
      </Col>
    </Grid>
  );
}

export default SearchResults;
