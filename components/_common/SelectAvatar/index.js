import React from 'react';
import {Avatar} from 'antd'

function SelectAvatar(props) {
  return (
    // <div className={`avatar-select ${renderActive()}`}>
    <Avatar shape="square" size='large' src={props.avatarUrl || 'http://placehold.jp/20/f9f9f9/d1d1d1/50x50.png?text=%3Ao'} alt=""/>
  )
}

export default SelectAvatar;