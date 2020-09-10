import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewDetails.module.scss';

const NewDetails = ({ toggle }) => (
  <div className={styles.NewDetails__modal}>
    <button type="button" className={styles.NewDetails__close} onClick={toggle}>X</button>
    <p>
      In mid-May, we learned that the country club that was to host our reception would not be open in time to do so.
      Rather than guess at when Illinois might fully open again, we have decided to get married in a family-only
      ceremony on our original date, June 13th 2020.
    </p>

    <p>
      We still want to have our full wedding day,
      with ceremony and reception. Weapos;ve decided to do that on June 25th,
      2022, as a vow renewal. The location will remain the same.

      We hope to see you there!
    </p>
    <p>
      - Eileen and Dan
    </p>
  </div>
);

NewDetails.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default NewDetails;
