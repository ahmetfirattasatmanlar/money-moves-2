import { useState } from "react";

import Link from "next/link";
import AppWrapper from "components/_common/app-wrapper";
import ContentBody from "components/_common/ContentBody";

import LogoContainer from "components/_common/LogoContainer";
import PageTitle from "components/_common/PageTitle";
import Amount from "components/_common/Amount";
import TrasnferCard from "components/_common/TransferCard";
import Button from "components/_common/Button";

export default function Transfer() {
  const [transfer, setTransfer] = useState(false);

  const changeStatus = () => {
    setTransfer(!transfer);
  };

  const Arrow = () => {
    return (
      <Link href="/home">
        <a className="border" style={{ color: "black" }}>
          Back
        </a>
      </Link>
    );
  };

  if (!transfer) {
    return (
      <AppWrapper>
        <LogoContainer element={<Arrow />} justify={"center"} />
        <ContentBody>
          <PageTitle title={"Send Money"} align={"center"} />
          <div
            className="d-flex flex-column align-items-center justify-content-between"
            style={{ height: "20vh", width: "90%" }}
          >
            <Amount />
            <p className="text-white">To Bank</p>
          </div>
          <TrasnferCard />
        </ContentBody>
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
        <LogoContainer element={<Arrow />} justify={"center"} />
        <ContentBody>
          <PageTitle title={"Send Money"} align={"center"} />
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
          <TrasnferCard />
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
        </ContentBody>
        <Button
          transfer={transfer}
          text={"Back to home"}
          bg={"bg-transparent"}
        />
      </AppWrapper>
    );
  }
}
