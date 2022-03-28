import React from 'react';
import { useLocation } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import styles from './App.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import NavItem from './Navigation/NavItem/NavItem';
import client from './shared/graphQLClient';

function App() {
  const location = useLocation();
  React.useEffect(() => {
    window.mixpanel.track('pageview', { path: location.pathname });
  }, [location]);

  return (
    <ApolloProvider client={client}>
      <div className={styles.App}>
        <Header />
        <Navigation>
          <NavItem title="Our Wedding" />
          <NavItem title="Accommodations" />
          <NavItem title="Photos" />
          {
          /*
          <NavItem title="RSVP" />
          <NavItem title="Registry" />
         */}
        </Navigation>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
