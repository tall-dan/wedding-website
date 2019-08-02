import React from 'react';
import moment from 'moment-timezone';
import styles from './CoverTitle.module.scss';
import { ceremonyStart } from '../../../constants';

const CoverTitle = () => (
  <header className={styles.CoverTitle}>
    <h1 className={styles.CoverTitle__betrothed}>Dan and Eileen</h1>
    <h2 className={styles.CoverTitle__when_and_where}>
      <span className={styles.CoverTitle___date}>{ceremonyStart.format('MMMM DD, YYYY')}</span>
      <span className={styles.separator}> • </span>
      <span className={styles.CoverTitle___location}>Lagrange, IL</span>
    </h2>
    <h2 className={styles.CoverTitle__countdown}>{`${ceremonyStart.diff(moment(), 'days')} Days`}</h2>
  </header>
);

export default CoverTitle;
