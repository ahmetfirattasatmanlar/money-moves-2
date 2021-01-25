import React, { Component } from "react";
import { List, Skeleton, Avatar, Modal, Button, Icon, message } from 'antd';
import getThumb from 'Services/getThumb';
import timeConvert from 'Services/timeConvert';
import apiClient from "Services/apiClient";
const { confirm } = Modal;

class TimesheetItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
    this.showDeleteConfirm = this.showDeleteConfirm.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }
  deleteTask(){
    const {id, handleRefresh} = this.props;
    try {
      apiClient.deleteTask(id)
      message
      .loading('Deleting Task..')
      .then(() => {
        handleRefresh();
        message.success('Task Deleted', 2.5)
      })
    } catch (error) {
      message.error('Something went wrong, try again later')
    }
  }
  showDeleteConfirm() {
    let that = this;
    confirm({
      title: 'Are you sure delete this task?',
      // content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        that.deleteTask()
      },
      // onCancel() {
      //   console.log('Cancel');
      // },
    });
  }

	render() {
    let pic = () => {
      return this.props['Pic'] ? getThumb(this.props['Pic'][0], 'small') : null
    }
    let task = {
        id: this.props.id,
        name: this.props['Collaborator Name'] || '',
        desc: this.props['Description'] || '',
        project: this.props['Project Name'] || '',
        day: this.props['Day Number'] || '',
        month: this.props['Month Name'] || '',
        duration: timeConvert.secondsToHM(this.props['Time']) || '',
        pic: pic(),
      //   // amount: item.fields['Amount'] || '',
      //   // payment: item.fields['Payment Range'] || '',
      //   // thumbnail: this.getThumbnail(item.fields['Thumbnails']),
      //   // timeUsed: timeConvert.secondsToHms(item.fields['Total Time Used']) || ''
      }
		return (
			<List.Item>
        <Skeleton avatar title={false} loading={this.state.isLoading} active>
          <List.Item.Meta
            avatar={
              <Avatar src={task.pic} />
            }
            title={<strong>{task.month} {task.day} | {task.project}</strong>}
            description={
              <span>
                {/* {task.name}:  */}
                {task.desc}
              </span>
            }
          />
          <div className="d-flex align-items-center">
            <strong>{task.duration}</strong>
            <Button onClick={this.showDeleteConfirm} type="link">
              <Icon type="delete"/>
            </Button>
          </div>
        </Skeleton>
      </List.Item>
		);
	}
}

export default TimesheetItem;
