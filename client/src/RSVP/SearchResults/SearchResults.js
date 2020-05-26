import React from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import styles from './SearchResults.module.scss';
import Lookup from '../Lookup/Lookup';
import { useQuery } from '@apollo/react-hooks';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import InviteeSelection from './InviteeSelection/InviteeSelection';
import gql from 'graphql-tag';

function SearchResults() {
  const name = () => {
    return deserializeURLQuery()['name']
  }

  const query = gql`
    {
      guests(name: "${name()}") {
        firstName
        lastName
        id
      }
    }
  `

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
          { data && <InviteeSelection guests={data.guests} /> }
          { (!data || data.guests.length === 0) && <Lookup prompt={prompt} /> }
        </div>
      </Col>
    </Grid>
  )
}

export default SearchResults;
