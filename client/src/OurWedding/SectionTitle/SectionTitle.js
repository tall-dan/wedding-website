import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title }) => (
  <div className={styles.SectionTitle}>
    <div className={styles.SectionTitle__decoration} />
    <div className={styles.SectionTitle__title}>
      {title}
    </div>
    <div className={styles.SectionTitle__decoration} />
  </div>
);

export default SectionTitle;
