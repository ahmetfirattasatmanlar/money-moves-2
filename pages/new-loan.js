import React, { useState } from "react";

import AppWrapper from "components/_common/app-wrapper";
import LogoContainer from "components/_common/LogoContainer";
import ContentBody from "components/_common/ContentBody";
import LoanProgramCard from "components/_common/LoanProgramCard";
import PageTitle from "components/_common/PageTitle";
import ProgressBar from "components/_common/ProgressBar";

export default function NewLoan() {
  const [newLoanStatus, setNewLoanStatus] = useState(false);
  const [loanState, setLoanState] = useState(0);

  const changeLoanStatus = () => {
    setNewLoanStatus(true);
  };

  const changeLoanState = (event) => {
    console.log(event.target.value);
    if (loanState < 3 && event.target.value === "next") {
      setLoanState(loanState + 1);
    }

    if (loanState >= 0 && event.target.value === "back") {
      setLoanState(loanState - 1);
    }

    console.log(loanState);
  };

  if (!newLoanStatus) {
    return (
      <AppWrapper>
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
      <AppWrapper>
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
            <InputAmount />
            {/* <div className="d-flex">
              <p>-</p>
              <p>$250,000</p>
              <p>+</p>
            </div> */}

            <select>
              <option>Amortization</option>
            </select>

            <select>
              <option>Amortization</option>
            </select>

            <h3>Estimated credit score</h3>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <h4>Good</h4>
                <p>14,99%</p>
                <p>Interest rate</p>
                <p>$299,99</p>
                <p>Monthly payment</p>
              </div>

              <div className="d-flex flex-column">
                <h4>Good</h4>
                <p>14,99%</p>
                <p>Interest rate</p>
                <p>$299,99</p>
                <p>Monthly payment</p>
              </div>

              <div className="d-flex flex-column">
                <h4>Good</h4>
                <p>14,99%</p>
                <p>Interest rate</p>
                <p>$299,99</p>
                <p>Monthly payment</p>
              </div>
            </div>

            <div>
              <button type="button" value="back" onClick={changeLoanState}>
                Back
              </button>
              <button type="button" value="next" onClick={changeLoanState}>
                Next
              </button>
            </div>
          </ContentBody>
        </div>
      </AppWrapper>
    );
  }
}
