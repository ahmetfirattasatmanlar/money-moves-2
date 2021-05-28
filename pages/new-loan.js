import React, { useState } from "react";
import AppWrapper from "components/_common/app-wrapper";
import LoanProgramCard from "components/_common/loan-program-card";
import ProgressBar from "components/_common/progress-bar";
import Amount from "components/_common/amount";
import LoanDropdown from "components/_common/loan-dropdown";
import CreditScoreCard from "components/_common/credit-score-card";
import PersonalInfoCard from "components/_common/personal-info-card";
import TopBar from "components/_common/top-bar";


export default function NewLoan() {
  const [loanState, setLoanState] = useState(0);

  const changeState = () => setLoanState(loanState + 1)

  // const changeState = (event) => {

  // const index = states.indexOf(loanState);
  // const btnValue = event.target.value;
  // const limit = index < states.length - 1;

  // if (btnValue === "next" || "initialState") {
  //   if (limit) {
  //     setLoanState(states[index + 1]);
  //   }
  // }

  // if (btnValue === "back") {
  //   console.log(index - 1);
  //   if (index > 0) {
  //     setLoanState(states[index - 1]);
  //   }
  // }
  // };

  return (
    <AppWrapper>
      <TopBar />

      {loanState === 0 ?
        <div className="d-flex flex-column justify-content-around align-items-center">
          <ProgressBar progress={"25%"} />
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

        </div> : undefined}


      {loanState === 1 ?
        <div className="d-flex flex-column justify-content-around align-items-center">
          <ProgressBar progress={"50%"} />

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
          <button onClick={() => setLoanState(loanState - 1)}>Back</button>
          <button onClick={() => setLoanState(loanState + 1)}>Next</button>
        </div> : undefined}

      { loanState === 2 ?
        <div className="d-flex flex-column justify-content-around align-items-center">
          <ProgressBar progress={"75%"} />

          <p>My monthly income</p>
          <Amount />

          <PersonalInfoCard
            title={"Employment"}
            options={[
              "Employed full time",
              "Employed part time",
              "Student",
              "Retired",
            ]}
          />
          <PersonalInfoCard
            title={"Residential Status"}
            options={["Home owner", "Renting", "Living with parents/family"]}
          />
          <PersonalInfoCard
            title={"Marital Status"}
            options={["Maried", "Single", "Divorced", "Separeted"]}
          />
          <button onClick={() => setLoanState(loanState - 1)}>Back</button>
          <button onClick={() => setLoanState(loanState + 1)}>Next</button>
        </div> : undefined}

      { loanState === 3 ?
        <div className="d-flex flex-column justify-content-around align-items-center">
          <ProgressBar progress={"100%"} />

          <p>My monthly income</p>
          <Amount />

          <div>
            <div className="d-flex justify-content-between w-100">
              <p>Amount</p>
              <p>
                <b>$10,000</b>
              </p>
            </div>
            <div className="d-flex justify-content-between w-100">
              <p>Term</p>
              <p>
                <b>1 Year</b>
              </p>
            </div>
            <div className="d-flex justify-content-between w-100">
              <p>Amortization</p>
              <p>
                <b>1 Year</b>
              </p>
            </div>
          </div>
          <div className="w-75 mt-4">
            <div className="d-flex justify-content-between">
              <p>Credit</p>
              <p>
                <b>$700</b>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Interest Rate</p>
              <p>
                <b>14,99%</b>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Monthly Payment</p>
              <p>
                <b>$399.99</b>
              </p>
            </div>
          </div>
        </div> : undefined}
    </AppWrapper>
  )
}
