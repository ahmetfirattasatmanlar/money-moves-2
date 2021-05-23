import React, { useState } from "react";

import AppWrapper from "components/_common/app-wrapper";
import LogoContainer from "components/_common/LogoContainer";
import ContentBody from "components/_common/ContentBody";
import LoanProgramCard from "components/_common/LoanProgramCard";
import PageTitle from "components/_common/PageTitle";
import ProgressBar from "components/_common/ProgressBar";
import Amount from "components/_common/Amount";
import LoanDropdown from "components/_common/LoanDropdown";
import CreditScoreCard from "components/_common/CreditScoreCard";
import ButtonsContainer from "components/_common/ButtonsContainer";

const states = ["initial", "loanConfig", "personalInfo", "loanDetails"];

export default function NewLoan() {
  const [loanState, setLoanState] = useState(states[0]);

  const changeState = (event) => {
    console.log(states[states.indexOf(loanState) + 1]);

    if (loanState === states[0] && event.target.value === "next") {
      setLoanState(states[states.indexOf(loanState) + 1]);
    }

    if (loanState >= 0 && event.target.value === "back") {
      setLoanState("initial");
    }
  };

  if (loanState === "initial") {
    console.log(loanState);
    return (
      <AppWrapper withNav={true} click={changeState}>
        <div className="d-flex flex-column justify-content-around align-items-center">
          <LogoContainer />
          <ContentBody>
            <ProgressBar progress={"25%"} />
            <PageTitle
              title={"New Loan"}
              subTitle={"We have a program to suit your needs"}
              upperTitle={"Choose a program"}
              align={"center"}
            />
            <div className="d-flex p-0 justify-content-around container-fluid">
              <LoanProgramCard
                click={changeState}
                src={"/homeImprovement.svg"}
                cardName={"Home Improvement"}
              />
              <LoanProgramCard
                click={changeState}
                src={"/loanPowerSport.svg"}
                cardName={"Power Sports"}
              />
            </div>
            <div className="d-flex p-0 justify-content-around container-fluid m-2">
              <LoanProgramCard
                click={changeState}
                src={"/medicalDental.svg"}
                cardName={"Medical / Dental"}
              />
              <LoanProgramCard
                click={changeState}
                src={"/cashLoan.svg"}
                cardName={"Cash Loans"}
              />
            </div>
          </ContentBody>
        </div>
      </AppWrapper>
    );
  }

  if (loanState === "loanConfig") {
    console.log(loanState);
    return (
      <AppWrapper withNav={false}>
        <div className="d-flex flex-column justify-content-around align-items-center">
          <LogoContainer />
          <ContentBody>
            <ProgressBar progress={"50%"} />
            <PageTitle
              title={"Configure your loan"}
              subTitle={"Set the loan according to your needs"}
              upperTitle={"Cash Loan Application"}
              align={"center"}
            />

            <p>Amount</p>
            <Amount />

            <LoanDropdown text={"Term"} />
            <LoanDropdown text={"Amortization"} />

            <h3>Estimated credit score</h3>
            <div className="d-flex justify-content-around">
              <CreditScoreCard />
              <CreditScoreCard />
              <CreditScoreCard />
            </div>

            <ButtonsContainer test={"test"} />
          </ContentBody>
        </div>
      </AppWrapper>
    );
  }
}
