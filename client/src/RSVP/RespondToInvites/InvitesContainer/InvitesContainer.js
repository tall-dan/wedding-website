import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InviteeResponse from './InviteeResponse/InviteeResponse';
import titleize from '../../../shared/titleize';
import serializeJson from '../../../shared/url/serializeJson';
import invite from '../../../types/invite';
import sortGuestObjects from '../../../shared/sorts';

// component design
// top level component that keeps track of invites, and passes invites to a lower level invite display component
// invite display component displays the invitees and what their options are

class InvitesContainer extends Component {
  constructor(props) {
    super(props);
    this.events = Object.keys(props.invites);
    // order is created via priority in event.rb, respondToInvites.js
    this.state = { eventResponseIndex: 0 };
  }

  guestsAcceptingReceptionInvites = (invites) => this.props.invites.reception.reduce((acceptingGuests, blankInvite) => {
    if (invites[blankInvite.id] === 'accepted') return acceptingGuests.concat(blankInvite.guest);
    return acceptingGuests;
  }, []);

  nextInviteStep = (invites) => {
    if (this.currentlyRespondingTo() === 'reception') {
      const guests = this.guestsAcceptingReceptionInvites(invites);
      if (!guests.length) {
        const query = serializeJson({ going: false });
        window.location.href = `/rsvp/thanks?${query}`;
      } else {
        const eventId = this.props.invites[this.currentlyRespondingTo()][0].event.id;
        const query = serializeJson({ guests, eventId });
        window.location.href = `/rsvp/mealSelection?${query}`;
      }
    } else {
      this.respondToNewPage(this.state.eventResponseIndex + 1);
    }
  };

  currentlyRespondingTo = () => this.events[this.state.eventResponseIndex];

  respondToNewPage = (pageIndex) => this.setState((prevState) => ({ ...prevState, eventResponseIndex: pageIndex }));

  backFn = () => {
    if (this.state.eventResponseIndex) this.respondToNewPage(this.state.eventResponseIndex - 1);
    else window.history.back();
  };

  render() {
    return (
      <InviteeResponse
        // eslint-disable-next-line react/destructuring-assignment
        invites={sortGuestObjects(this.props.invites[this.currentlyRespondingTo()])}
        saveInvites={this.nextInviteStep}
        eventName={titleize(this.currentlyRespondingTo())}
        backFn={this.backFn}
      />
    );
  }
}

InvitesContainer.propTypes = {
  invites: PropTypes.shape({
    rehearsal_dinner: PropTypes.arrayOf(invite).isRequired,
    reception: PropTypes.arrayOf(invite).isRequired
  }).isRequired
};

export default InvitesContainer;
