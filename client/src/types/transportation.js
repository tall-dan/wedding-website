import PropTypes from 'prop-types';
import guest from './guest';
import event from './event';

const transportation = {
  id: PropTypes.string,
  journeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  event: event.isRequired,
  guest: guest.isRequired
};

export default transportation;
