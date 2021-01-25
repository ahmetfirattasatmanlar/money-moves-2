import React from 'react';
import PropTypes from 'prop-types'

export default function Chip({content}){
  return (
    <div className="badge p-1 pr-2 badge-pill badge-primary h6 d-inline-flex align-items-center ">
      <span className="badge badge-pill badge-light mr-2 d-flex align-items-center justify-content-center">{content[0]}</span>
      {content}
    </div>
  )
}

Chip.propTypes = {
  content: PropTypes.string
}
