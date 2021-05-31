// import Link from 'next/link'
import AppWrapper from 'components/_common/app-wrapper'
import BackButton from 'components/_common/back-button'
import { FaCheck, FaChevronRight } from "react-icons/fa";

export default function Banking() {
  return (
    <AppWrapper>
      <div className="d-flex flex-column h1-00" >
        <div className="px-3 mb-5 d-flex justify-content-between align-items-center">
          <BackButton />
          <strong className="pr-4">Bank Verification</strong>
          <span>&nbsp;</span>
        </div>
        <div className="px-3">
          <p>FLINKS Login screens</p>
          <div className="card rounded-lg border-0 shadow mb-4">
            <div className="card-body d-flex align-items-center">
              <img src="/icon-hsbc.svg" alt="" className="mr-3" />
              HSBC
              <span className="ml-auto"><FaChevronRight /></span>
            </div>
          </div>
          <div className="card rounded-lg border-0 shadow mb-4">
            <div className="card-body d-flex align-items-center">
              <img src="/icon-tdbank.svg" alt="" className="mr-3" />
              TD Bank
              <span className="ml-auto ">
                <span className="text-success mr-3 "><FaCheck />&nbsp;Verified</span>
                <FaChevronRight />
              </span>
            </div>
          </div>
          <div className="card rounded-lg border-0 shadow mb-4">
            <div className="card-body d-flex align-items-center">
              <img src="/icon-scottia.svg" alt="" className="mr-3" />
              Scottia Bank
              <span className="ml-auto"><FaChevronRight /></span>
            </div>
          </div>
        </div>
        <div className="mt-auto px-2 pb-4">
          <button className="btn btn-primary btn-block rounded-lg">Confirm</button>
        </div>
      </div>

    </AppWrapper>
  )
}
