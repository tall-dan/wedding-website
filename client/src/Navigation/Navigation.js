import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styles from './Navigation.module.scss';
import OurWedding from '../OurWedding/OurWedding';
import DayOfDetails from '../DayOfDetails/DayOfDetails';
import Accommodations from '../Accommodations/Accommodations';
import Photos from '../Photos/Photos';
import Registry from '../Registry/Registry';
import RSVP from '../RSVP/RSVP';
import SearchResults from '../RSVP/SearchResults/SearchResults';
import RespondToInvites from '../RSVP/RespondToInvites/RespondToInvites';
import MealSelection from '../RSVP/MealSelection/MealSelection';
import Transportation from '../RSVP/Transportation/Transportation';
import Thanks from '../RSVP/Thanks/Thanks';

function Navigation({ children }) {
  return (
    <>
      <nav className={styles.Navigation}>
        {children}
      </nav>
      <Route exact path="/" component={OurWedding} />
      <Route exact path="/ourVowRenewal" component={OurWedding} />
      <Route exact path="/dayOfDetails" component={DayOfDetails} />
      <Route exact path="/accommodations" component={Accommodations} />
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/registry" component={Registry} />
      <Route exact path="/rsvp" component={RSVP} />
      <Route exact path="/rsvp/search" component={SearchResults} />
      <Route exact path="/rsvp/respondToInvites" component={RespondToInvites} />
      <Route exact path="/rsvp/mealSelection" component={MealSelection} />
      <Route exact path="/rsvp/transportation" component={Transportation} />
      <Route exact path="/rsvp/thanks" component={Thanks} />
    </>
  );
}

Navigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Navigation;
