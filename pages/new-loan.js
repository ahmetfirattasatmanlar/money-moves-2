import AppWrapper from 'components/_common/app-wrapper'
import LogoContainer from 'components/_common/LogoContainer'
import ContentBody from "components/_common/ContentBody"
import LoanProgramCard from "components/_common/LoanProgramCard"
import PageTitle from "components/_common/PageTitle"

export default function NewLoan() {
  return (
    <AppWrapper>
      <div className="d-flex flex-column justify-content-around align-items-center">
        <LogoContainer/>
        <ContentBody>
          <div class="progress w-75 border mt-4" style={{height: "10px"}}>
            <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <PageTitle title={"New Loan"} subTitle={"We have a program to suit your needs"} upperTitle={"Choose a program"} align={"center"}/>
          <div className="d-flex p-0 justify-content-around container-fluid mt-4">
            <LoanProgramCard src={"/homeImprovement.svg"} cardName={"Home Improvement"}/>
            <LoanProgramCard src={"/loanPowerSport.svg"} cardName={"Power Sports"}/>
          </div>
          <div className="d-flex p-0 justify-content-around container-fluid mt-4">
            <LoanProgramCard src={"/medicalDental.svg"} cardName={"Medical / Dental"}/>
            <LoanProgramCard src={"/cashLoan.svg"} cardName={"Cash Loans"}/>
          </div>

          
        </ContentBody>
      </div>
    </AppWrapper>
  )
}