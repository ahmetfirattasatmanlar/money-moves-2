import React, { useState } from "react";

import styles from "./inputamount.module.scss";

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
      className={`d-flex justify-content-center align-items-center w-75 border ${styles.amount}`}
    >
      <button
        type="button"
        className="border p-0 btn h-50 w-50"
        style={{ borderRadius: "50%" }}
      >
        -
      </button>
      <input
        type="text"
        name="amount"
        value={`${amount}`}
        className="h-100 form-control"
        style={{ width: "50%" }}
      />
      <button type="button" className={`border p-0 btn`} style={{ btnCircle }}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}
