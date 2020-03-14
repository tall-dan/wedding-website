import React from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import styles from './SearchResults.module.scss';
import Lookup from '../Lookup/Lookup';
import { useQuery } from '@apollo/react-hooks';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import gql from 'graphql-tag';

function SearchResults() {
  const name = () => {
    var search = window.location.search.substring(1);
    return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })['name']
  }

  const query = gql`
      {
        guests(name: "${name()}") {
          firstName
          lastName
        }
      }
    `

    const { loading, error, data } = useQuery(query);
  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error :(</p>;
    return (
      <Grid fluid>
        <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
          <SectionTitle title="Can't Wait To See You There" />
          <div className={styles.SearchResults}>
            <Lookup prompt="Don't see your name? Search again"/>
          </div>
        </Col>
      </Grid>
    )
  }

export default SearchResults;
