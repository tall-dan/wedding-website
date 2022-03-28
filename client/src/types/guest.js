import PropTypes from 'prop-types';

const guest = {
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired
};

export default PropTypes.shape(guest);
