import React from 'react';

function VideoEmbed(props) {
  console.log(props)
  return (
    props.url &&
      <div className="video-card">
        <video 
          controls={false}
          autoPlay
          muted
          className="video-embed"
          src={props.url} />
      </div>
    // <div class="embed-responsive embed-responsive-16by9">
    //   <iframe title="video-yt" class="embed-responsive-item" src={props.url} allowfullscreen></iframe>
    // </div>
  )
}

VideoEmbed.defaultProps = {
  url: ''
}


export default VideoEmbed;