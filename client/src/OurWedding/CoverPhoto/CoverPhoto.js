import React from 'react';
import styles from './CoverPhoto.module.scss';
import CoverTitle from './CoverTitle/CoverTitle';

const CoverPhoto = () => (
  <div className={styles.CoverPhoto}>
    <div className={styles.CoverPhoto__matte}>
      <div className={styles.CoverPhoto__photo} />
      <CoverTitle />
    </div>
  </div>
);
export default CoverPhoto;
