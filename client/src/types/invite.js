import PropTypes from 'prop-types';
import guest from './guest';
import event from './event';

const invite = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  event: event.isRequired,
  guest: guest.isRequired
};

export default PropTypes.shape(invite);
