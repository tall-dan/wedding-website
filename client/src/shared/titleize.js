import { capitalize } from 'lodash';

const titleize = string => string.split('_').map(capitalize).join(' ');
export default titleize;
