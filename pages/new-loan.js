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

  // const changeState = () => setLoanState(loanState + 1)

  return (
    <AppWrapper>
      <div className="bg-gradient-dark text-white pb-3">
        <TopBar dark />
      </div>

      <div className="bg-white px-3 shadow rounded-top-lg mt-neg pt-2">

        {loanState === 0 ?
          <div className="d-flex flex-column justify-content-around align-items-center">
            <ProgressBar progress={"25%"} />
            <div className="container text-center">

              <h6 className="mt-3 mb-4">Loan Application</h6>
              <h4 className="h3 font-weight-bold">Choose program</h4>
              <p className="text-muted mb-5">We have a program to suit your needs</p>

              <div className="row">

                <div className="col-6 mb-5">
                  <div onClick={() => setLoanState(loanState + 1)}>
                    <img
                      className="rounded-circle shadow w-100 mb-2"
                      src={'/homeImprovement.svg'}
                    />
                    <small className="mb-0 font-weight-bold">Home Improvement</small>
                  </div>
                </div>

                <div className="col-6 mb-5">
                  <div onClick={() => setLoanState(loanState + 1)}>
                    <img
                      className="rounded-circle shadow w-100 mb-2"
                      src={'/icon-power-sports.svg'}
                    />
                    <small className="mb-0 font-weight-bold">Power Sports</small>
                  </div>
                </div>

                <div className="col-6 mb-5">
                  <div onClick={() => setLoanState(loanState + 1)}>
                    <img
                      className="rounded-circle shadow w-100 mb-2"
                      src={'/medicalDental.svg'}
                    />
                    <small className="mb-0 font-weight-bold">Medical / Dental</small>
                  </div>
                </div>

                <div className="col-6 mb-5">
                  <div onClick={() => setLoanState(loanState + 1)}>
                    <img
                      className="rounded-circle shadow w-100 mb-2"
                      src={'/icon-cash-loan.svg'}
                    />
                    <small className="mb-0 font-weight-bold">Cash Loans</small>
                  </div>
                </div>

              </div>
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
          </div> : undefined}

        {loanState === 2 ?
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
          </div> : undefined}

        {loanState === 3 ?
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

        {loanState !== 0 ? <div className="px-3 text-center d-flex mt-2">
          <button className="btn btn-info rounded-lg w-100 mr-2" onClick={() => setLoanState(loanState - 1)}>Back</button>
          <button className="btn btn-primary rounded-lg w-100 ml-2" onClick={() => setLoanState(loanState + 1)}>Next</button>
        </div> : undefined}
      </div>


    </AppWrapper>
  )
}
