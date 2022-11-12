import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import styles from './Photos.module.scss';
import images from './photo_gallery/gallery';
import { metadata } from './photo_gallery/metadata';

/*
This component does some back bending to load jquery & nanogallery only when it is displayed
it also prevents jquery and nanogallery from loading at the same time, jquery has to be first
It's also modified c/p off of SO, and there's some antiquated pieces in here
*/
class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scriptsToLoad: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js',
        'https://cdn.jsdelivr.net/npm/nanogallery2/dist/jquery.nanogallery2.min.js'
      ]
    };
    this.handleScriptInject = this.handleScriptInject.bind(this);
  }

  handleScriptInject({ scriptTags }) {
    if (scriptTags) {
      const scriptTag = scriptTags[0];
      scriptTag.onload = () => {
        this.setState((prevState) => (
          { scriptsToLoad: prevState.scriptsToLoad.filter((s) => s !== scriptTag.src) }
        ));
      };
    }
  }

  render() {
    const { scriptsToLoad } = this.state;
    return (
      <>
        <Helmet
          script={[{ src: scriptsToLoad[0] }]}
          onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}
        />
        <div data-nanogallery2='{ "itemsBaseURL": "/photo_gallery/", "thumbnailWidth":  "auto", "thumbnailHeight":  250}'>
          { images.map((file) => (
            <a key={file} href={file} data-ngthumb={`thumbnails/${file}`} data-ngdesc={file}>{metadata[file]} </a>
          )) }
        </div>
      </>
    );
  }
}

export default Photos;
