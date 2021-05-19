import AppWrapper from 'components/_common/app-wrapper'
import LogoContainer from 'components/_common/LogoContainer'
import ContentBody from "components/_common/ContentBody"
import Calendar from "components/_common/Calendar"
import ActivityCard from "components/_common/ActivityCard"
import PageTitle from "components/_common/PageTitle"



export default function Activity() {
  return (
    <AppWrapper>
      <div className="d-flex flex-column justify-content-around align-items-center">
        <LogoContainer/>
        <ContentBody>
          <PageTitle title={"Activity"} element={<Calendar/>} align={"center"}/>
          <div className="d-flex flex-column align-items-center" style={{width: "100%", height: "80%"}}>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
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
