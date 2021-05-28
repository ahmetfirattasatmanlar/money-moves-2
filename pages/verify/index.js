import Link from 'next/link'
import AppWrapper from 'components/_common/app-wrapper'
import BackButton from 'components/_common/back-button'
import { FiHelpCircle } from 'react-icons/fi'
import { AiOutlineLock } from 'react-icons/ai'

export default function Verify() {
  return (
    <AppWrapper>
      <div className="px-3 d-flex justify-content-between align-items-center">
        <BackButton />
        <strong>Verify Identity</strong>
        <span><FiHelpCircle /></span>
      </div>

      <div className="px-3">
        <Link href="/verify/mobile">
          <a className="card border-0 pt-3 pb-2 px-3 shadow-lg rounded-lg text-dark mb-4">
            <span className="d-flex align-items-start">
              <img src="/icon-mobile-phone.svg" alt="" className="col-3 pl-0" />
              <span className="d-flex flex-column">
                <span className="h6 mb-1">Mobile Phone</span>
                <small>We will send you a code to your phone that you must confirm.</small>
                <span className="d-flex align-items-center text-primary mt-2"><AiOutlineLock /><span className="ml-2">Get the code</span></span>
              </span>
            </span>
          </a>
        </Link>

        <Link href="/verify/government-id">
          <a className="card border-0 pt-3 pb-2 px-3 shadow-lg rounded-lg text-dark mb-4">
            <span className="d-flex align-items-start">
              <img src="/icon-government-id.svg" alt="" className="col-3 pl-0" />
              <span className="d-flex flex-column">
                <span className="h6 mb-1">Government ID</span>
                <small>We will send you a code to your phone that you must confirm.</small>
                <span className="d-flex align-items-center text-primary mt-2"><AiOutlineLock /><span className="ml-2">Take a photo</span></span>
              </span>
            </span>
          </a>
        </Link>

        <Link href="/verify/banking">
          <a className="card border-0 pt-3 pb-2 px-3 shadow-lg rounded-lg text-dark mb-4">
            <span className="d-flex align-items-start">
              <img src="/icon-bank-verification.svg" alt="" className="col-3 pl-0" />
              <span className="d-flex flex-column">
                <span className="h6 mb-1">Banking Information</span>
                <small>We will send you a code to your phone that you must confirm.</small>
                <span className="d-flex align-items-center text-primary mt-2"><AiOutlineLock /><span className="ml-2">Fill a form</span></span>
              </span>
            </span>
          </a>
        </Link>

        <Link href="/verify/employment">
          <a className="card border-0 pt-3 pb-2 px-3 shadow-lg rounded-lg text-dark mb-4">
            <span className="d-flex align-items-start">
              <img src="/icon-employment-verification.svg" alt="" className="col-3 pl-0" />
              <span className="d-flex flex-column">
                <span className="h6 mb-1">Employment Verification</span>
                <small>We will send you a code to your phone that you must confirm.</small>
                <span className="d-flex align-items-center text-primary mt-2"><AiOutlineLock /><span className="ml-2">Fill a form</span></span>
              </span>
            </span>
          </a>
        </Link>


        <Link href="/verify/photo">
          <a className="card border-0 pt-3 pb-2 px-3 shadow-lg rounded-lg text-dark mb-4">
            <span className="d-flex align-items-start">
              <img src="/icon-selfie.svg" alt="" className="col-3 pl-0" />
              <span className="d-flex flex-column">
                <span className="h6 mb-1">Selfie photo</span>
                <small>We will send you a code to your phone that you must confirm.</small>
                <span className="d-flex align-items-center text-primary mt-2"><AiOutlineLock /><span className="ml-2">Take a selfie</span></span>
              </span>
            </span>
          </a>
        </Link>


      </div>



    </AppWrapper >
  )
}
