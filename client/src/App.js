import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import NavItem from './Navigation/NavItem/NavItem';

function App() {
  const location = useLocation();
  React.useEffect(() => {
    window.mixpanel.track('pageview', { path: location.pathname });
  }, [location]);

  return (
    <div className={styles.App}>
      <Header />
      <Navigation>
        <NavItem title="Our Wedding" />
        <NavItem title="Accommodations" />
        <NavItem title="Photos" />
        {
        /*
           When these are brought back, remember to move justify-content: center back into the media query in Navigation
        <NavItem title="Registry" />
        <NavItem title="RSVP" />
       */}
      </Navigation>
    </div>
  );
}

export default App;
