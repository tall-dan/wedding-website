import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './Navigation.module.scss';
import OurWedding from '../OurWedding/OurWedding';
import Accommodations from '../Accommodations/Accommodations';
import Photos from '../Photos/Photos';
import Registry from '../Registry/Registry';
import RSVP from '../RSVP/RSVP';

const Navigation = ({ children }) => (
  <Router>
    <nav className={styles.Navigation}>
      {children}
    </nav>
    <Route exact path="/" component={OurWedding} />
    <Route path="/ourWedding" component={OurWedding} />
    <Route path="/accommodations" component={Accommodations} />
    <Route path="/photos" component={Photos} />
    <Route path="/registry" component={Registry} />
    <Route path="/rsvp" component={RSVP} />
  </Router>
);

Navigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Navigation;
