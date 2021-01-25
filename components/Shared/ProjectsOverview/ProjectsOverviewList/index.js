import React, {Component} from 'react';
import { Button, Statistic, Row, Col, Icon, Drawer }  from 'antd';
import timeConvert from 'Services/timeConvert'
import Iframe from '../../Iframe'
import AppContext from 'Services/AppContext'


class ProjectsOverviewList extends Component {
  constructor(props){
    super(props);
    this.state = { 
      visible: false 
    }
  }

  getThumbnail(thumbnailList){
    if (thumbnailList && thumbnailList.length > 0){
      return thumbnailList[0].thumbnails.large.url
    } else return 'http://placehold.jp/20/f9f9f9/d1d1d1/320x160.png?text=%3Ao'
  }
  showDrawer =()=>{
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  
  renderProjects(){
    return this.props.projects.map((item) => {
        let project = {
          name: item.fields['Project Name'] || '',
          thumbnail: this.getThumbnail(item.fields['Thumbnails']),
          timePerDay: timeConvert.secondsToHms(item.fields['Time Per Day']) || null,
          availableTime: timeConvert.secondsToHms(item.fields['Time Left This Month']) || null
        }
        return <div className="card mb-3" key={item.id}>
          <div className="row no-gutters">
            <div className="col-auto">
              <div className="card-img-container card-img-container-sm">
                <img src={project.thumbnail} className="card-img" alt="..."/>
              </div>
            </div>
            <div className="col">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title m-0">{project.name}</h5>
                  {/* {project.hoursPerDay &&
                    <Badge
                      count={`${project.hoursPerDay} hours per day`}
                      style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
                    />
                  } */}
                  <AppContext.Consumer>
                    {(context)=>(
                      context.user && <Button className="btn btn-sm" onClick={this.showDrawer}>Log Time</Button>
                    )}
                  </AppContext.Consumer>
                </div>
                <Row>
                  {project.timePerDay &&
                  <Col span={12}>
                    <Statistic title="Time Per Day" value={`${project.timePerDay}`} prefix={<Icon type="clock-circle" />} />
                  </Col>
                  }
                  {project.availableTime &&
                  <Col span={12}>
                    <Statistic title="Time Left This Month" value={project.availableTime} prefix={<Icon type="clock-circle" />} />
                  </Col>
                  }

                </Row>
                {/* <Row>
                  <Col>
                    <NotifySlack />
                  </Col>
                </Row> */}
                <Drawer
                  // title="Log Time"
                  placement="right"
                  closable={true}
                  onClose={this.onClose}
                  visible={this.state.visible}
                  className='custom-drawer'
                >
                  <Iframe logTime/>
                </Drawer>
                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
        </div>
      })
  }
  render(){
    return (
      this.renderProjects()
    )
  }
}

export default ProjectsOverviewList;