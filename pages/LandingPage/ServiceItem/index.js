import React from 'react';
import PropTypes from 'prop-types'
import { FaChevronRight } from "react-icons/fa";
import  {Link} from 'react-router-dom'

export default function ServiceItem({service, description, goTo}){
  return (
    <Link to={`${goTo ? `/portfolio/tags/${goTo}` : '/portfolio'}`}>
      <div className="card">
        <div className="card-header bg-primary con-rounded-top">
          <h3 className="card-title m-0 text-white d-flex justify-content-between align-items-center">
            {service}
            <span className="op-5"><FaChevronRight/></span>
          </h3>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </Link>
    
  )
}


ServiceItem.propTypes = {
  service: PropTypes.string,
  description: PropTypes.string,
  goTo: PropTypes.string
}

