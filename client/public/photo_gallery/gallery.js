const getImagePaths = directory => directory.keys().map(item => (
  item.replace('./', '')
));

const directory = require.context('./', false, /\.(jpg)$/);
export default getImagePaths(directory);
