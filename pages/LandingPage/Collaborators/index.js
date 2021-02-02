import React, { useEffect, useState} from 'react';
import apiClient from 'Services/apiClient';

export default function Collaborators(props){
  const [collabs, setCollabs] = useState()

  useEffect(() => {
    fetchCollabs()
  }, [])

  const fetchCollabs = async () =>{
    try {
      const {data: collabList} = await apiClient.getColaborators();
      setCollabs(collabList.records)
		} catch (e) {
			if(e.response) console.log(e.response)
		}
  }
  return (
    <div>
      Collaborators Here
    </div>
  )
}

