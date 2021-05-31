import Link from 'next/link'
import BackButton from 'components/_common/back-button'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

export default function RecoverPassword() {
  const [resetPassword, setResetPassword] = useState(false)

  return (
    <div className="d-flex flex-column h-100">

      <div className="d-flex align-items-center justify-content-center py-2">
        <div className="w-25"><BackButton /></div>
        <div className="w-100"><img src="/logo-moneymoves.svg" alt="logo money moves" className="img-fluid" /></div>
        <div className="w-25"></div>
      </div>

      {/* Recover Password  */}

      <div className="px-3">
        {!resetPassword ?
          <>
            <div className="text-center py-4"> <img src="/img-create-password.svg" alt="Recover password" /></div>
            <h1 className="h3">Recovery Password</h1>
            <p>Enter your email address and we'll send you a code to reset your password.</p>

            <div className="mt-5">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
            </div>

          </>
          :
          <>
            <div className="text-center py-4"> <img src="/img-create-password.svg" alt="Create password on money moves" /></div>
            <h1 className="h3 font-weight-bold">Reset Password</h1>
            <p>Choose a secure password that will be easy for you to remember.</p>

            <div className="mt-5">
              <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" placeholder="New Password" />
            </div>

            <ul className="list-unstyled mt-3">
              <li className="py-1"><span className="text-success"><FaCheck /></span> Has at least 8 characters</li>
              <li className="py-1"><span className="text-muted"><FaCheck /></span> Has an uppercase letter or symbol</li>
              <li className="py-1"><span className="text-muted"><FaCheck /></span> Has a number</li>
            </ul>
          </>
        }
      </div>

      {/* Create Password  */}
      <div className="mt-auto p-4 text-center">
        {!resetPassword ?
          <div>
            <small className="px-3">By using our mobile app, you agree to our Terms of Use and Privacy Policy</small>
            <button
              className="btn btn-primary py-3 btn-block my-2"
              style={{ borderRadius: '10rem' }}
              onClick={() => setResetPassword(!resetPassword)}>Send me a code</button>

          </div>

          :
          <button className="btn btn-primary py-3 btn-block " style={{ borderRadius: '10rem' }}>
            <Link href="/">
              <a className="text-white">Save Password</a>
            </Link>
          </button>
        }

      </div>

    </div>
  )
}
