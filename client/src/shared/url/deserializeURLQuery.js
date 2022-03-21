import { castArray } from 'lodash';

const urlStringRepresentsArray = string => string.includes('[]') && !string.split('[]')[0].includes(']');
const urlStringRepresentsObject = string => string.includes(']') && !urlStringRepresentsArray(string)

// 'guests[][id]=1&guests[][id]=2
// 'guests[id]=1&guests[id]=2
const jsonFromUrlParams = (params, properties = {}) =>  {
  return params.reduce((object, property) => {
    const [key, ...value] = property.split('='); // eslint-disable-line prefer-const
    object[key] = JSON.parse(value.join('='))
    return object;
  }, properties);
}

const deserializeURLQuery = (url = window.location.href) => {
  const query = url.split('?')[1];
  const properties = decodeURIComponent(query).split('&');

  return jsonFromUrlParams(castArray(properties))
};

export default deserializeURLQuery;
