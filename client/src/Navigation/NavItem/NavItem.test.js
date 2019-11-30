import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItem';

const navItemWrapper = title => (
  shallow(<NavItem title={title} />)
);

describe('NavItem', () => {
  describe('#isActive', () => {
    context('at the base route', () => {
      context('when title matches home page title', () => {
        it('is active', () => {
          const navItem = navItemWrapper('Our Wedding').instance();
          expect(navItem.isActive('not_important', { pathname: '/' })).toBe(true);
        });
      });

      context('when title does not match home page title', () => {
        it('is not active', () => {
          const navItem = navItemWrapper('RSVP').instance();
          expect(navItem.isActive('not_important', { pathname: '/' })).toBe(false);
        });
      });
    });

    context('not at the base route', () => {
      context('when route matches page title', () => {
        it('is active', () => {
          const navItem = navItemWrapper('RSVP').instance();
          expect(navItem.isActive('not_important', { pathname: '/rsvp' })).toBe(true);
        });
      });

      context('when route matches page title', () => {
        it('is not active', () => {
          const navItem = navItemWrapper('RSVP').instance();
          expect(navItem.isActive('not_important', { pathname: '/accommodations' })).toBe(false);
        });
      });
    });
  });
});
