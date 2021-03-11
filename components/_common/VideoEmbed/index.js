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
  )
}

VideoEmbed.defaultProps = {
  url: ''
}


export default VideoEmbed;
