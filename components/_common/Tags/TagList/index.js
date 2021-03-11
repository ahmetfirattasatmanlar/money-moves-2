import React, {Fragment} from "react";
import {Tag} from 'antd';
import Link from 'next/link'


export default function TagList({tags}){
  // console.log(tags)

  return tags ? <div>
    {tags.map(tag => {
      return <Tag key={tag.id}><Link href={`/portfolio/tags/${tag.fields.Name}`} className="text-primary badge badge-sm">{tag.fields.Name}</Link></Tag>
    })}
</div> : null
}



// function TagList (props) {
//   console.log(props)
//   let renderTag = (tag) => {
//     if(props.disabled){
//       return <span className="text-muted">{tag}</span>
//     } else{
//       return <Link href={`/portfolio/tags/${tag}`} className="text-primary">{tag}</Link>
//     }
//   }
//   return (
//     <Fragment>
//       {props.tags.map((tag, i) =>
//         <Tag key={i} onClick={()=> {	window.scrollTo(0, 0)}}>
//           {renderTag(tag)}
//         </Tag>
//       )}
//     </Fragment>
//   );
// }

// TagList.defaultProps = {
//   tags: []
// }

// // export default withRouter(TagList);
// export default TagList;
