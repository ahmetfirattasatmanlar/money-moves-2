import React, { useState, useEffect } from "react";
import apiClient from 'services/apiClient';
import TagList from 'components/_common/taglist' ;


export default function AllTags(props){

  const [tags, setTags] = useState([])

  useEffect(() => fetchData(), [0])

  const fetchData = async () =>{
    try {
      // Need to change THIS
      const {data: taglist} = await apiClient.getTags();
      // console.log(taglist.records)
      setTags(taglist.records)
      // })
		} catch (e) {
			if(e.response){console.log('portfolio didnt load')}
		}
  }

  return tags ? <TagList tags={tags}/> : null

}
