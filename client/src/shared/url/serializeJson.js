const serializeJson = (obj) => {
  const queryPieces = Object.keys(obj).reduce((str, key) => (
    str.push(`${key}=${encodeURIComponent(JSON.stringify(obj[key]))}`)
  ), []);
  return queryPieces.join('&');
};

export default serializeJson;
