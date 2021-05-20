import AppWrapper from "components/_common/app-wrapper";
import LogoContainer from "components/_common/LogoContainer";
import ContentBody from "components/_common/ContentBody";
import Calendar from "components/_common/Calendar";
import ActivityCard from "components/_common/ActivityCard";
import PageTitle from "components/_common/PageTitle";

export default function Activity() {
  return (
    <AppWrapper>
      <div className="d-flex flex-column justify-content-around align-items-center">
        <LogoContainer />
        <ContentBody>
          <PageTitle
            title={"Activity"}
            element={<Calendar />}
            align={"center"}
          />
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "100%", height: "80%" }}
          >
            <ActivityCard
              src={"transferTo.svg"}
              amount={"520.74"}
              activityType={"Transfer to Bank"}
              date={"Nov 23, 2021 10:33am"}
            />
            <ActivityCard
              src={"paidInsurance.svg"}
              amount={"20.74"}
              activityType={"Paid Insurance"}
              date={"Nov 23, 2021 10:33am"}
            />
            <ActivityCard
              src={"transferTo.svg"}
              amount={"520.74"}
              activityType={"Transfer to Bank"}
              date={"Nov 23, 2021 10:33am"}
            />
            <ActivityCard
              src={"acreditedLoan.svg"}
              amount={"20,000"}
              activityType={"Accredited Cash Loan"}
              date={"Nov 23, 2021 10:33am"}
            />
          </div>
        </ContentBody>
      </div>
    </AppWrapper>
  );
}
