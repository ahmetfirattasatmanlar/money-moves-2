import React, { useState } from "react";

export default function InputAmount() {
  const [amount, setAmount] = useState("250,000");

  const btnCircle = {
    width: "2rem",
    height: "2rem",
    padding: "0.6rem 0rem",
    borderRadius: "1.5rem",
    textAlign: "center",
    fontSize: "1.2rem",
    lineHeight: "1.42857",
    borderRadius: "50%",
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center w-75`}
      style={{ height: "60px" }}
    >
      <button
        type="button"
        className="p-0 btn"
        style={{
          borderRadius: "50%",
          border: "1.5px solid black",
          width: "60px",
          height: "45px",
        }}
      >
        <img src="/minus.svg" alt="" />
      </button>
      <input
        type="text"
        name="amount"
        value={`${amount}`}
        className="h-100 form-control"
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      />
      <button
        type="button"
        className={`p-0 btn`}
        style={{
          borderRadius: "50%",
          border: "1.5px solid black",
          width: "60px",
          height: "45px",
        }}
      >
        <img src="/plus.svg" alt="" />
      </button>
    </div>
  );
}
