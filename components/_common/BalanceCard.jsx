import Link from "next/link";
import React, { Fragment } from "react";

export default function LoanCard(props) {
  return (
    <div className="border">
      <p style={{ fontSize: "0.7rem" }}>Loan Balance</p>
      <p className="h2" style={{ fontSize: "1.5rem" }}>
        $292,987.56
      </p>
      <Link href="/new-loan">
        <a
          className="btn btn-outline-light btn-sm mt-2 border-light"
          style={{ borderRadius: "10rem", fontSize: "0.7rem" }}
        >
          Get a new loan now
        </a>
      </Link>
    </div>
  );
}
