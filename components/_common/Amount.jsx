import React, { useState } from "react";
import { useRouter } from "next/router";

export default function InputAmount() {
  const [amount, setAmount] = useState("250,000");

  const route = useRouter();
  const trasnferURL = route.pathname === "/transfer";

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  const widht = trasnferURL ? "100%" : "75%";
  const border = trasnferURL ? "1.5px solid #fff" : "1.5px solid #000";
  const minus = trasnferURL ? "/minusAlternative.svg" : "/minus.svg";
  const plus = trasnferURL ? "/plusAlternative.svg" : "/plus.svg";

  return (
    <div
      className={`d-flex justify-content-center align-items-center`}
      style={{ height: "60px", width: `${widht}` }}
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
          fontSize: "1.5rem",
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
