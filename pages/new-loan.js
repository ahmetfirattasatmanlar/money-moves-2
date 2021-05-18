import AppWrapper from 'components/_common/app-wrapper'
import LogoContainer from 'components/_common/LogoContainer'
import ContentBody from "components/_common/ContentBody"
import LoanProgramCard from "components/_common/LoanProgramCard"

export default function NewLoan() {
  return (
    <AppWrapper>
      <div className="d-flex flex-column justify-content-around align-items-center">
        <LogoContainer/>
        <ContentBody>
          <p>Progress bar</p>
          <h1 style={{fontSize: "1.5rem"}}><b>Choose a program</b></h1>
          <h2 style={{fontSize: "0.7rem", letterSpacing: "1px"}}>We have a program to suit your needs</h2>
          <p style={{color: "black", border: "1px solid black"}}>New Loan</p>
          
          <div className="d-flex">
          <LoanProgramCard />
          <LoanProgramCard />
          </div>
          <div className="d-flex">
          <LoanProgramCard />
          <LoanProgramCard />
          </div>

          
        </ContentBody>
      </div>
    </AppWrapper>
  )
}