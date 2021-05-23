import Link from "next/link";

export default function Approved() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#000000", height: "100vh" }}
    >
      <div
        className="bg-white d-flex flex-column align-items-center justify-content-around p-4"
        style={{ width: "90%", height: "60%", borderRadius: "2rem" }}
      >
        <div className="d-flex flex-column align-items-center">
          <img src="/approved.svg" alt="" />
          <p className="m-4" style={{ color: "#0bb8e4" }}>
            <b>Congratulations</b>
          </p>
        </div>
        <div className="text-center">
          <h1 style={{ fontSize: "1.5rem" }}>Your Loan was approved!</h1>
          <p style={{ fontSize: "0.9rem" }}>
            The loan was accredited to your account,
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            now you can achieve that goal you wanted.
          </p>
        </div>
        <Link href="/new-loan/loan">
          <button
            className="btn btn border d-flex align-items-center justify-content-center"
            type="button"
            value="next"
            style={{
              backgroundColor: "#0bb8e4",
              borderRadius: "1.5rem",
              width: "40%",
            }}
          >
            View Loan
          </button>
        </Link>
      </div>
    </div>
  );
}
