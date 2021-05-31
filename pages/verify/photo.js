import { useState } from 'react'
import Link from 'next/link'
import BackButton from 'components/_common/back-button'
import AppWrapper from 'components/_common/app-wrapper'
import { FiHelpCircle } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa'

export default function Photo() {
  const [checkQuality, setCheckQuality] = useState(false)
  return (
    <AppWrapper>
      {!checkQuality ?
        <div className="d-flex flex-column h-100 bg-dark" >
          <div className="px-3 pb-3 text-white d-flex justify-content-between align-items-center">
            <BackButton dark />
            <strong className="pr-4 ">Selfie</strong>
            <FiHelpCircle />
          </div>
          <div className="px-3 text-center py-5">
            <p className="text-white h4 font-weight-bold">Center your face</p>
            <p className="text-white">Align your face to the center of the selfie area and then take a photo</p>
            <button className="btn btn-primary rounded-lg px-3" onClick={() => setCheckQuality(true)}><FaCheck /></button>
          </div>
        </div>
        :
        <div >
          <div style={{ paddingBottom: '6rem' }}>
            <div className="px-3 pb-3 d-flex justify-content-between align-items-center">
              <BackButton />
              <strong className="pr-4 ">Selfie</strong>
              <span>&nbsp;</span>
            </div>
          </div>

          <div className="shadow">
            <div className="card shadow-lg rounded-lg border-0 mb-4 text-center px-3 pb-bottom-app">
              <img src="/img-photo-quality.png" alt="" className="img-fluid w-50 shadow-lg rounded-lg mx-auto" style={{ marginTop: "-5rem" }} />
              <div className="mt-5">
                <img src="/icon-check-quality.svg" alt="" />
                <h4 className="font-weight-bold mt-4">Check quality</h4>
                <p>Please make sure your card details are clear to read with no blur or glare.</p>
                <div className="mt-5">
                  <Link href="/verify">
                    <a className="btn btn-primary btn-block shadow rounded-lg" >All clear. Continue</a>
                  </Link>
                  <button className="btn btn-light bg-transparent" onClick={() => setCheckQuality(false)}>Take a new photo</button>
                </div>
              </div>
              {/* <img src="/img-government-id-example.png" alt="" className="img-fluid shadow-lg mb-5 mt-neg-lg " />
              <img src="/icon-check-quality.svg" alt="" className="mt-2" />
              <h4 className="font-weight-bold mt-4">Check quality</h4>
              <p>Please make sure your card details are clear to read with no blur or glare.</p>
              <div className="mt-5s">
                <button className="btn btn-primary btn-block shadow rounded-lg" onClick={() => { setCheckQuality(false), setNewPassport(true) }}>All clear. Continue</button>
                <button className="btn btn-light text-primary btn-block" onClick={() => setCheckQuality(false)}>Take a new photo</button>
              </div> */}
            </div>
          </div>
        </div>



      }

    </AppWrapper>
  )
}
