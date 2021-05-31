import AppWrapper from "components/_common/app-wrapper";
import ActivityCard from "components/_common/activity-card";
import TopBar from "components/_common/top-bar";

export default function Activity() {
  return (
    <AppWrapper nav>
      <div className="bg-gradient-dark text-white pb-3">
        <TopBar dark back={false} center />
      </div>

      <div className="bg-white shadow rounded-top-lg mt-neg pt-4 pb-bottom-app">
        <h4 className="text-center px-3 font-weight-bold mb-4">Activity</h4>
        <ul className="list-calendar">
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li className="active">May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dev</li>
        </ul>

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
      </div>


    </AppWrapper>
  );
}
