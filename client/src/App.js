import React from 'react';
import styles from './App.module.scss';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import NavItem from './Navigation/NavItem/NavItem';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Navigation>
        <NavItem title="Our Wedding" />
        <NavItem title="Accomodations" />
        <NavItem title="Photos" />
        <NavItem title="Registry" />
        <NavItem title="RSVP" />
      </Navigation>
    </div>
  );
}

export default App;
