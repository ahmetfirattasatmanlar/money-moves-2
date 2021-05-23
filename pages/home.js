import Link from "next/link";
import AppWrapper from "components/_common/app-wrapper";
import BalanceCard from "components/_common/BalanceCard";
import LogoContainer from "components/_common/LogoContainer";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  return (
    <AppWrapper withNav={true}>
      <div className="text-white pt-2 pb-3 px-4" style={{ height: "275px" }}>
        <LogoContainer icon={"bell"} justify={"between"} />
        <BalanceCard />
      </div>

      <div
        className="bg-white px-4"
        style={{
          borderRadius: "1rem",
          border: "solid #ffffff",
          marginTop: "-30px",
          height: "100vh",
        }}
      >
        <div
          className="card shadow-sm shadow-sm"
          style={{ marginTop: "-50px", borderRadius: "1.5rem" }}
        >
          <div className="card-body d-flex align-items-center">
            <div className="w-100">
              <p className="m-0">
                <small className="text-muted">Available Credit</small>
              </p>
              <p className="h4 m-0">$15,239.94</p>
            </div>
            <div className="col-auto px-0">
              <Link href="/transfer">
                <a style={{ color: "#0bb8e4", fontSize: "1.2rem" }}>
                  <small>Transfer funds</small>
                  <img src="/arrow.svg" />
                </a>
              </Link>
            </div>
          </div>
          <div className="card-footer text-center">View Details</div>
        </div>

        <h2 className="h5 mt-4">Verification Steps</h2>

        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-4">
            Mobile phone{" "}
            <small className="ml-auto text-success">
              <FaCheck className="mr-2" /> Verified
            </small>
          </li>
          <li className="d-flex align-items-center mb-4">
            Government ID{" "}
            <small className="ml-auto text-success">
              <FaCheck className="mr-2" /> Verified
            </small>
          </li>
          <li className="d-flex align-items-center mb-4">
            Bank Verification
            <div className="ml-auto">
              <Link href="/verify/banking">
                <a
                  className="btn btn-sm btn-outline-success rounded py-0 border-ligth"
                  style={{ borderRadius: "10rem" }}
                >
                  Verify
                </a>
              </Link>
            </div>
          </li>
          <li className="d-flex align-items-center mb-4">
            Employment Verification
            <div className="ml-auto">
              <Link href="/verify/employment">
                <a
                  className="btn btn-sm btn-outline-success rounded py-0 border-ligth"
                  style={{ borderRadius: "10rem" }}
                >
                  Verify
                </a>
              </Link>
            </div>
          </li>
          <li className="d-flex align-items-center mb-4">
            Selfie
            <div className="ml-auto">
              <Link href="/verify/photo">
                <a
                  className="btn btn-sm btn-outline-success rounded py-0 border-ligth"
                  style={{ borderRadius: "10rem" }}
                >
                  Verify
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </AppWrapper>
  );
}
