import React from 'react';

function Screen(props) {
  return (
    <div className={`project-thumbnail ${props.size && `project-thumbnail-${props.size}`}`}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.thumbnails.large.url || props.thumbnails.full.url} alt={props.filename}/>
      </a>
    </div>  
  )
}

Screen.defaultProps = {
  url: 'http://placehold.jp/20/f9f9f9/d1d1d1/320x160.png?text=%3Ao',
  thumbnails: {
    full:       {url: 'http://placehold.jp/20/f9f9f9/d1d1d1/320x160.png?text=%3Ao'},
    large:      {url: 'http://placehold.jp/20/f9f9f9/d1d1d1/320x160.png?text=%3Ao'},
    small:      {url: 'http://placehold.jp/20/f9f9f9/d1d1d1/320x160.png?text=%3Ao'}
  },
  filename: '',
  size: null
}
export default Screen;