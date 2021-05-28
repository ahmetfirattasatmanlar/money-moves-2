import AppWrapper from "components/_common/app-wrapper";
import ApplicationsCard from "components/_common/applications-card";
import TopBar from 'components/_common/top-bar'

export default function Applications() {
  return (
    <AppWrapper nav>
      <TopBar/>
      <div
        className="d-flex flex-column justify-content-around align-items-center"
      >
          {/* <PageTitle
            title={"Applications"}
            element={<Dropdown />}
            align={"start"}
          /> */}
          {/* <p style={{color: "black", border: "1px solid black"}}>Applications</p>
          <button type="button">Dropdown</button> */}
            <ApplicationsCard
              src={"/powerSports.svg"}
              status={"Pending"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/powerSports.svg"}
              status={"Approved"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/powerSports.svg"}
              status={"Approved"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
            <ApplicationsCard
              src={"/cashLoan.svg"}
              status={"Rejected"}
              amount={"50.00"}
              date={"23 Nov, 2021 10:33am"}
              cardName={"Power Sports"}
            />
      </div>
    </AppWrapper>
  );
}
