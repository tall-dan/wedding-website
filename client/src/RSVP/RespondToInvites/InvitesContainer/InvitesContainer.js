import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InviteeResponse from './InviteeResponse/InviteeResponse';
import titleize from '../../../shared/titleize';
import serializeJson from '../../../shared/url/serializeJson';
import invite from '../../../types/invite';

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

  guestsAcceptingReceptionInvites = invites => this.props.invites.reception.reduce((acceptingGuests, blankInvite) => {
    if (invites[blankInvite.id] === 'accepted') return acceptingGuests.concat(blankInvite.guest);
    return acceptingGuests;
  }, [])

  nextInviteStep = (invites) => {
    if (this.currentlyRespondingTo() === 'reception') {
      const guests = this.guestsAcceptingReceptionInvites(invites);
      const eventId = this.props.invites[this.currentlyRespondingTo()][0].event.id;
      const query = serializeJson({ guests, eventId });
      // TODO: if no one is accepting, direct to some see ya later page
      window.location.href = `/rsvp/mealSelection?${query}`;
    } else {
      this.setState(prevState => ({ ...prevState, eventResponseIndex: prevState.eventResponseIndex + 1 }));
    }
  }

  currentlyRespondingTo = () => this.events[this.state.eventResponseIndex]

  render = () => (
    <>
      <InviteeResponse
        invites={this.props.invites[this.currentlyRespondingTo()]}
        saveInvites={this.nextInviteStep}
        eventName={titleize(this.currentlyRespondingTo())}
      />
    </>
  )
}

InvitesContainer.propTypes = {
  invites: PropTypes.arrayOf(invite).isRequired
};

export default InvitesContainer;
