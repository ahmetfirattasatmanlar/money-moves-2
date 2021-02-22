import React, {Fragment} from "react";
import {Tag} from 'antd';

function TagList (props) {
  let renderTag = (tag) => {
    if(props.disabled){
      return <span className="text-muted">{tag}</span>
    } else{
      return <a href={`/portfolio/tags/${tag}`} className="text-primary">{tag}</a>
      // return <span className="text-muted">{tag}</span>
    }
  }
  return (
    <Fragment>
      {props.tags.map((tag, i) => 
        <Tag key={i} onClick={()=> {	window.scrollTo(0, 0)}}>
          {renderTag(tag)}
        </Tag>
      )}
    </Fragment>
  );
}

TagList.defaultProps = {
  tags: []
}

// export default withRouter(TagList);
export default TagList;
