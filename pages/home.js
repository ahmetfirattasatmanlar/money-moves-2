import { useState } from "react";
import Link from "next/link";
import AppWrapper from "components/_common/app-wrapper";
import BalanceCard from "components/_common/balance-card";
import { FaCheck, FaChevronRight } from "react-icons/fa";

import TopBar from "components/_common/top-bar";

export default function Home() {
  const [details, setDetails] = useState(false);

  return (
    <AppWrapper nav>
      <div className="bg-gradient-dark text-white pb-5">
        <TopBar dark />
        <div className="px-3 pb-4"><BalanceCard /></div>
      </div>

      <div className="bg-white px-3 shadow rounded-top-lg mt-neg">
        <div className="card shadow-sm mt-neg-lg rounded-lg border-none">
          <div className="card-body d-flex align-items-center py-2">
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
          {details ?
            <div className="card-body d-flex border-top py-1 align-items-center">
              <div className="w-100">
                <p className="text-muted m-0">
                  <small>Next payment</small>
                </p>
                <p className="m-0">09/01/2021</p>
              </div>
              <span className="h4 m-0 font-weight-bold">$199.99</span>
            </div> : undefined
          }
          <div className="card-footer bg-transparent py-1 text-muted text-center" onClick={() => setDetails(!details)}>
            {!details ? "View" : "Hide"} Details
          </div>
        </div>

        <h2 className="h5 mt-4 font-weight-bold">Verification Steps</h2>

        <ul className="list-unstyled">
          <li className="d-flex align-items-center py-3">
            Mobile phone{" "}
            <small className="ml-auto text-success">
              <FaCheck className="mr-2" /> Verified
            </small>
          </li>
          <li className="d-flex align-items-center py-3">
            Government ID{" "}
            <small className="ml-auto text-success">
              <FaCheck className="mr-2" /> Verified
            </small>
          </li>
          <li className="d-flex align-items-center py-3">
            Bank Verification
            <div className="ml-auto">
              <Link href="/verify/banking">
                <a
                  className="btn btn-sm btn-outline-primary rounded-lg px-3 py-0 "
                >
                  Verify
                </a>
              </Link>
            </div>
          </li>
          <li className="d-flex align-items-center py-3">
            Employment Verification
            <div className="ml-auto">
              <Link href="/verify/employment">
                <a
                  className="btn btn-sm btn-outline-primary rounded-lg px-3 py-0 "
                >
                  Verify
                </a>
              </Link>
            </div>
          </li>
          <li className="d-flex align-items-center py-3">
            Selfie
            <div className="ml-auto">
              <Link href="/verify/photo">
                <a
                  className="btn btn-sm btn-outline-primary rounded-lg px-3 py-0 "
                >
                  Verify
                </a>
              </Link>
            </div>
          </li>
        </ul>

        <small className='text-danger'>--only show when verified user--</small>
        <h2 className="h5 mt-4 font-weight-bold">Loan programs</h2>

        <div className="bg-light p-2 rounded-lg d-flex align-items-center mb-3">
          <img src="/icon-home-improvement.svg" alt="" className="mr-3" style={{ width: "2.5rem" }} />
          Home Improvement
          <span className="ml-auto mr-3"><FaChevronRight /></span>
        </div>

        <div className="bg-light p-2 rounded-lg d-flex align-items-center mb-3">
          <img src="/icon-home-improvement.svg" alt="" className="mr-3" style={{ width: "2.5rem" }} />
          Power Sport
          <span className="ml-auto mr-3"><FaChevronRight /></span>
        </div>

        <div className="bg-light p-2 rounded-lg d-flex align-items-center mb-3">
          <img src="/icon-medical-dental.svg" alt="" className="mr-3" style={{ width: "2.5rem" }} />
          Medical / Dental
          <span className="ml-auto mr-3"><FaChevronRight /></span>
        </div>

        <div className="bg-light p-2 rounded-lg d-flex align-items-center mb-3">
          <img src="/icon-cash-loan.svg" alt="" className="mr-3" style={{ width: "2.5rem" }} />
          Cash Loan
          <span className="ml-auto mr-3"><FaChevronRight /></span>
        </div>



      </div >
    </AppWrapper >
  );
}
