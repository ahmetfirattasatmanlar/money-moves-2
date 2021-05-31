import AppWrapper from "components/_common/app-wrapper";
import ApplicationsCard from "components/_common/applications-card";
import TopBar from 'components/_common/top-bar'
import { FiChevronDown } from 'react-icons/fi'

export default function Applications() {
  return (
    <AppWrapper nav>
      <div className="bg-gradient-dark text-white pb-3">
        <TopBar dark back={false} center />
      </div>
      <div className="rounded-top-lg mt-neg bg-white px-3 pt-4 pb-bottom-app">
        <h4 className="font-weight-bold mb-1">Applications</h4>
        <button type="button" className="btn btn-light px-0  bg-transparent">View <strong>All <FiChevronDown /></strong></button>
        <ApplicationsCard
          status={"Pending"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Cash Loan"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Approved"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Approved"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Cash Loan"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Cash Loan"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
        <ApplicationsCard
          status={"Rejected"}
          amount={"50.00"}
          date={"23 Nov, 2021 10:33am"}
          applicationType={"Power Sports"}
        />
      </div>
    </AppWrapper>
  );
}
