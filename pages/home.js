import Link from 'next/link'
import AppWrapper from 'components/_common/app-wrapper'
import { FaCheck } from 'react-icons/fa'

export default function Home() {
  return (
    <AppWrapper>
      <div className="bg-info text-white pt-5 pb-3 px-4">
        <p>Loan Balance</p>
        <p className="h2">$292,987.56</p>
        <Link href="/new-loan">
          <a className="btn btn-outline-light btn-sm mt-2" style={{borderRadius: '10rem'}}>Get a new loan now</a>
        </Link>
      </div>

      <div className="bg-white px-4">
        <div className="card shadow-sm">
          <div className="card-body d-flex align-items-center">
            <div className="w-100">
              <p className="m-0"><small className="text-muted">Available Credit</small></p>
              <p className="h4 m-0">$15,239.94</p>
            </div>
            <div className="col-auto px-0">
              <Link href="/transfer">
                <a><small>Transfer funds</small></a>
              </Link>
            </div>
          </div>
          <div className="card-footer text-center">
            View Details
          </div>
        </div>

        <h2 className="h5 mt-4">Verification Steps</h2>

        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-4">
            Mobile phone  <small className="ml-auto text-success"><FaCheck className="mr-2"/> Verified</small>
          </li>
          <li className="d-flex align-items-center mb-4">
            Government ID <small className="ml-auto text-success"><FaCheck className="mr-2"/> Verified</small>
          </li>
          <li className="d-flex align-items-center mb-4">
            Bank Verification
            <div className="ml-auto">
              <Link href="/verify/banking"><a className="btn btn-sm btn-outline-success rounded py-0">Verify</a></Link>
            </div>
          </li>
          <li className="d-flex align-items-center mb-4">
            Employment Verification
            <div className="ml-auto">
              <Link href="/verify/employment"><a className="btn btn-sm btn-outline-success rounded py-0">Verify</a></Link>
            </div>
          </li>
          <li className="d-flex align-items-center mb-4">
            Selfie
            <div className="ml-auto">
              <Link href="/verify/photo"><a className="btn btn-sm btn-outline-success rounded py-0">Verify</a></Link>
            </div>
          </li>
        </ul>







      </div>

    </AppWrapper>



  )
}
