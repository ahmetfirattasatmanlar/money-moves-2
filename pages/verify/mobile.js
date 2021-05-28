import { useState } from 'react'
import AppWrapper from 'components/_common/app-wrapper'
import BackButton from 'components/_common/back-button'

export default function Mobile() {
  const [confirm, setConfirm] = useState(false)
  return (
    <AppWrapper>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <div className="px-3">
          <BackButton />
        </div>
        <div className="px-3">
          {!confirm ? <>
            <div className="text-center py-4"> <img src="/img-register.svg" alt="Register account with money moves" /></div>
            <h1 className="h3">Get the code</h1>
            <p>Simply enter your phone number and we will send a code to confirm It.</p>

            <div className="mt-5">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="(562) 859-4936" />
            </div>
          </> : <>
            Hey
          </>}

        </div>
        <div className="mt-auto p-2">
          {!confirm ?
            <button className="btn btn-primary btn-block rounded-lg" onClick={() => setConfirm(true)}>Continue</button>
            :
            <button>Dude</button>
          }
        </div>
      </div>


    </AppWrapper>
  )
}
