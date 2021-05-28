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
          <div style={{ position: "relative" }}>
            <img src="/file.svg" alt="" />
            <img
              style={{ position: "absolute", bottom: "-25px", right: "-25px" }}
              src="/denied.svg"
              alt=""
            />
          </div>
          <p className="m-4" style={{ color: "#0bb8e4" }}>
            <b>Sorry</b>
          </p>
        </div>
        <div className="text-center">
          <h1 style={{ fontSize: "1.5rem" }}>Your loan was rejected</h1>
          <p style={{ fontSize: "0.9rem" }}>
            We are sorry, your application does not
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            met our requierements, please try again.
          </p>
        </div>
        <Link href="/new-loan">
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
            Ok
          </button>
        </Link>
      </div>
    </div>
  );
}
