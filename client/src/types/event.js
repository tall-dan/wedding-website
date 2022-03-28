import PropTypes from 'prop-types';

const event = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PropTypes.shape(event);
