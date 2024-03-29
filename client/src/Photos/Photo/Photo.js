import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.module.scss';

function Photo({ imageURL }) {
  return <div className={styles.Photo__photo} style={{ backgroundImage: `url(${imageURL})` }} />;
}

Photo.propTypes = {
  imageURL: PropTypes.string.isRequired
};
export default Photo;
