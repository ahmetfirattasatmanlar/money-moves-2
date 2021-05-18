import AppWrapper from 'components/_common/app-wrapper'
import LogoContainer from 'components/_common/LogoContainer'
import ContentBody from "components/_common/ContentBody"
import ApplicationsCard from "components/_common/ApplicationsCard"

export default function Applications() {

  return (
    <AppWrapper>
      <div className="d-flex flex-column justify-content-around align-items-center">
        <LogoContainer/>
        <ContentBody>
          <p style={{color: "black", border: "1px solid black"}}>Applications</p>
          <button type="button">Dropdown</button>
          <div className="d-flex flex-column align-items-center" style={{height: "80%", width: "100%"}}>
            <ApplicationsCard/>
            <ApplicationsCard/>
            <ApplicationsCard/>
            <ApplicationsCard/>
            <ApplicationsCard/>
            <ApplicationsCard/>
            <ApplicationsCard/>
            <ApplicationsCard/>
            <ApplicationsCard/>
          </div>
        </ContentBody>
      </div>
    </AppWrapper>
  )
}
