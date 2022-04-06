import React from 'react';
import styles from './Thanks.module.scss';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';

const Thanks = () => {
  const { going } = (deserializeURLQuery() || { going: true });
  const signOff = going ? "We're looking forward to celebrating with you!" : "We're bummed you can't make it";
  return (
    <h2 className={styles.Thanks}>
      Thanks for your RSVP! {signOff}
    </h2>
  );
};


export default Thanks;
