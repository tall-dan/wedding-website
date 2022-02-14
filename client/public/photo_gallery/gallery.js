const getImagePaths = directory => directory.keys().map(item => (
  item.replace('./', '')
));

const directory = require.context('./', false, /\.(jpg)$/);
export default getImagePaths(directory);

/*
let images = [];
debugger;
imagePaths.map((path) => images.push(require("./" + path)));

export default images
*/
