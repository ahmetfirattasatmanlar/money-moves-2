import React, {Fragment} from 'react';
import Screen from '../Screen'

function ScreenList(props) {
  let screenProps = {
    size: props.size
  }
  return (
    <Fragment>
      {props.screens.map((screen, i) => {
        return <Screen key={screen.id} {...screen} {...screenProps}/>
      })}
    </Fragment>
  )
}

ScreenList.defaultProps = {
  screens: [],
  size: ''
}


export default ScreenList;