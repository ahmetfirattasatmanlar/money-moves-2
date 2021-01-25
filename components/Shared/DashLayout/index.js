import React from "react";
import { Layout, PageHeader } from 'antd';
import AppContext from 'Services/AppContext'
import AppSider from 'Components/Shared/AppSider';
const { Content,Header } = Layout;



function DashLayout (props) {
  return (
    <AppContext.Consumer>
      {(context) => (
          <Layout>
            {context.user && <AppSider/>}
            <Layout>
              {(props.pageTitle) && 
                <Header >
                  <PageHeader 
                    // onBack={() => null}
                    title={props.pageTitle}
                    subTitle={props.pageSubtitle && props.pageSubtitle}
                  >
                    {props.pageOptions && props.pageOptions}

                  </PageHeader>
                </Header>
              }
              <Content>
                {props.children}
              </Content>
            </Layout>
          </Layout>
      )}
    </AppContext.Consumer>
  );
}

export default DashLayout;
