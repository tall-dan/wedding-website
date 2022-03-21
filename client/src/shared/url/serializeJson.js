import { castArray } from 'lodash';

// {guests: [1,2,3]} => guests[]=1&guests[]=2&guests=3
const serializeJson = (obj, prefix) => {
  let str = [], p, k, v, arrayProperty;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      v = obj[p]
      if (Array.isArray(v)) {
        arrayProperty = p + '[]'
        v.forEach(i => str.push(serializeJson(i, arrayProperty)))
      } else if (typeof v === 'object') {
        k = prefix ? prefix + "[" + p + "]" : p
        str.push(serializeJson(v, k))
      } else {
        k = prefix ? prefix + "[" + p + "]" : p
        str.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
  }
  return str.join("&");
}

export default deserializeURLQuery;
