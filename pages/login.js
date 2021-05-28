import Link from 'next/link'
import { useState } from 'react'

export default function Login() {

  const [withEmail, isWithEmail] = useState(false)

  return (
    <div className="py-5 text-center px-3">
      <img src="/logo-moneymoves.svg" className="mt-4" />

      <div className={withEmail ? 'pt-4 pb-2' : 'py-5'}>
        <h1 className="h3">Sign In</h1>
        <p>
          Don't have an account?
          <Link href="/register">
            <a> Register</a>
          </Link>
        </p>
      </div>

      <button className="btn btn-light bg-white shadow btn-block  pl-1 py-3 mb-3" style={{ borderRadius: '10rem' }}><img src="/icon-google.svg" className="mr-2" alt="Sign in with Google" />   Sign In with Google</button>
      <button className="btn btn-light bg-white shadow btn-block pl-1 py-3 " style={{ borderRadius: '10rem' }}><img src="/icon-fb.svg" className="mr-2" alt="Sign in with Facebook" /> Sign In with Facebook</button>


      {!withEmail ?
        <p className="btn-link text-decoration-underline mt-5" onClick={() => isWithEmail(!withEmail)}>Our use your email account</p>
        :
        <p className="pt-4 text-muted">---- Our use your email account ----</p>
      }


      {withEmail ? <form>

        <div className="mb-3">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username or email" />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <div className="d-flex justify-content-end mb-4">
          <Link href="/recover-password">
            <a>Forgot Password</a>
          </Link>
        </div>

        <Link href="/home">
          <a className="btn btn-primary py-3 btn-block" style={{ borderRadius: '10rem' }}>Sign In</a>
        </Link>
      </form> : undefined}


    </div>

  )
}
