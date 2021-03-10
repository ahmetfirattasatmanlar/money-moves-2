import React from 'react';
import State from 'Components/Shared/State'
import { Button, Icon } from 'antd'
import apiClient from 'Services/apiClient';

function NotifySlack({message}) {
  let sendNotification=()=>{
    try {
      // Activate This to Send Slack Notifiaction
      apiClient.sendSlackNotification(message);
    } catch (error) {
      return <State error/>
    }
    
  }
  return (
    <Button onClick={sendNotification} type='primary'><Icon type='slack'/>Send to Slack </Button>
  )
}

export default NotifySlack;