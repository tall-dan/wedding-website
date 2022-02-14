import React from 'react';
// import Photo from './Photo/Photo';
// import styles from './Photos.module.scss';
import images from './photo_gallery/gallery';

const Photos = () => images.map(file => (
  <div key={file}>
    <div id="my_nanogallery2" data-nanogallery2='{ "itemsBaseURL": "/photo_gallery/"}'>
      <a href={`${file}`} data-ngthumb={`thumbnails/${file}`} data-ngdesc={file}>blackhawks</a>
    </div>
  </div>
));
export default Photos;
