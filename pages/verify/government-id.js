import { useState } from 'react'
import AppWrapper from 'components/_common/app-wrapper'
import BackButton from 'components/_common/back-button'
import UploadFile from 'components/_common/upload-file'
import { FaChevronRight } from 'react-icons/fa'

export default function GovernmentId() {
  const [onSlide, setOnSlide] = useState(false)
  const [checkQuality, setCheckQuality] = useState(false)

  return (
    <AppWrapper>
      <div className="d-flex flex-column h-100" >
        <div className="px-3 pb-3  d-flex justify-content-between align-items-center">
          <BackButton />
          <strong className="pr-4">Government ID Verification</strong>
          <span>&nbsp;</span>
        </div>
        <div className="px-3 pb-bottom-app">
          {!checkQuality ?
            <>
              Complete the form and upload a photo of your passport or driver's license.

<div className="row">
                <div className="col ">
                  <div className="card border-0 shadow mt-4">
                    <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                      <label htmlFor="First Name" className="m-0">First Name</label>
                    </div>
                    <div className="card-body p-0 rounded-bottom">
                      <input type="text" className="form-control px-3" name="First Name" id="First Name" placeholder="John" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 shadow mt-4">
                    <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                      <label htmlFor="Last Name" className="m-0">Last Name</label>
                    </div>
                    <div className="card-body py-0 pl-0 pr-3 rounded-bottom d-flex  align-items-center">
                      <div className="card-body p-0 rounded-bottom">
                        <input type="text" className="form-control px-3" name="Last Name" id="Last Name" placeholder="Connor" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="card border-0 shadow mt-4">
                    <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                      <label htmlFor="Date of Birth" className="m-0">Date of Birth</label>
                    </div>
                    <div className="card-body p-0 rounded-bottom">
                      <input type="date" className="form-control px-3" name="Date of Birth" id="Date of Birth" placeholder="Street Address" />
                    </div>
                  </div>
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

              <div className="card border-0 shadow mt-4 mb-4">
                <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                  <label htmlFor="Postal Code" className="m-0">Postal Code</label>
                </div>
                <div className="card-body p-0 rounded-bottom">
                  <input type="text" className="form-control px-3" name="Postal Code" id="Postal Code" placeholder="34562" />
                </div>
              </div>

              <UploadFile text="Government ID photo" />

              <button className="btn btn-primary btn-block rounded-lg my-4 shadow-sm" onClick={() => setOnSlide(true)}>Confirm</button>

              <div className={`slider-panel ${onSlide ? 'show' : ''}`}>
                <div className="slider-panel-dialog">
                  <p className="h5 font-weight-bold">Let's get you verified!</p>
                  <p>Which photo ID whould you like to use?</p>

                  <div className="d-flex align-items-center py-3" onClick={() => setCheckQuality(true)}>
                    <img src="/icon-driver-license.svg" alt="" className="mr-3" />
                    <strong>Driver's License</strong>
                    <FaChevronRight className="ml-auto" />
                  </div>
                  <div className="d-flex align-items-center py-3" onClick={() => setCheckQuality(true)}>
                    <img src="/icon-passport.svg" alt="" className="mr-3" />
                    <strong>Passport</strong>
                    <FaChevronRight className="ml-auto" />
                  </div>
                </div>
              </div>
            </> : <>
              image of passport goes here </>

          }

        </div>
      </div>
    </AppWrapper>
  )
}
