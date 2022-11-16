import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.scss';

function SectionTitle({ title }) {
  return (
    <div className={styles.SectionTitle}>
      <div className={styles.SectionTitle__decoration} />
      <div className={styles.SectionTitle__title}>
        {title}
      </div>
      <div className={styles.SectionTitle__decoration} />
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};
export default SectionTitle;
