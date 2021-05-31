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

      <div className="bg-white px-3 shadow rounded-top-lg mt-neg pt-2 pb-bottom-app">

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
                      src={'/icon-home-improvement.svg'}
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

            <h6 className="mt-3 mb-4"><img src="/icon-cash-loan.svg" className="mr-2" />Cash Loan Application</h6>
            <h4 className="h3 font-weight-bold">Configure your loan</h4>
            <p className="text-muted mb-4">Set the loan according to your needs</p>

            <div>AMOUNT</div>
            <Amount />
            <br />
            <LoanDropdown text={"Term"} />
            <LoanDropdown text={"Amortization"} />

            <p className="mt-4 text-left w-100">Estimated credit score</p>
            <div className="d-flex justify-content-between align-items-center">
              <CreditScoreCard name="Good" interestRate={"14,99"} monthlyPayment={"299,99"} />
              <CreditScoreCard active name="Average" interestRate={"19,99"} monthlyPayment={"349,99"} />
              <CreditScoreCard name="Poor" interestRate={"24,99"} monthlyPayment={"399,99"} />
            </div>
          </div> : undefined}

        {loanState === 2 ?
          <div className="d-flex flex-column justify-content-around align-items-center">
            <ProgressBar progress={"75%"} />

            <h6 className="mt-3 mb-4"><img src="/icon-cash-loan.svg" className="mr-2" />Cash Loan Application</h6>
            <h4 className="h3 font-weight-bold">Personal details</h4>
            <p className="text-muted mb-5">Fill in your personal information</p>

            <div className="text-left w-100 font-weight-bold mb-3">My monthly income</div>

            <Amount />

            <br />
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
          <div >
            <div className="text-center">
              <ProgressBar progress={"100%"} />
              <h6 className="mt-3 mb-4"><img src="/icon-cash-loan.svg" className="mr-2" />Cash Loan Application</h6>
              <h4 className="h3 font-weight-bold">Your loan</h4>
              <p className="text-muted mb-5">Details of the loan you chose</p>
            </div>


            <dl className="d-flex align-items-bottom justify-content-between">
              <dt className="font-weight-normal">Amount</dt>
              <dd className="font-weight-bold">$10,000</dd>
            </dl>
            <dl className="d-flex align-items-bottom justify-content-between">
              <dt className="font-weight-normal">Term</dt>
              <dd className="font-weight-bold">1 Year</dd>
            </dl>
            <dl className="d-flex align-items-bottom justify-content-between">
              <dt className="font-weight-normal">Amortization</dt>
              <dd className="font-weight-bold">1 Year</dd>
            </dl>

            <hr />

            <dl className="d-flex align-items-bottom justify-content-between">
              <dt className="font-weight-normal">Credit</dt>
              <dd className="font-weight-bold">$700</dd>
            </dl>
            <dl className="d-flex align-items-bottom justify-content-between">
              <dt className="font-weight-normal">Interest Rate</dt>
              <dd className="font-weight-bold">14,99%</dd>
            </dl>
            <dl className="d-flex align-items-bottom justify-content-between">
              <dt className="font-weight-normal">Monthly Payment</dt>
              <dd className="font-weight-bold">$399.99</dd>
            </dl>

          </div> : undefined}


        {loanState === 5 ? <>

          <p className="h5 font-weight-bold my-2">Power Sports - Nov 23, 2021</p>
          <p>Congratulations! Your MoneyMoves Loan has been approved</p>

          <table className="table card">
            <tbody>
              <tr>
                <th scope="row" className="bg-secondary border-0">Approved Loan Amount</th>
                <td className="border-0 font-weight-bold text-right" >$50,000</td>
              </tr>
              <tr>
                <th scope="row" className="bg-secondary border-0">Administration Fee</th>
                <td className="border-0 font-weight-bold text-right" >$399.00</td>
              </tr>
              <tr>
                <th scope="row" className="bg-secondary border-0">Total Loan</th>
                <td className="border-0 font-weight-bold text-right" >$50,399.00</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <table className="table card">
            <tbody>
              <tr>
                <th scope="row" className="bg-secondary border-0">Monthly Payment</th>
                <td className="border-0 font-weight-bold text-right" >$199.00</td>
              </tr>
              <tr>
                <th scope="row" className="bg-secondary border-0">Interest Rate</th>
                <td className="border-0 font-weight-bold text-right" >14.99%</td>
              </tr>
              <tr>
                <th scope="row" className="bg-secondary border-0">APR</th>
                <td className="border-0 font-weight-bold text-right" >19.99%</td>
              </tr>
              <tr>
                <th scope="row" className="bg-secondary border-0">Term</th>
                <td className="border-0 font-weight-bold text-right" >60 months</td>
              </tr>
              <tr>
                <th scope="row" className="bg-secondary border-0">Amortization Period</th>
                <td className="border-0 font-weight-bold text-right" >120 months</td>
              </tr>
              <tr>
                <th scope="row" className="bg-secondary border-0">Balloon Payment</th>
                <td className="border-0 font-weight-bold text-right" >$5,000</td>
              </tr>
            </tbody>
          </table>



        </> : undefined}



      </div>





      {loanState === 4 ? <div className="custom-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center">
            <div className="modal-body py-5">
              {/* If Accepted */}
              <div>
                <img src="/img-loan-approved.svg" alt="" />
                <p className="text-primary font-weight-bold mt-4">Congratulations</p>
                <p className="h4">Your Loan was approved!</p>
                <p>The loan was credited to your account, now you can achieve that goal you wanted.</p>
                <button type="button" className="btn btn-primary rounded-lg shadow-lg w-75" onClick={() => setLoanState(loanState + 1)}>View Loan</button>

              </div>

              {/* If Rejected */}
              {/* <div>
                <img src="/img-loan-rejected.svg" alt="" />

                <p className="text-primary font-weight-bold">Sorry</p>
                <p className="h4">Your Loan was Rejected</p>
                <p>We are sorry, your application does not meet our requirements, please try again.</p>
                <button type="button" className="btn btn-primary rounded-lg shadow-lg w-75" onClick={() => setLoanState(0)}>OK</button>

              </div> */}

            </div>
          </div>
        </div>
      </div> : undefined}





      {(loanState !== 0 && loanState !== 4 && loanState !== 5) ? <div className="bg-white text-center d-flex mt-2 col-sm-6 py-2 shadow-lg" style={{ position: "fixed", bottom: 0 }}>
        <button className="btn btn-light rounded-lg w-100 mr-2" onClick={() => setLoanState(loanState - 1)}>Back</button>
        <button className="btn btn-primary rounded-lg w-100 ml-2" onClick={() => setLoanState(loanState + 1)}>Next</button>
      </div> : undefined}


    </AppWrapper>
  )
}
