import { castArray } from 'lodash';

const jsonFromUrlParams = (params, properties = {}) => params.reduce((object, property) => {
  const [key, ...value] = property.split('='); // eslint-disable-line prefer-const
  object[key] = JSON.parse(value.join('=')); // eslint-disable-line no-param-reassign
  return object;
}, properties);

const deserializeURLQuery = (url = window.location.href) => {
  const query = url.split('?')[1];
  const properties = decodeURIComponent(query).split('&');

  return jsonFromUrlParams(castArray(properties));
};

export default deserializeURLQuery;
