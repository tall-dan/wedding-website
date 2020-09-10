import React from 'react';
import moment from 'moment-timezone';
import { Row, Col } from 'react-flexbox-grid';
import styles from './Header.module.scss';
import { ceremonyStart, newCeremonyStart } from '../constants';
import CovidMessage from './CovidMessage/CovidMessage';

const Header = () => (
  <header className={styles.Header}>
    <CovidMessage />
    <Row>
      <Col xs={2}>
        <div className={styles.flower_image}>
          <img
            src="https://static.xoedge.com/xo-guest-services/assets/guest/themes/forsythia-citrus/theme_image-de0d890ff4b1e2ac6b6c096a58fb1976.png"
            alt=""
          />
        </div>
      </Col>
      <Col xs={8}>
        <Row center="xs">
          <div className={styles.Header__info}>
            <h1 className={styles.Header__betrothed}>Eileen & Dan</h1>
            <h2 className={styles.Header__when_and_where}>
              <span className={styles.Header__activity}>Wedding</span>
              <span className={styles.separator}> • </span>
              <span className={styles.Header__date}>{ceremonyStart.format('MMMM DD, YYYY')}</span>
              <span className={styles.separator}> • </span>
              <span className={styles.Header__date}>{`${ceremonyStart.diff(moment(), 'days')} Days`}</span>
            </h2>
            {// <h2 className={styles.Header__countdown}>{`${ceremonyStart.diff(moment(), 'days')} Days`}</h2>
            }
            <h2 className={styles.Header__when_and_where}>
              <span className={styles.Header__activity}>Vow Renewal & Reception</span>
              <span className={styles.separator}> • </span>
              <span className={styles.Header__date}>{newCeremonyStart.format('MMMM DD, YYYY')}</span>
              <span className={styles.separator}> • </span>
              <span className={styles.Header__date}>{`${newCeremonyStart.diff(moment(), 'days')} Days`}</span>
            </h2>
            {// <h2 className={styles.Header__countdown}>{`${newCeremonyStart.diff(moment(), 'days')} Days`}</h2>
            }
          </div>
        </Row>
      </Col>
    </Row>
  </header>
);

export default Header;
