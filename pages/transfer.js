import { useState } from "react";

import AppWrapper from "components/_common/app-wrapper";
import Amount from "components/_common/amount";
import TransferCard from "components/_common/transfer-card";
import Button from "components/_common/button";
import TopBar from "components/_common/top-bar";

export default function Transfer() {
  const [transfer, setTransfer] = useState(false);

  const changeStatus = () => {
    setTransfer(!transfer);
  };


  if (!transfer) {
    return (
      <AppWrapper>
        <TopBar />

        {/* <PageTitle title={"Send Money"} /> */}
        <div
          className="d-flex flex-column align-items-center justify-content-between"
          style={{ height: "20vh", width: "90%" }}
        >
          <Amount />
          <p className="text-white">To Bank</p>
        </div>
        <TransferCard />
        <Button
          transfer={transfer}
          text={"Transfer Funds"}
          click={changeStatus}
        />
      </AppWrapper>
    );
  }

  if (transfer) {
    return (
      <AppWrapper>
        <div
          className="d-flex flex-column align-items-center justify-content-between"
          style={{ height: "30vh", width: "90%" }}
        >
          <img src="/moneySent.svg" alt="" />
          <h1 className="text-white">
            <b>Money Sent</b>
          </h1>
          <p className="text-white">
            We have sent the money to your bank account
            </p>
        </div>
        <TransferCard />
        <div className="text-white d-flex flex-column align-items-center m-4">
          <p>
            <b>Transfer Amount</b>
          </p>
          <p style={{ fontSize: "2rem" }}>
            {" "}
            <b>$360.00</b>{" "}
          </p>
          <p>
            <small>Nov 24, 2020 -9:48 AM</small>
          </p>
        </div>
        <Button
          transfer={transfer}
          text={"Back to home"}
          bg={"bg-transparent"}
        />
      </AppWrapper>
    );
  }
}
