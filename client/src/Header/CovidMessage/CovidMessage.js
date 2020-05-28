import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './CovidMessage.module.scss';
import NewDetails from '../NewDetails/NewDetails';

class CovidMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { displayDeets: false };
  }

  toggleDetails = () => {
    this.setState(previousState => ({
      ...previousState, displayDeets: !previousState.displayDeets
    }));
  };

  render = () => (
    <>
      <Row className={styles.CovidMessage}>
        <Col xsOffset={2} xs={8}>
          <p className={styles.CovidMessage__info}>
            Update: Due to COVID-19, weapos;ve decided to pospone our wedding.
            Your health and safety are our top priority,
            and we hope youapos;ll save our new date. We wish you and your loved ones all the best, and look forward
            to celebrating together!
          </p>
          <button type="button" className={styles.CovidMessage__detailsToggle} onClick={this.toggleDetails}> Get the details </button>
        </Col>
      </Row>
      {this.state.displayDeets && <NewDetails toggle={this.toggleDetails} /> }
    </>
  )
}


export default CovidMessage;
