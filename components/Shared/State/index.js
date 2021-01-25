import React, { Fragment } from 'react';
import { Empty, Button, message, Skeleton } from 'antd';


function State(props) {
  let renderMessage = () => {
    if(props.error){ return message.error('There was an error loading the content')}
    else {return false}
  }
  let renderDescription = () => {
    if(props.error) { return `Sorry, we couldn't load your data`}
    else if(props.loading){return ``}
    else {return `Sorry, we don't know what happened`}
  }
  let renderRefreshButton = () => {
    if(props.error) {return <Button type="primary" onClick={()=> window.location.reload()}>Refresh Page</Button>}
    else {return false}
  }
  let renderImage = () => {
    if(props.loading) { return (<Fragment><Skeleton active /><Skeleton active /></Fragment>)}
    else { return 'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original'}
  }
  return (
    <div>
      <Empty
        image={renderImage()}
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
            {renderDescription()}
          </span>
        }
      >
      {renderRefreshButton()} 
      {renderMessage()}
      </Empty>
    </div>
  )
}

export default State;