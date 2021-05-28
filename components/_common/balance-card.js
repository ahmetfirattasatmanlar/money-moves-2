import Link from "next/link";

export default function LoanCard(props) {
  return (
    <div>
      <p className="mb-2 h6">Loan Balance</p>
      <p className="h1">
        $292,987.56
      </p>
      <Link href="/new-loan">
        <a
          className="btn btn-outline-light btn-sm mt-2 border-light"
          style={{ borderRadius: "10rem" }}
        >
          Get a new loan now
        </a>
      </Link>
    </div>
  );
}
