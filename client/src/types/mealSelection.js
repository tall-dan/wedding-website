import PropTypes from 'prop-types';
import guest from './guest';
import event from './event';

const mealSelection = {
  id: PropTypes.string,
  selection: PropTypes.string,
  event: event.isRequired,
  guest: guest.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default mealSelection;
