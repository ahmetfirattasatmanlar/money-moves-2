import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInvision } from '@fortawesome/free-brands-svg-icons'


function InvisionLink(props) {
  return (
    <a href={props.url && props.url} target="_blank" rel="noopener noreferrer" className="invision-link">Go to Invision <FontAwesomeIcon icon={faInvision}/></a>
  )
}
InvisionLink.defaultProps = {
  url: ''
}
export default InvisionLink;