import Link from "next/link";

export default function Approved() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#000000", height: "100vh" }}
    >
      <div
        className="bg-white d-flex flex-column align-items-center justify-content-around"
        style={{ width: "90%", height: "60vh", borderRadius: "2rem" }}
      >
        <div className="d-flex flex-column align-items-center">
          <img
            src="/approved.svg"
            alt=""
            style={{
              height: "100%",
              width: "60%",
            }}
          />
          <p className="mt-4" style={{ color: "#0bb8e4" }}>
            <b>Congratulations</b>
          </p>
        </div>
        <div className="text-center border w-100">
          <h1 style={{ fontSize: "1rem" }}>Your Loan was approved!</h1>
          <p className="m-0">
            <small>The loan was accredited to your account,</small>
          </p>
          <p className="m-0">
            <small>now you can achieve that goal you wanted.</small>
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
              width: "40vw",
            }}
          >
            View Loan
          </button>
        </Link>
      </div>
    </div>
  );
}
