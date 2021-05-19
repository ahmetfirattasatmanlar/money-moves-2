import AppWrapper from 'components/_common/app-wrapper'
import LogoContainer from 'components/_common/LogoContainer'
import ContentBody from "components/_common/ContentBody"
import ApplicationsCard from "components/_common/ApplicationsCard"
import PageTitle from "components/_common/PageTitle"
import Dropdown from "components/_common/Dropdown"

export default function Applications() {

  return (
    <AppWrapper>
      <div className="d-flex flex-column justify-content-around align-items-center">
        <LogoContainer/>
        <ContentBody>
          <PageTitle title={"Applications"} element={<Dropdown/>}/>
          {/* <p style={{color: "black", border: "1px solid black"}}>Applications</p>
          <button type="button">Dropdown</button> */}
          <div className="d-flex flex-column align-items-center" style={{height: "80%", width: "100%"}}>
            <ApplicationsCard src={"/powerSports.svg"} status={"Pending"} amount={"50.00"} date={"23 Nov, 2021 10:33am"} cardName={"Power Sports"}/>
            <ApplicationsCard src={"/cashLoan.svg"} status={"Rejected"} amount={"50.00"} date={"23 Nov, 2021 10:33am"} cardName={"Power Sports"}/>
            <ApplicationsCard src={"/powerSports.svg"} status={"Approved"} amount={"50.00"} date={"23 Nov, 2021 10:33am"} cardName={"Power Sports"}/>
            <ApplicationsCard src={"/powerSports.svg"} status={"Approved"} amount={"50.00"} date={"23 Nov, 2021 10:33am"} cardName={"Power Sports"}/>
            <ApplicationsCard src={"/cashLoan.svg"} status={"Rejected"} amount={"50.00"} date={"23 Nov, 2021 10:33am"} cardName={"Power Sports"}/>
            <ApplicationsCard src={"/powerSports.svg"} status={"Approved"} amount={"50.00"} date={"23 Nov, 2021 10:33am"} cardName={"Power Sports"}/>
          </div>
        </ContentBody>
      </div>
    </AppWrapper>
  )
}
