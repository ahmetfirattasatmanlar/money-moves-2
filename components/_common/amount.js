import React, { useState } from "react";
import { useRouter } from "next/router";

export default function InputAmount() {
  const [amount, setAmount] = useState("250,000");

  const route = useRouter();
  const transferUrl = route.pathname === "/transfer";

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  // const width = transferUrl ? "100%" : "75%";
  const border = transferUrl ? "1.5px solid #fff" : "1.5px solid #000";
  const minus = transferUrl ? "/minusAlternative.svg" : "/minus.svg";
  const plus = transferUrl ? "/plusAlternative.svg" : "/plus.svg";

  return (
    <div
      className={`d-flex justify-content-center align-items-center`}
    >
      <button
        type="button"
        className="p-0 btn"
        style={{
          borderRadius: "50%",
          border: `${border}`,
          width: "60px",
          height: "45px",
        }}
      >
        <img src={minus} alt="" />
      </button>
      <input
        type="text"
        name="amount"
        value={`$${amount}`}
        onChange={changeAmount}
        className="h-100 form-control"
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          backgroundColor: "transparent",
          border: "none",
          color: `${route.pathname === "/transfer" ? "#fff" : "#000"}`,
        }}
      />
      <button
        type="button"
        className={`p-0 btn`}
        style={{
          borderRadius: "50%",
          border: `${border}`,
          width: "60px",
          height: "45px",
        }}
      >
        <img src={plus} alt="" />
      </button>
    </div>
  );
}
