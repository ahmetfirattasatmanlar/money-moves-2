import Link from "next/link";

export default function Nav() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        height: "10.15vh",
        maxWidth: "25rem",
      }}
      className="w-100 bg-white d-flex align-items-center justify-content-between shadow-lg"
    >
      <Link href="/home">
        <div
          className="d-flex flex-column justify-content-center align-items-center h-100"
          style={{ width: "9vw", height: "5vh" }}
        >
          <img src="/home.svg" className="w-50" />
          <a>
            <small>Home</small>
          </a>
        </div>
      </Link>

      <Link href="/activity" className="active">
        <div
          className="d-flex flex-column justify-content-center align-items-center h-100"
          style={{ width: "9vw", height: "5vh" }}
        >
          <img src="/activity.svg" className="w-50" />
          <a>
            <small>Activity</small>
          </a>
        </div>
      </Link>

      <Link href="/new-loan">
        <div
          className="d-flex flex-column  align-items-center"
          style={{ height: "117%" }}
        >
          <div
            style={{ marginTop: "-10px", backgroundColor: "#ffffff" }}
            className="rounded-circle d-flex flex-column justify-content-end align-items-center"
          >
            <img src="/newLoan.svg" />
          </div>
          <a>
            <small>New Loan</small>
          </a>
        </div>
      </Link>

      <Link href="/applications">
        <div
          className="d-flex flex-column justify-content-center align-items-center h-100"
          style={{ width: "9vw", height: "5vh" }}
        >
          <img src="applications.svg" className="w-50" />
          <a>
            <small>Applications</small>
          </a>
        </div>
      </Link>

      <Link href="/profile">
        <div
          className="d-flex flex-column justify-content-center align-items-center h-100"
          style={{ width: "9vw", height: "5vh" }}
        >
          <img src="profile.svg" className="w-50" />
          <a>
            <small>Profile</small>
          </a>
        </div>
      </Link>
    </div>
  );
}
