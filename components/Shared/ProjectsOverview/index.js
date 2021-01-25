import React, { Component} from "react";
import DashLayout from '../DashLayout';
import apiClient from '../../../Services/apiClient'
import State from '../State'
import ProjectsOverviewList from "./ProjectsOverviewList";
import NotifySlack from 'Components/Shared/Actions/NotifySlack'
import { newMessage } from 'Services/slackMessage';
// import timeConvert from 'Services/timeConvert'


class ProjectsOverView extends Component {
	constructor(props){
		super()
		this.state = {
			projects: [],
			isError: false,
			isMounted: false
		}
	}
	async fetchData(){
		try {
			let {data: projectsList} = await apiClient.getOngoingProjects()
      this.setState({
        isMounted: true,
        projects: projectsList.records
      })
		} catch (error) {
			this.setState({isError: true})
		}
	}
	componentDidMount(){
		this.fetchData()
	}
	renderContent(){
		if (this.state.isMounted){
			return <ProjectsOverviewList projects={this.state.projects}/>
		} else if(!this.state.isMounted && this.state.isError){
			return <State error/>
		} else {
			return <State loading/>
		}
	}
	getThumbnail(thumbnailList){
    if (thumbnailList && thumbnailList.length > 0){
      return thumbnailList[0].thumbnails.large.url
    } else return 'http://placehold.jp/20/f9f9f9/d1d1d1/320x160.png?text=%3Ao'
  }
	renderSlackMessage(){
		const slackMsg = newMessage("Daily Work 日常工作");
		slackMsg.addText(`*大家好* *These are today's projects*`);
		// slackMsg.addDivider()
		// var d = new Date();
		// var month = [];
		// month[0] = "January";
		// month[1] = "February";
		// month[2] = "March";
		// month[3] = "April";
		// month[4] = "May";
		// month[5] = "June";
		// month[6] = "July";
		// month[7] = "August";
		// month[8] = "September";
		// month[9] = "October";
		// month[10] = "November";
		// month[11] = "December";
		// var currentMonth = month[d.getMonth()];

		this.state.projects.map(item => {
			if(item.fields['Status'] === 'Ongoing'){
				let project = {
					name: item.fields['Project Name'] || '',
					// timePerDay: timeConvert.secondsToHms(item.fields['Time Per Day']) || '',
					// timeLeftThisMonth: timeConvert.secondsToHms(item.fields['Time Left This Month']) || '',
					// thumbnail: this.getThumbnail(item.fields['Thumbnails'])
				}
				// slackMsg.addListItem(
				// 	`:star: ${project.name}\n${project.timePerDay} per day\n${project.timeLeftThisMonth} left for ${currentMonth}`,
				// 	`${project.thumbnail}`
				// )
				slackMsg.addListItem(
					`:star: ${project.name}\n`,
					// `${project.thumbnail}`
				)
			} return false
		})
		
		return <NotifySlack message={slackMsg}/>
	}
	render() {
		return (
			<DashLayout 
				pageTitle="Daily Work" 
				pageOptions={this.renderSlackMessage()}
				>
				{this.renderContent()}

			</DashLayout>
		);
	}
}

export default ProjectsOverView;
