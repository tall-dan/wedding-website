import { Grid, Row, Col } from 'react-flexbox-grid';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChurch, faHotel, faBus, faArrowRight, faArrowDown, faArrowLeft, faArrowUp, faChampagneGlasses
} from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import styles from './DayOfDetails.module.scss';
import SectionTitle from '../shared/SectionTitle/SectionTitle';

// maybe Ceremony Transit becomes Ceremony <p> address </p>(subtitle) Transit (cool icons)
const DayOfDetails = () => (
  <Grid fluid className={styles.dayOfDetails}>
    <SectionTitle title="Where to be & When" />
    <Row center="xs" className={styles.content}>
      <Col sm={12} md={2}>
        <span className={styles.section__title}>Your Hotel</span>
        <FontAwesomeIcon icon={faHotel} className={styles.action__icon} />
        <span className={styles.section__detail}>Check into your hotel</span>
        <span className={styles.action__detail}>Whenever your room&apos;s available</span>
      </Col>
      <Col sm={0} md={2}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className={classnames(styles.hidden__sm_xs, styles.action__icon, styles.lateral_arrow)}
        />
        <FontAwesomeIcon icon={faArrowDown} className={classnames(styles.show__sm_xs, styles.action__icon)} />
      </Col>
      <Col sm={12} md={2}>
        <span className={styles.section__title}>The Bus</span>
        <FontAwesomeIcon icon={faBus} className={styles.action__icon} />
        <Row center="xs" className={styles.section_detail_area}>
          <span className={styles.section__detail}>Pick up outside the Marriott and Hampton Inn</span>
          <span className={styles.action__detail}>Please be ready outside at 2pm</span>
        </Row>
      </Col>
      <Col sm={0} md={2}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className={classnames(styles.hidden__sm_xs, styles.action__icon, styles.lateral_arrow)}
        />
        <FontAwesomeIcon icon={faArrowDown} className={classnames(styles.show__sm_xs, styles.action__icon)} />
      </Col>
      <Col sm={12} md={2}>
        <span className={styles.section__title}>The church</span>
        <FontAwesomeIcon icon={faChurch} className={styles.action__icon} />
        <Row center="xs" className={styles.section_detail_area}>
          <span className={styles.section__detail}>First Congregational Church</span>
          <span className={styles.section__detail}>1106 Chestnut St, Western Springs, IL</span>
          <span className={styles.action__detail}>Please arrive at the church by 2:45pm</span>
        </Row>
      </Col>
    </Row>
    <Row center="xs">
      <Col md={2}>
        <FontAwesomeIcon icon={faArrowUp} className={classnames(styles.hidden__sm_xs, styles.action__icon)} />
      </Col>
      <Col md={2} mdOffset={6}>
        <FontAwesomeIcon icon={faArrowDown} className={styles.action__icon} />
      </Col>
    </Row>
    <Row center="xs">
      <Col sm={12} md={2}>
        <span className={styles.section__title}>The Bus</span>
        <FontAwesomeIcon icon={faBus} className={styles.action__icon} />
        <Row center="xs" className={styles.section_detail_area}>
          <span className={styles.section__detail}>
            There will be three shuttles from the reception back to Marriott & Hampton Inn
          </span>
          <span className={styles.action__detail}>10:15pm</span>
          <span className={styles.action__detail}>11:00pm</span>
          <span className={styles.action__detail}>1:00pm</span>
        </Row>
      </Col>
      <Col sm={0} md={2}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={classnames(styles.hidden__sm_xs, styles.action__icon, styles.lateral_arrow)}
        />
        <FontAwesomeIcon icon={faArrowDown} className={classnames(styles.show__sm_xs, styles.action__icon)} />
      </Col>
      <Col sm={12} md={2}>
        <span className={styles.section__title}>The Reception</span>
        <FontAwesomeIcon icon={faChampagneGlasses} className={styles.action__icon} />
        <Row center="xs" className={styles.section_detail_area}>
          <span className={styles.section__detail}>La Grange Country Club</span>
          <span className={styles.section__detail}>620 S Brainard Ave, La Grange, IL</span>
        </Row>
        <Row center="xs" className={styles.section_detail_area}>
          <span className={styles.action__detail}>Cocktail hour begins at 5pm</span>
          <span className={styles.action__detail}>The reception begins at 6pm</span>
        </Row>
      </Col>
      <Col sm={0} md={2}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={classnames(styles.hidden__sm_xs, styles.action__icon, styles.lateral_arrow)}
        />
        <FontAwesomeIcon icon={faArrowDown} className={classnames(styles.show__sm_xs, styles.action__icon)} />
      </Col>
      <Col sm={12} md={2}>
        <span className={styles.section__title}>The Bus</span>
        <FontAwesomeIcon icon={faBus} className={styles.action__icon} />
        <Row center="xs" className={styles.section_detail_area}>
          <span className={styles.section__detail}>
            There will be a shuttle bus from the ceremony to the reception
          </span>
          <span className={styles.action__detail}>At the end of the ceremony</span>
        </Row>
      </Col>
    </Row>
  </Grid>
);

export default DayOfDetails;
