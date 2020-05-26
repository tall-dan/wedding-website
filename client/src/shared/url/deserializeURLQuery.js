const deserializeURLQuery = (url = window.location.href) => {
  const query = url.split('?')[1];
  const properties = decodeURIComponent(query).split('&');

  return properties.reduce((object, property) => {
    let [key, value] = property.split('=');
    const valueIsArray = key.endsWith("[]");
    if (valueIsArray) {
      key = key.substring(0, key.length - 2);
      if (object[key]) {
        object[key].push(value);
      } else {
        object[key] = [value];
      }
    } else {
      object[key] = value;
    }

    return object;
  }, {});
}

export default deserializeURLQuery;
