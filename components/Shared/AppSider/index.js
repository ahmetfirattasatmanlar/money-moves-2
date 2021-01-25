import React from 'react';
import Navigation from 'Components/Shared/Navigation';
import { Layout} from 'antd';
import AppContext from 'Services/AppContext';
const { Sider } = Layout;





function AppSider(props) {
  return (
    <AppContext.Consumer>
      {(context)=>(
        <Sider
          breakpoint="md"
          collapsed>
        {context.user && <Navigation/>}  
      </Sider>
      )}
    </AppContext.Consumer>
  )
}

export default AppSider;