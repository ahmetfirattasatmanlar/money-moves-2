import React, {Component} from 'react';
import { List } from 'antd';
import TimesheetItem from 'Components/Shared/Timesheet/TimesheetItem';

class Timesheet extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    // this.refreshTasks
  }
    
  getTasks(){
    let tasksFiltered = []
    if(this.props.tasks.length > 0){
      this.props.tasks.map(task => {
        if((task.fields['Collaborator'] && task.fields['Collaborator'][0]) === this.props.filter){
          tasksFiltered.push(task)
        } return false
      })
      if(this.props.filter.toLowerCase() === 'all') {
        return this.props.tasks
      } else return tasksFiltered
    }
    return tasksFiltered
  }
  paginationProps(){
    let props;
    if(this.props.tasks.length > 0){
      if(this.getTasks().length > this.props.pageSize){
        props = {
          pagination : {
            onChange: page => {
              window.scrollTo(0, 0)
            },
            pageSize: this.props.pageSize
          }
        }
      } else {
        props = null
      }
    }
    return props      
  }

  render(){
    return (
      <List
        {...this.paginationProps()}
        className="ant-list-condensed"
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={this.getTasks()}
        renderItem={item => {
          return<TimesheetItem {...item.fields} id={item.id} handleRefresh={this.props.handleRefresh}/>
        }}
      />
    )
  }
}

Timesheet.defaultProps = {
  tasks: [],
  pageSize: 30
}

export default Timesheet;