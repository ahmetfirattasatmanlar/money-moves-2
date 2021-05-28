import AppWrapper from "components/_common/app-wrapper";
import ActivityCard from "components/_common/activity-card";
import TopBar from "components/_common/top-bar";

export default function Activity() {
  return (
    <AppWrapper nav>

      <div className="bg-gradient-dark text-white pb-2">
        <TopBar dark back={false} center />
      </div>

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
      <ActivityCard
        src={"acreditedLoan.svg"}
        amount={"20,000"}
        activityType={"Accredited Cash Loan"}
        date={"Nov 23, 2021 10:33am"}
      />
      <ActivityCard
        src={"acreditedLoan.svg"}
        amount={"20,000"}
        activityType={"Accredited Cash Loan"}
        date={"Nov 23, 2021 10:33am"}
      />
      <ActivityCard
        src={"acreditedLoan.svg"}
        amount={"20,000"}
        activityType={"Accredited Cash Loan"}
        date={"Nov 23, 2021 10:33am"}
      />
      <ActivityCard
        src={"acreditedLoan.svg"}
        amount={"20,000"}
        activityType={"Accredited Cash Loan"}
        date={"Nov 23, 2021 10:33am"}
      />
      <ActivityCard
        src={"acreditedLoan.svg"}
        amount={"20,000"}
        activityType={"Accredited Cash Loan"}
        date={"Nov 23, 2021 10:33am"}
      />
      <ActivityCard
        src={"acreditedLoan.svg"}
        amount={"20,000"}
        activityType={"Accredited Cash Loan"}
        date={"Nov 23, 2021 10:33am"}
      />
      <ActivityCard
        src={"acreditedLoan.svg"}
        amount={"20,000"}
        activityType={"Accredited Cash Loan"}
        date={"Nov 23, 2021 10:33am"}
      />
    </AppWrapper>
  );
}
