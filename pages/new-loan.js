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

export default function NewLoan() {
  const [newLoanStatus, setNewLoanStatus] = useState(false);
  const [loanState, setLoanState] = useState(0);

  const changeLoanStatus = () => {
    setNewLoanStatus(true);
  };

  const changeLoanState = (event) => {
    if (loanState < 3 && event.target.value === "next") {
      setLoanState(loanState + 1);
    }

    if (loanState >= 0 && event.target.value === "back") {
      setLoanState(loanState - 1);
    }
  };

  if (!newLoanStatus) {
    return (
      <AppWrapper withNav={true}>
        <div className="d-flex flex-column justify-content-around align-items-center">
          <LogoContainer />
          <ContentBody>
            {/* <div class="progress w-75 border mt-4" style={{ height: "10px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div> */}
            <ProgressBar progress={"25%"} />
            <PageTitle
              title={"New Loan"}
              subTitle={"We have a program to suit your needs"}
              upperTitle={"Choose a program"}
              align={"center"}
            />
            <div className="d-flex p-0 justify-content-around container-fluid mt-4">
              <LoanProgramCard
                click={changeLoanStatus}
                src={"/homeImprovement.svg"}
                cardName={"Home Improvement"}
              />
              <LoanProgramCard
                click={changeLoanStatus}
                src={"/loanPowerSport.svg"}
                cardName={"Power Sports"}
              />
            </div>
            <div className="d-flex p-0 justify-content-around container-fluid mt-4">
              <LoanProgramCard
                click={changeLoanStatus}
                src={"/medicalDental.svg"}
                cardName={"Medical / Dental"}
              />
              <LoanProgramCard
                click={changeLoanStatus}
                src={"/cashLoan.svg"}
                cardName={"Cash Loans"}
              />
            </div>
          </ContentBody>
        </div>
      </AppWrapper>
    );
  }

  if (newLoanStatus) {
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

            <ButtonsContainer click={changeLoanState} />
          </ContentBody>
        </div>
      </AppWrapper>
    );
  }
}
