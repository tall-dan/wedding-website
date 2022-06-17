import { Grid, Row, Col } from 'react-flexbox-grid';
import React from 'react';
import styles from './DayOfDetails.module.scss';
import SectionDivider from '../shared/SectionDivider/SectionDivider';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChurch, faHotel, faBus
} from '@fortawesome/free-solid-svg-icons';
import {
  ceremonyStart, ceremonyEnd, receptionStart, receptionEnd, afterPartyStart, afterPartyEnd
} from '../constants';


// maybe Ceremony Transit becomes Ceremony <p> address </p>(subtitle) Transit (cool icons)
const DayOfDetails = () => (
  <Grid fluid className={styles.dayOfDetails}>
      <SectionTitle title="Ceremony"/>
      <Row center='xs' className={styles.section_detail_area}>
        <span className={styles.section__detail}>First Congregational Church of Western Springs</span>
        <span className={styles.section__detail}>1106 Chestnut St, Western Springs, IL</span>
        <span className={styles.section__detail}>{ceremonyStart.format('h:mm A')} - {ceremonyEnd.format('h:mm A')}</span>
      </Row>
      <Row center='xs'>
        <h2>Transit</h2>
      </Row>
      <Row center='xs'>
      <SectionDivider />
      </Row>
    <Row center = 'xs'>
      <Col sm={12} md={4}>
        <FontAwesomeIcon icon={faHotel} className={styles.action__icon} />
        <span className={styles.action__detail}>Check into your hotel whenever your room's available</span>
      </Col>
      <Col sm={12} md={4}>
        <FontAwesomeIcon icon={faBus} className={styles.action__icon} />
        <span className={styles.action__detail}>If you're taking a bus from either of the hotels, be ready outside at 2pm</span>
      </Col>
      <Col sm={12} md={4}>
        <FontAwesomeIcon icon={faChurch} className={styles.action__icon}/>
        <span className={styles.action__detail}>Arrive at the church by 2:45pm</span>
      </Col>
    </Row>
  </Grid>
)

export default DayOfDetails
