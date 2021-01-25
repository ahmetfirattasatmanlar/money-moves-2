import React from "react";
import { Link } from 'react-router-dom';
import AppContext from 'Services/AppContext';

function SharePublicLink (props){
  return (
    <AppContext.Consumer>
      {(context)=>(
        context.user && props.url && <Link to={`${props.url}`} target="_blank" className="btn btn-primary btn-sm btn-rounded align-self-center mr-3">Create Shareable Link</Link>
      )}
    </AppContext.Consumer>
  );
}

SharePublicLink.defaultProps = {
  url: null
}

export default SharePublicLink;
