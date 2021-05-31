import Link from 'next/link'
import AppWrapper from 'components/_common/app-wrapper'
import BackButton from 'components/_common/back-button'
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs'

export default function Employment() {
  return (
    <AppWrapper>
      <div className="d-flex flex-column h-100" >
        <div className="px-3 pb-3  d-flex justify-content-between align-items-center">
          <BackButton />
          <strong className="pr-4">Employment Verification</strong>
          <span>&nbsp;</span>
        </div>
        <div className="px-3">
          Complete the information of the company where you work
          <div className="card border-0 shadow mt-4">
            <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
              <label htmlFor="Company Name" className="m-0">Company Name</label>
            </div>
            <div className="card-body p-0 rounded-bottom">
              <input type="text" className="form-control px-3" name="Company Name" id="Company Name" placeholder="Money Moves" />
            </div>
          </div>

          <div className="card border-0 shadow mt-4">
            <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
              <label htmlFor="Street Address" className="m-0">Street Address</label>
            </div>
            <div className="card-body p-0 rounded-bottom">
              <input type="text" className="form-control px-3" name="Street Address" id="Street Address" placeholder="Street Address" />
            </div>
          </div>

          <div className="row">
            <div className="col ">
              <div className="card border-0 shadow mt-4">
                <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                  <label htmlFor="City" className="m-0">City</label>
                </div>
                <div className="card-body p-0 rounded-bottom">
                  <input type="text" className="form-control px-3" name="City" id="City" placeholder="Vancouver" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow mt-4">
                <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                  <label htmlFor="State" className="m-0">State</label>
                </div>
                <div className="card-body py-0 pl-0 pr-3 rounded-bottom d-flex  align-items-center">
                  <select name="State" id="State" className="form-control">
                    <option value="AB">AB</option>
                  </select>
                </div>
              </div>
            </div>
          </div>



          <div className="card border-0 shadow mt-4">
            <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
              <label htmlFor="Postal Code" className="m-0">Postal Code</label>
            </div>
            <div className="card-body p-0 rounded-bottom">
              <input type="text" className="form-control px-3" name="Postal Code" id="Postal Code" placeholder="34562" />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="Years">Year Worked Here</label>
            <div className="h2">
              <BsPlusCircle className="mr-3" /> 2 <BsDashCircle className="ml-3" />
            </div>
          </div>




        </div>
        <div className="mt-auto px-2 pb-4">
          <Link href="/verify">
            <a className="btn btn-primary btn-block rounded-lg">Confirm</a>
          </Link>
        </div>
      </div>
    </AppWrapper>
  )
}
