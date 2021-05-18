import AppWrapper from 'components/_common/app-wrapper'
import LogoContainer from 'components/_common/LogoContainer'
import ContentBody from "components/_common/ContentBody"
import Calendar from "components/_common/Calendar"
import ActivityCard from "components/_common/ActivityCard"



export default function Activity() {
  return (
    <AppWrapper>
      <div className="d-flex flex-column justify-content-around align-items-center">
        <LogoContainer/>
        <ContentBody>
          <p style={{color: "black", fontSize: "2rem"}}>Activity</p>
          <Calendar/>
          <div className="d-flex flex-column align-items-center" style={{width: "100%", height: "80%"}}>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div>
        </ContentBody>
      </div>
    </AppWrapper>
  )
}
