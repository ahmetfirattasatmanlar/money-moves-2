import React, { Component } from "react";
import apiClient from 'services/apiClient';
import TagList from 'components/_common/tags/TagList' ;
import Spinner from 'components/_common/spinner'


export default function AllTags(props){

  const [tags, setTags] = useState([])

  useEffect(() => fetchData(), [0])

  const fetchData = async () =>{
    try {
      const {data: tagslist} = await apiClient.getAllPortfolio();
      console.log(tagslist)
      // setData({
      //   tags: this.getTags(portfolioList.records),
      //   isMounted: true
      // })
		} catch (e) {
			if(e.response){console.log('portfolio didnt load')}
		}
  }

  return (
    <div>
      Tags
    </div>
  )
}



// class AllTags extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       tags: [],
//       isMounted: false
//     };
//   }
//   async fetchData(){
//     try {
//       const {data: portfolioList} = await apiClient.getAllPortfolio();
//       this.setState({
//         tags: this.getTags(portfolioList.records),
//         isMounted: true
//       })
// 		} catch (e) {
// 			if(e.response){
// 				console.log('portfolio didnt load')
// 			}
// 		}
//   }
//   componentDidMount(){
//     this.fetchData()
//   }
//   getTags(portfolioList){
// 		let AllTags = {}
// 		if(portfolioList){
// 			portfolioList.map(project => {
// 				project.fields['Tags'].map(tag => {
// 					if(!(tag in AllTags)){
// 						AllTags[tag] = 1
// 					}
// 					AllTags[tag] += 1
// 					return false
// 				},)
// 				return false
// 			})
//     }
// 		let AllTagsSorted = Object.keys(AllTags).sort(function(a,b){return AllTags[b]-AllTags[a]})
// 		return AllTagsSorted
//   }
//   renderContent(){
//     return(
//       <div>
//         {this.state.isMounted ?
//           <TagList tags={this.state.tags}/>
//           :
//           <Spinner/>
//         }
//       </div>
//     )
//   }
// 	render() {
//     return(
//       this.renderContent()
//     )
//   }
// }

// export default AllTags;
