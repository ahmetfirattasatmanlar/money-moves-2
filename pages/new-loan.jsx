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
import PersonalInfoCard from "components/_common/PersonalInfoCard";

const states = ["initial", "loanConfig", "personalInfo", "loanDetails"];

export default function NewLoan() {
  const [loanState, setLoanState] = useState(states[0]);

  const changeState = (event) => {
    const index = states.indexOf(loanState);
    const btnValue = event.target.value;
    const limit = index < states.length - 1;

    if (btnValue === "next" || "initialState") {
      if (limit) {
        setLoanState(states[index + 1]);
      }
    }

    if (btnValue === "back") {
      console.log(index - 1);
      if (index > 0) {
        setLoanState(states[index - 1]);
      }
    }
  };

  if (loanState === states[0]) {
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

  if (loanState === states[1]) {
    return (
      <AppWrapper withNav={false} withButtons={true} click={changeState}>
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
          </ContentBody>
        </div>
      </AppWrapper>
    );
  }

  if (loanState === states[2]) {
    return (
      <AppWrapper withNav={false} withButtons={true} click={changeState}>
        <div className="d-flex flex-column justify-content-around align-items-center">
          <LogoContainer />
          <ContentBody>
            <ProgressBar progress={"75%"} />
            <PageTitle
              title={"Personal Details"}
              subTitle={"Fill in your personal information"}
              upperTitle={"Cash Loan Application"}
              align={"center"}
            />

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
          </ContentBody>
        </div>
      </AppWrapper>
    );
  }

  if (loanState === states[3]) {
    return (
      <AppWrapper withNav={false} withButtons={true} click={changeState}>
        <div className="d-flex flex-column justify-content-around align-items-center">
          <LogoContainer />
          <ContentBody>
            <ProgressBar progress={"100%"} />
            <PageTitle
              title={"Your Loan"}
              subTitle={"Details of the loan you choose"}
              upperTitle={"Cash Loan Application"}
              align={"center"}
            />

            <p>My monthly income</p>
            <Amount />

            <div className="border-bottom w-75 mt-4">
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
                <p>Amount</p>
                <p>
                  <b>$10,000</b>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Term</p>
                <p>
                  <b>1 Year</b>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Amortization</p>
                <p>
                  <b>1 Year</b>
                </p>
              </div>
            </div>
          </ContentBody>
        </div>
      </AppWrapper>
    );
  }
}
